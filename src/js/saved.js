import { Nav } from './nav';
import { Git } from './git';
import React from 'react';
import ReactDOM from 'react-dom';
import MagicGrid from "magic-grid"
//import {v4 as uuidv4} from 'uuid';
import Favorites from './SavedDetails';

// Import navigation + Git data
Nav();
Git();


ReactDOM.render(
  <React.StrictMode>
      <Favorites />
  </React.StrictMode>,
  document.getElementById('favoriteCards')
);


// Create dynamic grid of cards
let magicGrid = new MagicGrid({
  container: "#favoriteCards",
  items: 1,
  gutter: 16,
});
magicGrid.listen();