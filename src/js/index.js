import { Nav } from './nav';
import { Git } from './git';
import React from 'react';
import ReactDOM from 'react-dom';
import MagicGrid from "magic-grid"
import App from './App';

// Import navigation + Git data
Nav();
Git();

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('cards')
);

// Create dynamic grid of cards
// let magicGrid = new MagicGrid({
//     container: "#cardset",
//     items: 1,
//     gutter: 16,
// });
// magicGrid.listen();