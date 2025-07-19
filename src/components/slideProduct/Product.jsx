import React, { useContext } from 'react'
import { IoMdStar, IoMdStarHalf  } from "react-icons/io";
import { CiShoppingCart, CiHeart, CiShare2, CiCircleCheck } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { CartContext } from '../Cartcontext/CartContext';
import { FaCheck } from 'react-icons/fa6';

function Product({item}) {


  const { cartItems, addCart } = useContext(CartContext)

  console.log(cartItems)

  const isCart = cartItems.some(i => i.id === item.id);


  return (
    <div className={`product ${isCart ? 'in-cart' : ''}`}>
      <Link to={`/products/${item.id}`}>
      <span className='check_cart'><FaCheck />In cart</span>
        <div className="img_parent">
        <img src={item.thumbnail} alt="" />
      </div>
      <p className="name_product">{item.title}</p>
      <div className="starts">
       <IoMdStar />
       <IoMdStar />
       <IoMdStar />
       <IoMdStar />
       <IoMdStarHalf />
      </div>
      <p className="price"><span>$ {item.price}</span></p>
      </Link>
      <div className="icons">
        <span  className='btn_addToCart'  onClick={() => addCart(item)}><CiShoppingCart /></span>
        <span><CiHeart /></span>
        <span><CiShare2 /></span>
      </div>
    </div>
  )
}

export default Product