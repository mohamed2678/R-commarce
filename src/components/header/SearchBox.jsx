import React from 'react'
import { CiSearch } from 'react-icons/ci'

function SearchBox() {
  return (
    <div className="searchBox_container">
        <form action="" className="search_box">
                  <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="search for Products"
                  />
                  <button type="submit">
                    <CiSearch />
                  </button>
                </form>
    </div>
  )
}

export default SearchBox