import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../ProductDetails/ProductDetails.css";
import SlidProduct from "../../components/slideProduct/SlidProduct";
import ProductDetailsLoading from "./ProductDetailsLoading";
import SlideProductLoading from "../../components/slideProduct/SlideProductLoading";
import ProductImges from "./ProductImges";
import ProductItem from "./ProductItem";
import PageTransition from "../../components/PageTransition";

function ProductsDetails() {
  const { id } = useParams();
  // console.log(id); // for test

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const [relatedProduct, setRelatedProduct] = useState([]);
  const [loadingReltedProduc, setLodingReletdProducts] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch product details", error);
      }
    };
    fetchProduct();
  }, [id]);

  useEffect(() => {
    if (!product) return;
    fetch(`https://dummyjson.com/products/category/${product.category}`)
      .then((res) => res.json())
      .then((data) => {
        setRelatedProduct(data.products);
      })
      .catch((error) =>
        console.error("Failed to fetch related products", error)
      )
      .finally(() => setLodingReletdProducts(false));
  }, [product, product?.category]);

  
  if (!product) return <p>Product not found</p>;
  return (
    <PageTransition key={id}>
          <div>
      {loading ? (
        <ProductDetailsLoading />
      ) : (
        <div className="product_details">
          <div className="container">
            <ProductImges product={product} />
            <ProductItem product={product} />
          </div>
        </div>
      )}

      {loadingReltedProduc ? (
        <SlideProductLoading />
      ) : (
        <SlidProduct
          key={product.category}
          data={relatedProduct}
          title={product.category.replace("-", " ")}
        />
      )}
    </div>
    </PageTransition>

  );
}

export default ProductsDetails;
