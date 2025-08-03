import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function CategoryPage() {

    // Make sure your route is defined as <Route path="/category/:category" ... />
    const { category } = useParams();
    console.log(category);

    const [categoryProducts, setCategoryProducts] = useState([]);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/category/${category}`)
            .then(res => res.json())
            .then(data => setCategoryProducts(data.products))
            .catch(err => console.error("Failed to fetch category products:", err));
    }, [category]);

    console.log(categoryProducts);

  return (
    <div>galal</div>
  )
}

export default CategoryPage