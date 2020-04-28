import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import TextBox from "../components/TextBox";
import ListItem from "../components/ListItem";
import Axios from "axios";
import SavedBooks from "../components/SavedBooks";
import Header from "../components/Header";


class Saved extends Component {
    state = {
        savedBooks: []
    };

    componentDidMount() {
        this.getBooks();
    };

    getBooks = () => {
        Axios.get("/api/books")
            .then(res => {
                console.log("results: ", res);
                this.setState({ savedBooks: res.data })
            })
            .catch(err => console.log(err));
    };

    deleteBook = id => {
        API.deleteBook(id)
        .then(res => this.getBooks())
        .catch (err => console.log(err));
    };

    render() {
        return (
            <Container>
                <Header />
                {console.log("static text", this.state.savedBooks)}
                <SavedBooks books={this.state.savedBooks} handleSubmit={this.deleteBook} />
            </Container>
        )
    };

}

export default Saved;