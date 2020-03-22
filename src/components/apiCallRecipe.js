import {useEffect, useState} from "react";

export default function(props) {
    const [recipe, setRecipe] = useState({
        recipes:                    [],
        filteredRecipe:             []
    });

    useEffect(() => {
        fetch("https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/")
            .then(response => response.json())
            // call setState with the new articles, this will cause the component to re-render
            .then(data => setRecipe({
                recipes:            data.results,
                filteredRecipe:     data.results
            }));
    }, []);//!NB remember empty array to only load once

    return [recipe, setRecipe];
}