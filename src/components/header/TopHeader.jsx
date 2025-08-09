import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/logo.png";
import { CiHeart } from "react-icons/ci";
import { FaCartArrowDown } from "react-icons/fa6";
import "./header.css";
import { CartContext } from "../Cartcontext/CartContext";
import SearchBox from "./SearchBox";
function TopHeader() {
  const { cartItems, favorite } = useContext(CartContext);

  return (
    <div className="top-header">
      <div className="container">
        <Link className="logo" to="/">
          <img src={Logo} alt="Logo" />
        </Link>
        <SearchBox />
        <div className="header-icons">
          <div className="icon">
            <Link to="./favorite">
            <CiHeart />
            </Link>
            <span className="count">{favorite.length}</span>
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
