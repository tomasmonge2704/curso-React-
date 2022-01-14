import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { data } from "./datos";
import {getDocs, getFirestore, doc, collection} from "firebase/firestore"

export default function ItemListContainer() {
  const [stateData, setProduct] = useState([])
  useEffect(()=>{
    const db = getFirestore();
    const itemsCollection = collection(db, "items");
    getDocs(itemsCollection).then((snapshot)=>{ 
        setProduct(snapshot.docs.map((doc)=>({id: doc.id,...doc.data()})));
    });
  }, []);
    



  return <ItemList Products={stateData} />;
}
