import React, { useEffect, useState } from "react";
import HeroSlider from "../../components/HeroSlider";
import SlideProducts from "../../components/slideProduct/SlidProduct";

import "./Home.css";
import SlideProductLoading from "../../components/slideProduct/SlideProductLoading";

const categories = [
  "smartphones",
  "laptops",
  "mobile-accessories",
  "sunglasses",
  "mens-shoes",
  "mens-watches",
]

function Home() {

  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const result = await Promise.all(
          categories.map(async (category) => {
            const res = await fetch(`https://dummyjson.com/products/category/${category}`);
            const data = await res.json()
            return {[category] : data.products}
          })
        )
        const productData = Object.assign({}, ...result);
        setProducts(productData);
      }
      catch (error) {
        console.error("Failed to fetch products", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [])


  return (
    <>
      <HeroSlider />

      {loading ? (
        <>
        <p><SlideProductLoading /></p>
        <p><SlideProductLoading /></p>
        <p><SlideProductLoading /></p>
        <p><SlideProductLoading /></p>
        </>
      ): (
        categories.map((category) => (
        <SlideProducts data={products[category]} key={category} title={category.replace("-", " ")} />
      ))
      )}

    </> 
  );
}

export default Home;
