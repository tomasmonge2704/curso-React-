import React from "react";
import { useState } from "react";

export const CartContext = React.createContext();
const {Provider} = CartContext

export const CustomProvider = ({defaultValue = [], children}) =>{
  const [cart, setCart] = useState(defaultValue)
  const [cartCounter, setCartCount] = useState();
  const addItem = (item, quantity) => {
    if (isIncart(item.id)){
      const newCart = [...cart]
      for (const it of newCart){
        if (it.item.id === item.id){
          it.quantity = it.quantity + quantity
        }
      }
      setCart(newCart)
    }else{
      setCart([...cart,{item : item, quantity: quantity}])
    }
  }

  const isIncart = (id) => {
    return cart.find(e=> e.item.id === id)
  }

  const removeItem = (id) =>{
    const newCart = cart
    
    for (let i = 0; i < newCart.length; i++) {
      if (newCart[i].item.id.trim() === id.trim()) {
        newCart.splice(i, 1);
      }
    }
    
    setCart(newCart)
  }

  const clear = ()=>{
    setCart([])
  }
 
  const cartCount = ()=>{
    setCartCount(cart.length)
   return cartCounter
  }
 
  const cartTotal = ()=>{
    let subtotal = 0;
    cart.map(
      (item) => (subtotal = subtotal + item.item.price * item.quantity)
    );
    return subtotal;
  }
  return (
    <Provider value={{cart, addItem, removeItem, clear, cartCount, cartTotal}}>
      {children}
    </Provider>
  )
}

