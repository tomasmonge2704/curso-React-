import cartContext from "./CartContext"
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

function Subtotal (){
  let subtotal = 0;
  cartContext._currentValue.map(prodData => (
    subtotal = subtotal + (prodData.price * prodData.cantidad)
  ))
  return subtotal
}

export default function Cart() {
  const classes = useStyles();
 
  return(
      
   <div>
      
     <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="spanning table">
        <TableHead>
          <TableRow>
          </TableRow>
          <TableRow>
            <TableCell>Desc</TableCell>
            <TableCell align="right">Precio/u</TableCell>
            <TableCell align="right">Unit</TableCell>
            <TableCell align="right">Suma</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {cartContext._currentValue.map(prodData => (
            <TableRow key={prodData.title}>
              <TableCell>{prodData.title}</TableCell>
              <TableCell align="right">${prodData.price}</TableCell>
              <TableCell align="right">{prodData.cantidad}</TableCell>
              <TableCell align="right">${prodData.price * prodData.cantidad}</TableCell>
            </TableRow>
          ))}

          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2}>Subtotal</TableCell>
            <TableCell align="right">${Subtotal()}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Tax</TableCell>
            <TableCell align="right">{`21 %`}</TableCell>
            <TableCell align="right">${Subtotal() * 0.21}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell align="right">${Subtotal() * 1.21}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  
        
   </div>
  ) 
}