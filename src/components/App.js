import React from "react";
import SearchRecipe from "./SearchRecipe";
import RecipeList from "./RecipeList";
import recipeApi from "./apiCallRecipe";

export default function () {
    const [recipe, setRecipe] = recipeApi();
    function searchList(e) {
        console.log(recipe.filteredRecipe);
        setRecipe({
            recipes:                recipe.recipes,
            filteredRecipe:         recipe.recipes.filter(recipe => recipe.ingredients.includes(e.target.value))
        });
    }

    return (
        <div>
            <SearchRecipe FilterF={searchList}/>
            <RecipeList items={recipe.filteredRecipe}/>
        </div>
    )
}