import React from "react";
import SearchButton from "../SearchButton"


export default function TextBox(props) {
    return (
        <div className="row">
            <div className="col-sm-3">
            <input className="form-control mt-4" type="text" name="search" value={props.search} onChange={props.handleInputChange} />

            </div>
            <div className="col-sm-3">
                <SearchButton handleSubmit={props.handleSubmit} />
            </div>
        </div>
    )
}

