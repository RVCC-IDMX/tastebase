import React from 'react';
import style from './scss/card.scss';

const AppDetails = () => pug`
    .card_container
            h1.card_title Card Title
            p.card_body This is the content of this card
            .button Details
    `

export default AppDetails;