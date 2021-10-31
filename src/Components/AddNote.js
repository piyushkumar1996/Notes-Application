import React from 'react'

function AddNote({ handleNoteText, handleChange, saveText, characterLimit, textNote }) {
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
