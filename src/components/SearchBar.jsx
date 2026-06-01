import React, { useRef } from 'react'

const SearchBar = ({search, setSearch}) => {
    const inputRef = useRef();
    const searchChange = (e) => {
       setSearch(e.target.value);
    }
  return (
   <div className="filter-bar d-flex justify-content-between align-items-center mb-4">
 <div className="search-box flex-grow-1 me-3">
    <input
      type="text"
      ref={inputRef}
      value={search}
      onChange={searchChange}
      placeholder="Search Event.."
      className="form-control search-input"
    />
  </div>
</div>
  )
}

export default SearchBar
