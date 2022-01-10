import { cartContext, clear, clearEspecifico } from "./CartContext";
import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import '../styles.css';
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function Cart() {
  const classes = useStyles();
  const productosAgregados = useContext(cartContext);

  function Subtotal() {
    let subtotal = 0;
    productosAgregados.map(
      (prodData) => (subtotal = subtotal + prodData.price * prodData.cantidad)
    );
    return subtotal;
  }
  function borrarRow(title) {
    document.getElementById(title).remove();
    clearEspecifico(productosAgregados, title);
    
  }
  function borrarTodo() {
    [...document.getElementsByClassName("productosRow")].map(n => n && n.remove());
    clear(productosAgregados);
  }
  
  return (
    <div className="wrap cf">
        
        <div className="heading cf">
          <h1>My Cart</h1>
          <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              style={{
                float:"right"
              }}
            >continue shopping</Button>
          
        </div>
        <div className="cart">
          <ul className="cartWrap productosRow"  >
          {productosAgregados.map((prodData) => (
            <li className="items odd" id={prodData.title} key={prodData.title}>
              <div className="infoWrap"> 
                <div className="cartSection">
                  <img src={prodData.pictureUrl} alt="" className="itemImg" />
                  <p className="itemNumber">#{prodData.id}</p>
                  <h3>{prodData.title}</h3>
                  <p> <input type="text" className="qty" placeholder={prodData.cantidad} /> x ${prodData.price}</p>
                  <p className="stockStatus"> In Stock</p>
                </div>  
                <div className="prodTotal cartSection" >
                  <p> ${prodData.price * prodData.cantidad}</p>
                </div>
                <div className="cartSection">
                <Button
                    onClick={borrarRow.bind(this, prodData.title)}
                    color="secondary"
                    className={classes.button}
                    startIcon={<DeleteIcon />}
                    style={{
                      float:"right"
                    }}
                  ></Button>
                </div>
              </div>
            </li>
            ))}
       
          </ul>
          <Button
              onClick={borrarTodo}
              variant="contained"
              color="secondary"
              className={classes.button}
              startIcon={<DeleteIcon />}
              style={{
                marginLeft:"5%"
              }}
            >
              Borrar todo
            </Button>
        </div>
        
        <div className="subtotal cf">
          <ul style={{
               listStyleType:"none"
              }} >
            <li className="totalRow"><span className="label">Subtotal</span><span className="value">${Subtotal()}</span></li>
            <li className="totalRow"><span className="label">Tax</span><span className="value">${Subtotal() * 0.21}</span></li>
            <li className="totalRow final"><span className="label">Total</span><span className="value">${Subtotal() * 1.21}</span></li>
            <li className="totalRow"><Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >checkout</Button></li>
          </ul>
        </div>
      </div>
  );
}
