import React from 'react'
import { MdDeleteForever } from 'react-icons/md'

function Note({ note, handleDelete }) {
  // Destructure the note props into individual elements
  const { id, text, date } = note
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer ">
        <small>{date}</small>
        <MdDeleteForever className="delete-icon" size="1.3em"
          onClick={() => handleDelete(id)} />
      </div>
    </div>
  )
}

export default Note
