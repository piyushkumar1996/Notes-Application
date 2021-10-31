import React, { useState } from 'react'
import { MdDeleteForever } from 'react-icons/md'

function Note({ note, handleDelete, editHandle }) {
    // Destructure the note props into individual elements
    const { id, text, date } = note;
    const [textValue, setTextValue] = useState(text);

    const handleEdit = (val) => {
        setTextValue(val)
    }

    return (
        <div className="note">
            <input type="text"
                value={textValue}
                onChange={(e) => handleEdit(e.target.value)}
            />
            <div className="note-footer ">
                <small>{date}</small>
                <div className="icons">
                    <button className="save" onClick={() => editHandle(textValue, id)}>Update</button>
                    <MdDeleteForever
                        className="delete-icon"
                        size="1.3em"
                        onClick={() => handleDelete(id)}
                    />
                </div>
            </div>
        </div>
    )
}

export default Note;
