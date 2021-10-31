import React, { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import NoteList from './Components/NoteList'
import Search from './Components/Search';
import Header from './Components/Header';

function App() {
  // to set the state of Notes created
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "this is my first note!",
      date: "15/10/21"
    }
  ]);

  const handleNoteText = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
      category: category
    };
    setNotes([...notes, newNote])
  }
  // To set the state of Search element
  const [searchText, setSearchtext] = useState('');
  // To set category with default value
  const [category, setCategory] = useState('Household')

  // To Get the local storage Data
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'))
    if (savedNotes) {
      setNotes(savedNotes)
    }
  }, [])
  // To set the local storage Data
  useEffect(() => {
    localStorage.setItem(
      'react-notes-app-data',
      JSON.stringify(notes)
    )
  }, [notes])
  // Function to delete the note based on Id
  const handleDelete = function (id) {
    const newNote = notes.filter(item => item.id !== id);
    setNotes(newNote);
  }
  const handleCategory = (value) => {
    setCategory(value)
  }
  const editHandle = (editval, id) => {
    const notes1 = notes.filter(note => {
      if (note.id === id) {
        note.text = editval;

      }
      return note;
    })
    setNotes(notes1);
    alert('Notes updated')
  }
  return (
    <div className="container ">
      <Header handleCategory={handleCategory} />
      <Search handleSearchText={setSearchtext} />
      {/*  Filter function to filter the note based on Category 
      and Search text */}
      <NoteList notes={notes.filter(
        note => (note.category) ? note.text.toLowerCase().includes(searchText) &&
          note.category.toLowerCase().includes(category.toLowerCase()) : ""
      )}
        handleNoteText={handleNoteText}
        handleDelete={handleDelete}
        editHandle={editHandle}
        notesDetails={notes}
      />
    </div>
  )
}

export default App
