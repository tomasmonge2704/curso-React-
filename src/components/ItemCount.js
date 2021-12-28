import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ExposurePlus1Icon from '@material-ui/icons/ExposurePlus1';
import ExposureNeg1Icon from '@material-ui/icons/ExposureNeg1';



export default function ItemCount({stock}){
    
    
    const [count, onAdd] = useState(0);
     
    return (
        <div>
        <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group">
            <Button style={{minWidth:"56%"}} className="botonMenos" onClick={() =>{if (count !== 0){onAdd(count - 1)}else{console.log("no podes tener negativo");}}}><ExposureNeg1Icon/></Button>
            <Button style={{minWidth:"56%"}}>{count}</Button>
            <Button style={{minWidth:"56%"}} className="botonMas" onClick={() => {if (stock === count){console.log("no stock");} else{onAdd(count + 1)}}}><ExposurePlus1Icon/></Button>
          </ButtonGroup>
          
          <Button variant="outlined" color="secondary" className='BotonCarrito' style={{ width:"100%" }}>
            Agregar al carrito 
          </Button>
          </div>
    )
    
}
