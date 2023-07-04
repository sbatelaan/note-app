import React from 'react'
import Note from './Note'
import AddNote from './AddNote'

const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
    const reversedNotes = [...notes].reverse();
  return (
    <div className='notes-list'>
        <AddNote handleAddNote={handleAddNote} />
        {reversedNotes.map((note) => ( 
        <Note
         id={note.id}
         text={note.text}
         date={note.date} 
         handleDeleteNote={handleDeleteNote}
         />
        ))}
        
    </div>
  )
}

export default NotesList
