import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ExposurePlus1Icon from '@material-ui/icons/ExposurePlus1';
import ExposureNeg1Icon from '@material-ui/icons/ExposureNeg1';



export default function ItemCount({stock,count,onAdd,onAddFunction}){
    return (
      
        <div  >
        <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group" style={{ width:"100%" }}>
            <Button style={{ width:"33.333%" }} className="botonMenos" onClick={() =>{if (count !== 0){onAdd(count - 1)}else{console.log("no podes tener negativo");}}}><ExposureNeg1Icon/></Button>
            <Button style={{ width:"33.333%" }}>{count}</Button>
            <Button style={{ width:"33.333%" }} className="botonMas" onClick={() => {if (stock === count){console.log("no stock");} else{onAdd(count + 1)}}}><ExposurePlus1Icon/></Button>
          </ButtonGroup>
          
          <Button variant="outlined" color="secondary" className='BotonCarrito' style={{ width:"100%", marginTop:"2%" }} onClick={onAddFunction}>
            Agregar al carrito 
          </Button>
          
          </div>
         
    )
    
}

