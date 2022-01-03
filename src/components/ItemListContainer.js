import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { data } from "./datos";

    export default function ItemListContainer() {
    
 
    const {categoryId} = useParams();
    useEffect(()=>{
      return (categoryId)
    },[categoryId])
    let categoriaProducts = data.filter( category => category.categoria === categoryId)
    if(categoryId === undefined) {
        categoriaProducts = data;
    }

    const [products, setProducs] = useState([])
    new Promise((resolve, reject)=> {
        
        setTimeout(()=>{
           resolve(setProducs(categoriaProducts))
        }, 2000);
       
    });
  
  return(
            <ItemList Products={products}/>
           )
   
   
}
