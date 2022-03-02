import React, { useEffect, useState } from 'react';
import style from './scss/card.scss';

const App = () => {
return (
    <div className='card_container'>
        <div className='card_content'>
            <h1 className='card_title'>Card Title</h1>
            <p className='card_body'>This is body content</p>
            <div className='button'>Details</div>
        </div>
    </div>
)
}

export default App;