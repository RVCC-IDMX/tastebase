import React from 'react';
import CardDetails from './AppDetails';

const Favorites = (recipe) => {
    
    let favorites = JSON.parse(localStorage.getItem("favoritesArray"));
    let favs = Object.values(favorites);
    
    return (
    <>
        
        
		{favs.map(recipe => (
		<CardDetails
        key = {Math.floor(Math.random() * 100000)}
        img = {recipe.img}
        allergens = {recipe.allergens}
        calories = {recipe.calories}
        time = {recipe.time}
        title = {recipe.title}
        uri = {recipe.uri}
        fullUrl = {recipe.fullUrl}
        favorites = {favorites}
			
		/>
        
		))}
	
    </>
    )
}

export default Favorites;