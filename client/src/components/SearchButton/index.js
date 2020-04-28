import React from "react";

export default function SearchButton(props){
    return (
        <span>
        <button className="btn btn-dark search mt-4" onClick={props.handleSubmit}>Search</button>
        </span>
    )
}