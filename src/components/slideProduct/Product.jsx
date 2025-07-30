import React, { useContext } from 'react'
import { IoMdStar, IoMdStarHalf  } from "react-icons/io";
import { CiShoppingCart, CiHeart, CiShare2, CiCircleCheck } from "react-icons/ci";
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../Cartcontext/CartContext';
import { FaCheck } from 'react-icons/fa6';
import toast from 'react-hot-toast';



function Product({item}) {
  
  // Import the CartContext to access cart items and functions  
  const { cartItems, addCart } = useContext(CartContext)

    const Navigate = useNavigate()
  
  console.log(cartItems)
  
  // Check if the item is already in the cart
  const isCart = cartItems.some(i => i.id === item.id);
  
  const HandleAddTocart = () => {
      addCart(item);
  
    toast.success(
      <div className='stoast-wrapper'>
        <img src={item.thumbnail} alt="" />
        <div className='toast-content'>
          <strong>{item.title}</strong>
          Added to cart
          <div>
          <button className='btn' onClick={() => Navigate('/Cart')}>Veiw cart</button>
          </div>
          </div>
      </div>
      ,{duration: 3500}
    )
  }



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
        <span className='btn_addToCart' onClick={HandleAddTocart}><CiShoppingCart /></span>
        <span><CiHeart /></span>
        <span><CiShare2 /></span>
      </div>
    </div>
  )
}

export default Product