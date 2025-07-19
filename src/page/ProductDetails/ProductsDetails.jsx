import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IoMdStar, IoMdStarHalf } from "react-icons/io";
import "../ProductDetails/ProductDetails.css";
import { FaCartArrowDown } from "react-icons/fa6";
import { CiHeart, CiShare2 } from "react-icons/ci";
import SlidProduct from "../../components/slideProduct/SlidProduct";
import ProductDetailsLoading from "./ProductDetailsLoading";
import SlideProductLoading from "../../components/slideProduct/SlideProductLoading";

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
  console.log(relatedProduct); // for test

  console.log(product); // for test
  if (loading) return   <ProductDetailsLoading />;
  if (!product) return <p>Product not found</p>;
  return (
    <div>
      <div className="product_details">
        <div className="container">
          <div className="imgs_item">
            <div className="big_img">
              <img id="big_img" src={product.thumbnail} alt={product.title} />
            </div>
            <div className="sml_img">
              {product.images.map((img, index) => (
                <div className="sm-img">
                  <img
                    key={index}
                    src={img}
                    alt={product.title}
                    onClick={() =>
                      (document.getElementById("big_img").src = img)
                    }
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="details_item">
            <h1 className="name">{product.title}</h1>
            <div className="stars">
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStarHalf />
            </div>
            <p className="price">$ {product.price}</p>
            <h5>
              Availability: <span>{product.availabilityStatus}</span>
            </h5>
            <h5>
              Brand: <span>{product.brand}</span>
            </h5>
            <p className="desc">{product.description}</p>
            <h5 className="stock">
              <span> Herry up only {product.stock} products in stock. </span>
            </h5>
            <button className="btn">
              Add to Cart
              <FaCartArrowDown />
            </button>
            <div className="icons">
              <span>
                <CiHeart />
              </span>
              <span>
                <CiShare2 />
              </span>
            </div>
          </div>
        </div>
      </div>
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
  );
}

export default ProductsDetails;
