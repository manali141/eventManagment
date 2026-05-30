import React, { useRef } from 'react'

const SearchBar = ({search, setSearch}) => {
    const inputRef = useRef();
    const searchChange = (e) => {
       setSearch(e.target.value);
    }
  return (
    <div className="d-flex justify-content-center mb-3">
  <div className="col-md-4">
    <input
      type="text"
      ref={inputRef}
      value={search}
      onChange={searchChange}
      placeholder="Search Event.."
      className="form-control form-control-sm"
    />
  </div>
</div>
  )
}

export default SearchBar
