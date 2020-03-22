import React from "react";

export default function (props) {
    return(
        <ul>
            {props.ingredients.split(", ").map(i => <li key={Math.random()}>{i}</li>)}
        </ul>
    )
}