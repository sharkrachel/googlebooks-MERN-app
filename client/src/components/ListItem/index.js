import React from "react";
import Books from "../../pages/Books";

export default function ListItem(props) {
    return (
        <div className="list-group mt-10">
            {props.books != undefined ? props.books.map(book => {
                return (

                    <div className="row mt-5">
                        <div className="col-md-3">
                            <img src={book.volumeInfo.imageLinks.thumbnail} />
                        </div>

                        <div className="col-md-7 text-left">
                            <div className="d-flex w-100 justify-content-between">
                                <h4 className="mb-1">{book.volumeInfo.title}</h4>
                            </div>
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">{book.volumeInfo.authors.map((author) => {
                                    return (<> {author}  <br /> </>);  
                                }) }</h5>
                            </div>
                            <p className="mb-1">{book.volumeInfo.description}</p>

                        </div>

                        <span className="col-md-2">
                            <a href={book.volumeInfo.previewLink}  target="_blank">
                                <button className="btn btn-dark">View</button>
                            </a>
                            <button onClick={() => { props.handleSubmit(book.id) }} saveBook={props.saveBook} result={book} className="btn btn-dark ml-3">Save</button>
                        </span>

                    </div>

                )

            }
            )
                : ""
            }


        </div>
    )
}