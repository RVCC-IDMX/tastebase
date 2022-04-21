import React, { useEffect, useState } from 'react';
import CardDetails from './AppDetails';
import style from '../scss/main.scss';

const App = () => {
    const req = async url => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);
        xhr.send(null);
        if (xhr.status === 200) {
            return xhr.responseText;
        }
    };
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("chicken");
    useEffect(() => {
        getRecipes(); // eslint-disable-next-line
    }, [query]);

    // Request search from Edamam
    const getRecipes = async () => {
        // Request, recieve, and parse data from API
        const apiID = process.env.API_ID;
        const apiKey = process.env.API_KEY;
        let data = await req(`https://api.edamam.com/search?q=${query}&app_id=${apiID}&app_key=${apiKey}`);
        data = JSON.parse(data);

        // Add seleted recipes to output array
        const recipeData = []
        const range = await data.to - data.from;
        for (let i = 0; i < range; i++) {
            recipeData.push({
                "img":          data.hits[i].recipe.image,
                "allergens":    data.hits[i].recipe.healthLabels,
                "calories":     data.hits[i].recipe.calories,
                "time":         data.hits[i].recipe.totalTime,
                "title":        data.hits[i].recipe.label,
                "uri":          data.hits[i].recipe.uri,
            });
        }

        // Return data
        setRecipes(recipeData);
    };

    const updateSearch = e =>{
        setSearch(e.target.value);
    };

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch("");
    };

    var favorites = JSON.parse(localStorage.getItem('favoritesArray'));
    if (favorites == null) favorites = {};

    


return (
    <>
    {<form className="search-form" onSubmit={getSearch} >
		<input className="search-bar" type="text" value={search}
			onChange={updateSearch} />
		<button className="search-button" type="submit" >
			Search
		</button>
	</form>}

    {recipes.map(recipe=>
        (<CardDetails
        key = {Math.floor(Math.random() * 10000)}
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

export default App;