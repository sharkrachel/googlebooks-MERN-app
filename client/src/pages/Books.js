import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import TextBox from "../components/TextBox";
import ListItem from "../components/ListItem";
import Header from "../components/Header";

class Books extends Component {
    state = {
       bookResults: [],
       search: "",
       title: "", 
       author: "",
       plot: "",
       image: "", 
       link: ""      
       
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value// search:"phil"
        });
        console.log("imput change works", value)
    };
    
   handleSubmit = event => {
       event.preventDefault();
       API.search(this.state.search)
       .then(response => {
           this.setState({ books: response.data, title: "", author: "", plot: "", image: "", link: ""})

        console.log("results: ", this.state.books);
           
       }).catch (err => console.log(err));
   };

   saveBook = id => {
       console.log(id);

       let currentBook = this.state.books.find(book => book.id === id);
       console.log("this.state.books: ", this.state.books);

       API.saveBook({
           title: currentBook.volumeInfo.title,
           author: [].concat(currentBook.volumeInfo.authors),
           plot: currentBook.volumeInfo.description,
           image: currentBook.volumeInfo.imageLinks.thumbnail,
           link: currentBook.volumeInfo.previewLink
       })
       .then(res => {
           console.log("book saved: ", res);
       })
       .catch(err => console.log(err));
   };
    componentDidMount() {
        
    };
    render() {
        return (
            <Container>
                <Header />
                <TextBox search={this.state.search}  handleInputChange={this.handleInputChange} handleSubmit={this.handleSubmit}  />
                <ListItem books={this.state.books} handleSubmit={this.saveBook}/>
            </Container>
        )
    };

}


export default Books;