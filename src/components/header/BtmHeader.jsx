import React, { useEffect, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { TiArrowSortedDown } from "react-icons/ti";
import { Link, NavLink } from "react-router-dom";
import { CiLogin } from "react-icons/ci";
import { AiOutlineUserAdd } from "react-icons/ai";

const navLinks = [
  { title: "Home", Link: "/" },
  { title: "About", Link: "/about" },
  { title: "Accessories", Link: "/accessories" },
  { title: "Blog", Link: "/blog" },
  { title: "Contact", Link: "/contact" },
];
function BtmHeader() {
  const [categories, setCategories] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="btm-header">
      <div className="container">
        <nav className="nav">
          <div className="category_nav">
            <div className="category_btn" onClick={() => setIsOpen(!isOpen)}>
              <CiMenuBurger />
              <p>Browse Category</p>
              <TiArrowSortedDown />
            </div>
            <div className={`category_nav_list ${isOpen ? "active" : ""}`}>
              {categories.map((category) => (
                <Link to={category.slug} key={category.name}>
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="nav_links">
            {navLinks.map((item) => {
              return (
                <li key={item.title}>
                  <NavLink
                    to={item.Link}
                    className={({ isActive }) => (isActive ? "active" : "")}>
                    {item.title}
                  </NavLink>
                </li>
              );
            })}
          </div>
        </nav>
        <div className="sign_regs-icon">
          <Link to="/">
            <CiLogin />
          </Link>
          <Link to="/">
            <AiOutlineUserAdd />
          </Link>
        </div>
      </div>
    </div>
  );
}
export default BtmHeader;
