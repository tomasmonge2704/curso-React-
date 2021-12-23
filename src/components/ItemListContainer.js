
const Productos = [{ id:"1", title:"Zapatilla Nike", price:"500", pictureUrl:"https://ferreira.vteximg.com.br/arquivos/ids/372487-1000-1000/ni_ct4352104.jpg?v=637468388867100000" }, { id:"2", title:"Zapatilla Nike 2", price:"500", pictureUrl:"https://ferreira.vteximg.com.br/arquivos/ids/368822-588-588/ni_cw1777005.jpg?v=637462316603200000" }, { id:"3", title:"Zapatilla Nike 3", price:"500", pictureUrl:"https://www.moovbydexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw9a0b0573/products/NI_CW6539-101/NI_CW6539-101-1.JPG" }]
    // { id, title, price, pictureUrl }
   
export default function ItemListContainer() {
    const promise = new Promise((resolve, reject)=> {
        setTimeout(()=>{
            resolve(Productos)
           console.log(Productos);
           

                }, 2000);
                
    });
    return(promise)
}