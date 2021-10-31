import React, { useState } from 'react'
import Note from './Note'
import AddNote from './AddNote'

function NoteList({ notes, handleNoteText, handleDelete, editHandle, notesDetails }) {
  const [textNote, setNoteText] = useState('');
  const characterLimit = 200;
  // function to handle the state of note and restrict character limit
  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  }
  const saveText = () => {
    if (textNote.trim().length > 0) {
      handleNoteText(textNote);
      setNoteText('');
    }
  }
  // handleDelete function to delete the note based on the unique Id
  return (
    <div className="notes-list">
      {
        notes.map((item) => {
          return <Note key={item.id} note={item} handleDelete={handleDelete} editHandle={editHandle} notesDetails={notesDetails} />
        })
      }
      <AddNote handleNoteText={handleNoteText} handleChange={handleChange} saveText={saveText} textNote={textNote} characterLimit={characterLimit} />
    </div>
  )
}

export default NoteList
