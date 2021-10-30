import React from 'react'
// compnent containng Header and Category dropdown
// handleCategory function passed as prop to Header component  
function Header({ handleCategory }) {
  return (
    <div className="Header">
      <h1>Notes</h1>
      <div>
        <label>Select a Category </label>
        <select name="note-category" id="category"
          placeholder="Category" onChange={(e) => handleCategory(e.target.value)}>
          <option value="Household">Household</option>
          <option value="Work">Work</option>
        </select>
      </div>
    </div >
  )
}

export default Header
