import React from 'react'
import Note from './Note'
import AddNote from './AddNote'

function NoteList({ notes, handleNoteText, handleDelete }) {
  // handleDelete function to delete the note based on the unique Id
  return (
    <div className="notes-list">
      {
        notes.map((item) => {
          return <Note key={item.id} note={item} handleDelete={handleDelete} />
        })
      }
      <AddNote handleNoteText={handleNoteText} />
    </div>
  )
}

export default NoteList
