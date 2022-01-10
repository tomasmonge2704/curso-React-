import React from "react";

export const cartContext = React.createContext([]);

export function addItem(productosAgregados, count, prodData) {

    if(productosAgregados.find( item => item.title === prodData.title)){
      prodData.cantidad = prodData.cantidad + count;
    }
    else{
      prodData.cantidad = count;
      productosAgregados.push(prodData)
    }  
}
export function clearEspecifico(productosAgregados, title) {
  for (let i = 0; i < productosAgregados.length; i++) {
    if (productosAgregados[i].title.trim() === title.trim()) {
      productosAgregados.splice(i, 1);
    }
  }
}
export function clear(productosAgregados) {
  productosAgregados.splice(0, productosAgregados.length);
}
