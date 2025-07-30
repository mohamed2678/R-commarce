import React, { createContext, useEffect, useState } from 'react'

export const CartContext = createContext();
 
export default function CartProvider({children}) {

    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem('cartitems');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    //add item and incress Qauntity and decress Qauntity and delete item from cart
    const incressQuantuiti = (id) => {
        setCartItems(prevItems => prevItems.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        ));
    }

    const decressQuantity = (id) => {
        setCartItems(prevItems => prevItems.map(item => 
            item.id === id ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 } : item
        ))
    }

    const  removeItem = (id) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    }

    const addCart = (item) => {
        setCartItems((prevItems) => [...prevItems, {...item, quantity: 1 }]);
    }

    //save cart items to localStorage
    useEffect(() => {
        localStorage.setItem('cartitems', JSON.stringify(cartItems));
    }, [cartItems]);

  return (
    // Provide the cart items and functions to the context
    <CartContext.Provider value={{ cartItems, addCart, incressQuantuiti, decressQuantity, removeItem }}>
        {children}
    </CartContext.Provider>
  )
}
