import React from "react";
import { useState, useEffect } from "react";
import {
    getDocs,
    getFirestore,
    collection,
    query,
    where,
  } from "firebase/firestore";
export const DatosContext = React.createContext();
const {Provider} = DatosContext

export const CustomProvider = ({defaultValue = [], children}) =>{
  const [data, setData] = useState(defaultValue);
  useEffect(()=>{
    const db = getFirestore();
    const itemsCollection = collection(db, "items");
    getDocs(itemsCollection).then((snapshot)=>{ 
      setData(snapshot.docs.map((doc)=>({id: doc.id,...doc.data()})));
    });
  }, []);
    const ItemDetail = (Id) =>{
        let IdProduct = data.find( item => item.id === Id)
    if(Id === undefined) {
        IdProduct = data;
    }
    return IdProduct
    }
  return (
    <Provider value={{ItemDetail}}>
      {children}
    </Provider>
  )
}