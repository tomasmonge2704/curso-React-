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
    const newCart = [...cart].map(item => item.id !== id)
    setCart(newCart)
  }
  //clear
  const clear = ()=>{
    setCart([])
  }
  return (
    <Provider value={{cart, addItem}}>
      {children}
    </Provider>
  )
}

