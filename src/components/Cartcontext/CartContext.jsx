import React, { createContext, useEffect, useState } from 'react'

export const CartContext = createContext();
 
export default function CartProvider({children}) {

    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem('cartitems');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    const addCart = (item) => {
        setCartItems((prevItems) => [...prevItems, item])
    }

    useEffect(() => {
        localStorage.setItem('cartitems', JSON.stringify(cartItems));
    }, [cartItems]);
  return (
    <CartContext.Provider value={{ cartItems, addCart }}>
        {children}
    </CartContext.Provider>
  )
}
