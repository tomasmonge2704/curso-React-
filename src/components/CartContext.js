import React from "react";
import { useState } from "react";

export const cartContext = React.createContext();
const {Provider} = cartContext

export const CustomProvider = ({defaultValue = [], children}) =>{
  const [cart, setCart] = useState(defaultValue)
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
  //is in cart
  const isIncart = (id) => {
    return cart.find(e=> e.item.id === id)
  }
  //remove
  const removeItem = (id) =>{
    const newCart = cart
    
    for (let i = 0; i < newCart.length; i++) {
      if (newCart[i].item.id.trim() === id.trim()) {
        newCart.splice(i, 1);
      }
    }
    
    setCart(newCart)
  }
  //clear
  const clear = ()=>{
    setCart([])
  }
  return (
    <Provider value={{cart, addItem, removeItem, clear}}>
      {children}
    </Provider>
  )
}

