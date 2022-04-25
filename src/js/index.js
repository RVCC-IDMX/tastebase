import { Nav } from './nav';
import { Git } from './git';
import React from 'react';
import ReactDOM from 'react-dom';
import MagicGrid from "magic-grid"
import App from './App';

// Import navigation + Git data
Nav();
Git();

// Create dynamic grid of cards
let magicGrid = new MagicGrid({
    container: "#cards",
    items: 10,
    gutter: 45,
});
magicGrid.listen();

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('cards')
);
