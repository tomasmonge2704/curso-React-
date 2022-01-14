import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import {getDocs, getFirestore, collection} from "firebase/firestore"
import { useParams } from "react-router-dom";

export default function ItemListContainer() {
  const [data, setData] = useState([])
  const {categoryId} = useParams();
 
  useEffect(()=>{
    const db = getFirestore();
    const itemsCollection = collection(db, "items");
    getDocs(itemsCollection).then((snapshot)=>{ 
      setData(snapshot.docs.map((doc)=>({id: doc.id,...doc.data()})));
    });
  }, []);
    
  useEffect(()=>{
    return (categoryId)
  },[categoryId])
  
  let categoryProducts = data.filter( category => category.categoria === categoryId)
  if(categoryId === undefined) {
    categoryProducts = data;
  }
     



  return <ItemList Products={categoryProducts} />;
}
