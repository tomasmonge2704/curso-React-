import cartContext from "./CartContext"


export default function Cart() {
 console.log(cartContext._currentValue[0])
  return(
      
   <div>
    
    {cartContext._currentValue.map(prodData =>
     <div style={{ width:"100%", justifyContent:'center', display:'flex',height:'100%'}}>
        <p style={{ margin:"10px"}}>categoria: {prodData.categoria}</p>
        <p style={{ margin:"10px"}}>nombre: {prodData.title}</p>
        <p style={{ margin:"10px"}}>cantidad: {prodData.cantidad}</p>
        </div>
        )}
   </div>
  ) 
}