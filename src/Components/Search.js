import React from 'react'
import { MdSearch } from 'react-icons/md'

function Search({ handleSearchText }) {
  return (
    <div className="search">
      <MdSearch className="search-icon" size="1.3em"></MdSearch>
      <input onChange={(e) => handleSearchText(e.target.value)}
        type="Text" placeholder="Type to search...." />
    </div>
  )
}

export default Search
