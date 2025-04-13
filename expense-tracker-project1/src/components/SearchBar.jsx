import React from 'react'

function SearchBar({ onSearch }) {
  const handleChange = (e) => {
    onSearch(e.target.value)
  }

  return (
    <input
      type="text"
      placeholder="Search expenses..."
      onChange={handleChange}
      className="search-input"
    />
  )
}

export default SearchBar
