import ItemDetail from "./ItemDetail";
import { useState} from "react";
import { useParams } from "react-router-dom";
import { data } from "./datos";


 


export default function ItemDetailContainer() {
    
    const [product, setProduc] = useState([])
    const {Id} = useParams();
    const itemBuscado = data.find( item => item.id === Id);
    
    const GetItem = () => {
        
        new Promise((resolve, reject)=> {
            
            setTimeout(()=>{
               resolve(setProduc(itemBuscado))
            }, 2000);
           
        });
       return(product)
        
    }
    
    return (
        <div style={{ width:"100%", justifyContent:'center', display:'flex', marginTop:'5%'}}>
        <ItemDetail prodData={GetItem()}/>
        </div>
     )
}