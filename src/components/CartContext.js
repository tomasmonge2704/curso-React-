import React from 'react';


export const cartContext = React.createContext([])

export function addItem(){
   
}

export function clear(productosAgregados){
   
    productosAgregados.splice(0, productosAgregados.length);
}

