import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { data } from "./datos";
import '../App.css';

 


export default function ItemDetailContainer() {
    
    
    const {Id} = useParams();
    const itemBuscado = data.find( item => item.id === Id);
    
    
    return (
        <div style={{ width:"100%", justifyContent:'center', display:'flex', marginTop:'5%'}}>
        <ItemDetail item={itemBuscado}/>
        </div>
     )
}