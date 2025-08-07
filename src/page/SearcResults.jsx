import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SlideProductLoading from "../components/slideProduct/SlideProductLoading";
import PageTransition from "../components/PageTransition";
import Product from "../components/slideProduct/Product";

function SearcResults() {


  const query = new URLSearchParams(useLocation().search).get("query");
  const [searchResults, setSearchResults] = useState([]);



  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResult = async () => {
      try {
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${query}`
        );
        const data = await res.json();
        setSearchResults(data.products || []);
      } catch (error) {
        console.error("Error fetching search results:", error);
      } finally {
        setLoading(false);
      }
    };
    if (query) fetchResult();
  }, [query]);

  return (
    <PageTransition key={query}>
      <div className="search-results">
        {loading ? (
          <SlideProductLoading key={query} />
        ) : searchResults.length > 0 ? (
          <div className="container">
            <div className="top_slide">
              <h2>Search Results for "{query}"</h2>
              <p>
                Showing results for your search query.
              </p>
            </div>
            <div className="products">
              {searchResults.map((item, index) => (
                <Product item={item} key={index} />
              ))}
            </div>
          </div>
        ) : <div className="container">No Resulit..</div>}
      </div>
    </PageTransition>
  );
}

export default SearcResults;
