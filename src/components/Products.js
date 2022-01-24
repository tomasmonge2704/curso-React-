import {getDocs, getFirestore, collection} from "firebase/firestore"
import { useState, useEffect } from "react";
export default function Data (){
    const [data, setData] = useState([])
    useEffect(()=>{
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        getDocs(itemsCollection).then((snapshot)=>{ 
          setData(snapshot.docs.map((doc)=>({id: doc.id,...doc.data()})));
        });
      }, []);
      return data
}