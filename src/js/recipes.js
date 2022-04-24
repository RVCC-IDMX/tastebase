import React from 'react';
import CardDetails from './AppDetails';

const Recipes = (recipes) => {
    return (
        <>
        {recipes.map(recipe=>
        (<CardDetails
        key = {Math.floor(Math.random() * 100000)}
         img = {recipe.img}
         allergens = {recipe.allergens}
         calories = {recipe.calories}
         time = {recipe.time}
         title = {recipe.title}
         uri = {recipe.uri}
         favorites = {favorites}
         >
        </CardDetails>))}
        </>
    )
}

export default Recipes;