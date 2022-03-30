import React from 'react';
import style from '../scss/main.scss';

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

const stars = () => rand(0, 10) / 2;
const ratings = () => Math.round(rand(0, 1000000));
const calories = () => rand(150, 2500);
const timeFull = () => Math.round(rand(1, 240));

/*
const displayStars = n => pug`
    include ../img/icons/star${n > 0.5 ? "-fill" : (n > 0 ? "-half" : "")}.svg
    include ../img/icons/star${n > 1.5 ? "-fill" : (n > 1 ? "-half" : "")}.svg
    include ../img/icons/star${n > 2.5 ? "-fill" : (n > 2 ? "-half" : "")}.svg
    include ../img/icons/star${n > 3.5 ? "-fill" : (n > 3 ? "-half" : "")}.svg
    include ../img/icons/star${n > 4.5 ? "-fill" : (n > 4 ? "-half" : "")}.svg
`
*/

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

const makeCard = () => pug`
    .card
        .card__display
            img.card__img(src="https://source.unsplash.com/random/500x500?food")
            .card__liked 
        .card__info
            h2.card__name To Be Randomized
            .card__rating
                span.card__stars !!!!!
                span.card__num-rates ${displayRatings(ratings())}
            .card__detail
                span.card__calories ${displayCalories(calories())}
                span.card__time ${displayTimeFull(timeFull())}
`

const AppDetails = () => pug`
    ${makeCard()}
    ${makeCard()}
    ${makeCard()}
    ${makeCard()}
    ${makeCard()}
    ${makeCard()}
    ${makeCard()}
    ${makeCard()}
`

export default AppDetails;