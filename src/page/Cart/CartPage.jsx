import React, { useContext } from 'react'
import { CartContext } from '../../components/Cartcontext/CartContext';
import { FaTrashAlt } from "react-icons/fa";
import './cart.css';


function cart() {
      
  const { incressQuantuiti , decressQuantity, removeItem ,cartItems } = useContext(CartContext);
  console.log(cartItems);

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)

    return (
      <div className="Checkout">
        <div className="OrderSummry">
          <h1>Order Summary</h1>
          <div className="items">
            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              cartItems.map((item, index) => (
                <>
                <div className="item_cart" key={index}>
                  <div className="img_name">
                    <img src={item.thumbnail} alt="" />
                    <div className="content">
                      <h4>{item.title}</h4>
                      <p className='price'>{item.price}</p>
                      <div className="quantity_control">
                        <button className='' onClick={() => decressQuantity(item.id)}>-</button>
                        <span className='quantity'>{item.quantity}</span>
                        <button className='' onClick={() => incressQuantuiti(item.id)}>+</button>
                      </div>
                    </div>
                  </div>
                    <button className='delete_item' onClick={() => removeItem(item.id)}><FaTrashAlt  /></button>
                </div>
                </>
              ))
            )}
          </div>

          <div className="buttom-summary">
            <div className="shop_table">
              <p>Total:</p>
              <span className='total_price'>
                ${total}
              </span>
            </div>
            <button type='submit' className='checkout-btn'>Checkout</button>
          </div>
        </div>
      </div>
    )
 }


export default cart