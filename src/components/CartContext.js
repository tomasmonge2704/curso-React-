import React from "react";

export const cartContext = React.createContext([]);

export function addItem() {}
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
