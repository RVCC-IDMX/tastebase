import { MdDeleteForever } from 'react-icons/md';
import React from 'react';

const Note = ({ id, title, body, date, handleDeleteNote }) => {
	return (
		<div className='note'>
			<h1 className='note__main-title'>{title}</h1>
			<span className='note__main-text'>{body}</span>
			<div className='note-footer'>
				<small>{date}</small>
				<MdDeleteForever
					onClick={() => handleDeleteNote(id)}
					className='delete-icon'
					size='1.3em'
				/>
			</div>
		</div>
	);
};

export default Note;