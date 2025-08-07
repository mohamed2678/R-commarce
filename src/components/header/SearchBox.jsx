import React, { useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { useNavigate } from 'react-router-dom';

function SearchBox() {

    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            navigate(`/search?query=${encodeURIComponent(searchTerm.trim())}`);
        } 

    }
  return (
    <div className="searchBox_container">
        <form onSubmit={handleSubmit} className="search_box">
                  <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="search for Products"
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <button type="submit">
                    <CiSearch />
                  </button>
                </form>
    </div>
  )
}

export default SearchBox