import React from 'react';
import style from '../scss/main.scss';

const AppDetails = () => pug`
    .card
        .card__display
            img.card__img(src="https://www.edamam.com/web-img/a10/a10fa0fb2e5d234e27f222059829ee5e.jpg")
            .card__liked 
        .card__info
            h2.card__name Chocolate Chip Scones
            .card__rating
                span.card__stars ✰✰✰✰✰
                span.card__num-rates 1.2k ratings
            .card__detail
                span.card__calories 394 calories
                span.card__time 1 hour
    .card
        .card__display
            img.card__img(src="https://www.edamam.com/web-img/a10/a10fa0fb2e5d234e27f222059829ee5e.jpg")
            .card__liked 
        .card__info
            h2.card__name My Very Long Recipe Name
            .card__rating
                span.card__stars ✰✰✰✰
                span.card__num-rates 930 ratings
            .card__detail
                span.card__calories 444 calories
                span.card__time 45 minutes
    .card
        .card__display
            img.card__img(src="https://www.edamam.com/web-img/a10/a10fa0fb2e5d234e27f222059829ee5e.jpg")
            .card__liked 
        .card__info
            h2.card__name Test Header
            .card__rating
                span.card__stars ✰✰✰
                span.card__num-rates 21.5k ratings
            .card__detail
                span.card__calories 1.2k calories
                span.card__time 30 minutes
`

export default AppDetails;