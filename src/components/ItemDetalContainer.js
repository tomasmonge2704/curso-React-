import { useState } from "react";
import ItemDetail from "./ItemDetail";
const data2 = { id:"1", title:"Auto prototipo", price:"1000", pictureUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Hyundai_45_EV_Concept_at_IAA_2019_IMG_0683.jpg/1280px-Hyundai_45_EV_Concept_at_IAA_2019_IMG_0683.jpg",detalle:"Vehiculo prototipo de la marca Hyundai",stock:2 }
// { id, title, price, pictureUrl }  



export default function ItemDetailContainer() {
    const [product, setProduc] = useState([])
    const GetItem = () => {
        
        const promise = new Promise((resolve, reject)=> {
            
            setTimeout(()=>{
               resolve(setProduc(data2))
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