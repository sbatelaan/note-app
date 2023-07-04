import React, { useState, useRef } from 'react'

const AddNote = ({ handleAddNote }) => {
    const [noteText, setNoteText] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const textAreaRef = useRef(null);

    const handleChange = (event) => {
            setNoteText(event.target.value);   
    };

    const handleSaveClick = () => {
        if(noteText.trim().length > 0){
            handleAddNote(noteText);
            setNoteText('')
            setErrorMessage('')
        } else {
            setErrorMessage('Must enter text')
        }
        
    };

    const autoAdjustTextArea = () => {
        textAreaRef.current.style.height = 'auto';
        textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px';
    }

  return (
    <div className='note new'>
        <textarea
        ref={textAreaRef}
         placeholder='Type to add a note'
         value={noteText}
         onChange={handleChange}
         onInput={autoAdjustTextArea}
         ></textarea>
         {errorMessage && <p className='error-message'>{errorMessage}</p>}
        <div className='note-footer'>
            <button className='save' onClick={handleSaveClick}>Save</button>
        </div>
    </div>
  )
}

export default AddNote;