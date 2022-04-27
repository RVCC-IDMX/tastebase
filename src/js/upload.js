import { Nav } from './nav';
import { Git } from './git';
import NotesApp from '../js/Notes/Notes';
import React from 'react';
import ReactDOM from 'react-dom';
// Add import for notes component

// Import navigation + Git data
Nav();
Git();

// React.Dom render here, notes component in the element of noteBody
ReactDOM.render(
    <React.StrictMode>
        <NotesApp />
    </React.StrictMode>,
    document.getElementById('uploadBody')
  );