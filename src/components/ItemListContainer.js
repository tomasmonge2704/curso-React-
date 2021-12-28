import ItemList from "./ItemList";
import { useState } from "react";
const data = [{ id:"1", title:"Zapatilla Nike", price:"500", pictureUrl:"https://ferreira.vteximg.com.br/arquivos/ids/372487-1000-1000/ni_ct4352104.jpg?v=637468388867100000",stock:5 }, { id:"2", title:"Zapatilla Nike 2", price:"500", pictureUrl:"https://ferreira.vteximg.com.br/arquivos/ids/368822-588-588/ni_cw1777005.jpg?v=637462316603200000",stock:5 }, { id:"3", title:"Zapatilla Nike 3", price:"500", pictureUrl:"https://www.moovbydexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw9a0b0573/products/NI_CW6539-101/NI_CW6539-101-1.JPG",stock:5 }, { id:"1", title:"Auto prototipo", price:"1000", pictureUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Hyundai_45_EV_Concept_at_IAA_2019_IMG_0683.jpg/1280px-Hyundai_45_EV_Concept_at_IAA_2019_IMG_0683.jpg",detalle:"Vehiculo prototipo de la marca Hyundai",stock:2 }]
// { id, title, price, pictureUrl }  
export default function ItemListContainer() {
    const [products, setProducs] = useState([])
    new Promise((resolve, reject)=> {
        
        setTimeout(()=>{
           resolve(setProducs(data))
        }, 2000);
       
    });
  
  return(
            <ItemList Products={products}/>
           )
   
   
}
