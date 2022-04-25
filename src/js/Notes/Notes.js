import { useState, useEffect } from 'react';
import React from 'react';
//import { v4 as uuidv4 } from 'uuid';
import NotesList from './NotesList';
import Search from './Search';
import Header from './Header';

const NotesApp = () => {
	//In place of uuidv4()
	var rand = Math.floor(Math.random() * 100000);
	//Default notes/recipes
	//Function accepts notes as variable and then sets their value
	const [notes, setNotes] = useState([
		{
			id: rand,
			title: "Chicken Vesuvio",
			body: 'I love chicken vesuvio so much!',
			date: '7/17/2000',
		},
		{
			id: rand,
			title: "Apple Pie",
			body: 'Get a load of them apples!',
			date: '7/17/2000',
		},
		{
			id: rand,
			title: "Taylor Ham Bagel",
			body: 'Is it Taylor Ham or Pork Roll?',
			date: '7/17/2000',
		},
		{
			id: rand,
			title: "Ramen Bowl",
			body: 'Naruto is named after fish roll!',
			date: '7/17/2000',
		},
	]);

	//Function accepts searchText as variable and then searches based on user input
	const [searchText, setSearchText] = useState('');

	useEffect(() => {

		//Retrieve notes from localStorage
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

		//Save edited note
		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	//Set notes to localStorage
	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);

	//Note Structure
	const addNote = (title, body) => {
		const date = new Date();
		const newNote = {
			id: rand,
			title: title,
			body: body,
			date: date.toLocaleDateString(),
		};

		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

	//Delete note
	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

	return (
		<div>
			<div className='container'>
				<Header />
				<Search handleSearchNote={setSearchText} />
				<NotesList
					notes={notes.filter((note) =>
						note.title.toLowerCase().includes(searchText)
						
					)}
					handleAddNote={addNote}
					handleDeleteNote={deleteNote}
				/>
			</div>
		</div>
	);
};

export default NotesApp;
