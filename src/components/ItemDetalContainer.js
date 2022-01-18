import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import '../App.css';
import { useState, useEffect } from "react";
import {getDocs, getFirestore, collection, query, where} from "firebase/firestore"
 


export default function ItemDetailContainer() {
    
    const [data, setData] = useState([])
    const {Id} = useParams();
    
    useEffect(()=>{
        const db = getFirestore();
        const q = query(collection(db, "items"), where ("id", "==", Id));
        getDocs(q).then((snapshot)=>{ 
            console.log(snapshot)
            if(snapshot.size === 0){
                console.log("No results");
                
            }
        
                setData(snapshot.docs.map((doc)=>({id: doc.id,...doc.data()})));
       
         
        });
      }, []);
   
     console.log(data)
      if (data.length === 0){
        setData([{}])
      }
    return (
        <div style={{ width:"100%", justifyContent:'center', display:'flex', marginTop:'5%'}}>
        <ItemDetail item={data[0]}/>
        </div>
     )
}