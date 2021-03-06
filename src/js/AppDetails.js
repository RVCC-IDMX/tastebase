import React, { useEffect, useState } from 'react'
import style from '../scss/main.scss';
import '../scss/styling.css';
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
import {AiFillHeart} from 'react-icons/ai';
import {v4 as uuidv4} from 'uuid';

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



const makeCard = (img="", allergens=[], calories=0, time=0, title="", uri, fullUrl, favorites=[]) => {

    //Create a unique id
    const key = Math.floor(Math.random() * 10000)

    //Create object for localStorage
    const recObj = {
        img,
        allergens,
        calories,
        time,
        title,
        uri,
        fullUrl
    }

    //On click, check the state of the heart
    function checkHeart(favorites) {
        if (favorites[uri]) return "red";
        return "gray";
    }

    //On click, handle favorites
    function buttonClick(event){

        //Working Code : DO NOT DELETE
    
        //Make sure URI is saved for each heart icon
        //Find element that has unique URI and click is true
        const el = document.querySelector(`[data="${uri}"]`);
    
        //If uri is property of favorites and value is true, then toggle red to grey and make value false
        //Else toggle grey to red and make value true
        if (favorites[uri]){
            el.style.fill = 'grey';
            favorites[uri] = undefined;
            delete(favorites[uri]);
        }
        else {
            el.style.fill = 'red';
            favorites[uri] = recObj;
        }
    
        //Set favoritesArray in localstorage
        localStorage.setItem('favoritesArray', JSON.stringify(favorites));
    }

    return (pug`
        .card
            .card__display
                .card__liked
                    AiFillHeart(id="heart_button", color=${checkHeart(favorites)}, onClick=${(event)=>buttonClick(event)}, data=${uri})
                img.card__img(src=${img})
            .card__info
                h2.card__name ${title}
                .card__allergens ${displayAllergens(allergens)}
                .card__rating
                    span.card__stars ${displayStars(stars())}
                    span.card__num-rates ${displayRatings(ratings())}
                .card__detail
                    span.card__calories ${displayCalories(calories)}
                    span.card__time ${displayTimeFull(time)}
                    span.card__url
                        a(href=${fullUrl} target='_blank' class='full__recipe') Visit
    `);

}

const AppDetails = ({img, allergens, calories, time, title, uri, fullUrl, favorites}) => {
    return pug `
        ${makeCard(img, allergens, calories, time, title, uri, fullUrl, favorites)}
    `
};

export default AppDetails;