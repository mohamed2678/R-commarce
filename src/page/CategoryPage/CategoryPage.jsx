import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../../components/slideProduct/Product";
import "./categoryPage.css";
import SlideProductLoading from "../../components/slideProduct/SlideProductLoading";
import PageTransition from "../../components/PageTransition";

function CategoryPage() {
  // Make sure your route is defined as <Route path="/category/:category" ... />
  const { category } = useParams();
  console.log(category);

  const [categoryProducts, setCategoryProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => setCategoryProducts(data))
      .catch((err) => console.error("Failed to fetch category products:", err))
      .finally(() => setLoading(false));
  }, [category]);

  console.log(categoryProducts);

  return (
      <PageTransition key={category}>
            <div className="category_products">
      {loading ? (
        <SlideProductLoading key={category} />
      ) : (
        <div className="container">
          <div className="top_slide">
            <h2>{category}</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
              cumque?
            </p>
          </div>

          <div className="products">
            {categoryProducts.products.map((item, index) => (
              <Product item={item} key={index} />
            ))}
          </div>
        </div>
      )}
    </div>
      </PageTransition>
  );
}

export default CategoryPage;
