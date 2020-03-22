import React from "react";
export default function (props) {
    return(
        <form>
            <input type="text" placeholder="search" onChange={event => props.FilterF(event)}/>
            <button onClick={props.FilterF}>Search</button>
        </form>
    )
}