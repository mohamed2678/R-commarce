import React, { useContext } from "react";
import toast from "react-hot-toast";
import { CiHeart, CiShare2 } from "react-icons/ci";
import { FaCartArrowDown } from "react-icons/fa6";
import { IoMdStar, IoMdStarHalf } from "react-icons/io";
import { CartContext } from "../../components/Cartcontext/CartContext";
import { useNavigate } from "react-router-dom";
import "./ProductDetails.css";

function ProductItem({ product }) {
  const { cartItems, addCart } = useContext(CartContext);
  const Navigate = useNavigate();

  const isCart = cartItems.some((i) => i.id === product.id);

  const HandleAddTocart = () => {
    addCart(product);

    toast.success(
      <div className="stoast-wrapper">
        <img src={product.thumbnail} alt="" />
        <div className="toast-content">
          <strong>{product.title}</strong>
          Added to cart
          <div>
            <button className="btn" onClick={() => Navigate("/Cart")}>
              Veiw cart
            </button>
          </div>
        </div>
      </div>,
      { duration: 3500 }
    );
  };

  return (
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

      <button
        onClick={HandleAddTocart}
        className={`btn ${isCart ? "in-cart" : ""}`}
      >
        {isCart ? "item in cart" : "add to cart"} <FaCartArrowDown />
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
  );
}

export default ProductItem;
