import React, { useEffect, useState } from 'react'
import style from '../scss/main.scss';
import starNone from '../img/icons/star.svg'
import starHalf from '../img/icons/star-half.svg'
import starFill from '../img/icons/star-fill.svg'
import allergenDairy from '../img/allergen/dairy.svg'
import allergenEgg from '../img/allergen/egg.svg'
import allergenGluten from '../img/allergen/gluten.svg'
import allergenMollusk from '../img/allergen/mollusk.svg'
import allergenPeanut from '../img/allergen/peanut.svg'
import allergenShellfish from '../img/allergen/shellfish.svg'
import allergenTreeNut from '../img/allergen/tree-nut.svg'

// Function to request a response from a URL
const req = async url => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, false);
    xhr.send(null);
    if (xhr.status === 200) {
        return xhr.responseText;
    }
};

// Generate random number [min to max]
const rand = (min, max) => Math.random() * (max - min) + min;

// Stringify a number and attach a unit to it
const unitify = (n, unit) => {
    const magnitude = Math.floor(Math.log(n) / Math.LN10 + 1e-9);
    const mantissa = n / Math.pow(10, magnitude - magnitude % 3);
    const roundTo = (magnitude % 3 === 0) && (magnitude !== 0) ? 1 : 0;
    let numStr = mantissa.toFixed(roundTo);
    if (n >= 1e6) {
        numStr = `${numStr}m ${unit}s`
    } else if (n >= 1e3) {
        numStr = `${numStr}k ${unit}s`
    } else if (n > 1) {
        numStr = `${numStr} ${unit}s`
    } else if (n === 1) {
        numStr = `1 ${unit}`
    } else {
        numStr = `No ${unit}s`
    }
    return numStr.replace(".0", '');
}

const allergenList = {
    "Dairy": allergenDairy,
    "Egg": allergenEgg,
    "Gluten": allergenGluten,
    "Mollusk": allergenMollusk,
    "Peanut": allergenPeanut,
    "Shellfish": allergenShellfish,
    "Tree-Nut": allergenTreeNut,
};

const stars = () => rand(0, 10) / 2;
const ratings = () => Math.round(rand(0, 1000000));

const displayStars = n => pug`
    img(src=${n > 0.5 ? starFill : (n > 0 ? starHalf : starNone)})
    img(src=${n > 1.5 ? starFill : (n > 1 ? starHalf : starNone)})
    img(src=${n > 2.5 ? starFill : (n > 2 ? starHalf : starNone)})
    img(src=${n > 3.5 ? starFill : (n > 3 ? starHalf : starNone)})
    img(src=${n > 4.5 ? starFill : (n > 4 ? starHalf : starNone)})
`

const displayAllergens = a => {
    let output = [];
    Object.entries(allergenList).forEach(entry => {
        let [key, value] = entry;
        let sourceKey = `${key}-Free`;
        if (a.includes(sourceKey) === false) {
            output.push(pug`img(src=${value})`);
        }
    });
    return output;
}

// Stringify the number of ratings
const displayRatings = n => unitify(n, "rating");

// Stringify the number of calories
const displayCalories = n => unitify(n, "calorie");

// Stringify an amount of time in minutes
const displayTimeFull = n => {
    if (n >= 120) {
        return `${Math.floor(n / 60)}+ hours`
    } else if (n > 1) {
        return `${n} min.`
    } else if (n === 1) {
        return `1 min.`
    } else {
        return `0 min.`
    }    
}

const makeCard = (img="", allergens=[], calories=0, time=0) => pug`
    .card
        .card__display
            .card__liked
                svg.card__heart(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16")
                    path(fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z")
            img.card__img(src=${img})
        .card__info
            h2.card__name To Be Randomized
            .card__allergens ${displayAllergens(allergens)}
            .card__rating
                span.card__stars ${displayStars(stars())}
                span.card__num-rates ${displayRatings(ratings())}
            .card__detail
                span.card__calories ${displayCalories(calories)}
                span.card__time ${displayTimeFull(time)}
`

const AppDetails = () => {
    const [recipes, setRecipes] = useState([]);
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
            });
        }

        // Return data
        setRecipes(recipeData);
        console.log(recipeData);
    };

    return pug`
    ${recipes.forEach(recipe => {
        makeCard(recipe.img, recipe.allergens, recipe.calories, recipe.time);
    })}
    `
};

export default AppDetails;