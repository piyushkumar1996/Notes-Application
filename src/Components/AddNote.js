import React, { useState } from 'react'

function AddNote({ handleNoteText }) {
  const [textNote, setNoteText] = useState('');
  const characterLimit = 200;
  // function to handle the state of note and restrict character limit
  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  }
  // OnClick of save validate the input in the note
  const saveText = () => {
    if (textNote.trim().length > 0) {
      handleNoteText(textNote);
      setNoteText('');
    }
  }
  return (
    <div className="note new">
      <textarea
        rows="8"
        cols="10"
        placeholder="Type To add a Note"
        onChange={handleChange}
        value={textNote}
      ></textarea>
      <div className="note-footer">
        <small>{characterLimit - textNote.length} Remaining</small>
        <button className="save" onClick={saveText}>Save</button>
      </div>
    </div>
  )
}

export default AddNote
