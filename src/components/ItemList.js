import Item from "./Item";

export default function ItemList ({Products}) {

return (
    <div style={{ width:"100%", justifyContent:'center', display:'flex',height:'100%'}}>
        {Products.map(prodData =>
        <Item prodData={prodData}/>
        )}
        </div>)
}

