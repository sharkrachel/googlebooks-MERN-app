import React from "react";

export default function SavedBooks(props) {
    console.log("props: ", props.books);
    return (
        <div className="list-group mt-5">
            {props.books.map((book, index) => {
                return (
                    <a href="#" key={index} className="list-group-item list-group-item-action">
                        <div className="row">
                            <div className="col-sm-3">
                                <img src={book.image} />
                            </div>
                            <div className="col-sm-9 text-left">
                                <div className="d-flex w-100 justify-content-between">
                                    <h4 className="mb-1">{book.title}</h4>
                                </div>
                                <div className="d-flex w-100 justify-content-between">
                                    <h5 className="mb-1">{book.author}</h5>
                                </div>
                                <p className="mb-1">{book.plot}</p>
                                <button  onClick={() => {
                                    props.handleSubmit(book._id)
                                }} className="btn btn-dark">Delete</button>
                            </div>
                        </div>
                    </a>
                )

            })}


        </div>
    )
}