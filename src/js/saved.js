import React from 'react';
//import {v4 as uuidv4} from 'uuid';
import CardDetails from './AppDetails';

const Favorites = (recipe) => {
    
    let favorites = JSON.parse(localStorage.getItem("favoritesArray"));
    let favs = Object.values(favorites);
    //console.log(favs);
    
    return (
    <>
        
        
		{favs.map(recipe => (
		<CardDetails
        img = {recipe.img}
        allergens = {recipe.allergens}
        calories = {recipe.calories}
        time = {recipe.time}
        title = {recipe.title}
        uri = {recipe.uri}
        favorites = {favorites}
			
		/>
        
		))}
	
    </>
    )
}

export default Favorites;