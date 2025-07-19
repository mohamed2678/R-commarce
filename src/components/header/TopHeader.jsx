import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/logo.png";
import { CiSearch, CiHeart } from "react-icons/ci";
import { FaCartArrowDown } from "react-icons/fa6";
import "./header.css";
import { CartContext } from "../Cartcontext/CartContext";
function TopHeader() {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="top-header">
      <div className="container">
        <Link className="logo" to="/">
          <img src={Logo} alt="Logo" />
        </Link>
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
        <div className="header-icons">
          <div className="icon">
            <CiHeart />
            <span className="count">0</span>
          </div>
          <div className="icon">
            <Link to="./cart">
              <span className="count">{cartItems.length}</span>
            <FaCartArrowDown />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
