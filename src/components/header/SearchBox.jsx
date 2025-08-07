import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Link, useLocation, useNavigate } from "react-router-dom";

function SearchBox() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchTerm.trim())}`);
    }
    setSuggestions([]); // Clear suggestions on submit
    setSearchTerm(""); // Clear input field after submission
  };

  useEffect(() => {
    if (!searchTerm.trim()) {
      setSuggestions([]);
      return;
    }
    const fecthSuggestions = async () => {
      try {
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${searchTerm}`
        );
        const data = await res.json();
        setSuggestions(data.products.slice(0, 5) || []);
      } catch (error) {
        console.error("Error fetching suggestions:", error);
        setSuggestions([]);
      }
    };
    const debounce = setTimeout(() => {
      fecthSuggestions();
    }, 300); // Debounce to avoid too many requests
    return () => clearTimeout(debounce);
  }, [searchTerm]);

  
  useEffect(() => {
    // Clear suggestions when navigating to a different page
    if (location.pathname !== "/") {
      setSuggestions([]);
      setSearchTerm("");
    }
  }, [location.pathname]);

  return (
    <div className="searchBox_container">
      <form onSubmit={handleSubmit} className="search_box">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="search for Products"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          autoComplete="off"
        />
        <button type="submit">
          <CiSearch />
        </button>
      </form>
      {suggestions.length > 0 && (
        <ul className="suggestions">
          {suggestions.map((item) => (
            <Link to={`/products/${item.id}`}>
              <li key={item.id}>
                <img src={item.thumbnail} alt="" />
                <span>{item.title}</span>
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBox;
