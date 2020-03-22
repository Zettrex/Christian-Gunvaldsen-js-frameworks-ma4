import React from "react";
import Ingredients from "./Ingredients"

export default function (props) {
    console.log(props.items);
    return(
        <ul>
            {props.items.map(recipe =>
                <li key={recipe.title}>
                    <h2>{recipe.title}</h2>
                    <img src={recipe.thumbnail} alt={"image of " + recipe.title}/>
                    <Ingredients ingredients={recipe.ingredients}/>
                </li>
            )}
        </ul>
    )
}