import { cartContext } from "./CartContext";
import React, { useContext, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "../styles.css";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link } from "react-router-dom";
import {getFirestore,collection, addDoc} from "firebase/firestore"
const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function Cart() {
  const classes = useStyles();
  const context = useContext(cartContext);
  const [orderId, setOrderId] = useState("")
  const [subtotal, setSubtotal] = useState()
  
  useEffect(()=>{
    setSubtotal(context.cartTotal())
  })
  function borrarRow(id) {
    document.getElementById(id).remove();
    context.removeItem(id)
   
  }
  function borrarTodo() {
    [...document.getElementsByClassName("productosRow")].map(
      (n) => n && n.remove()
    );
   context.clear()
  }

  function sendOrden(){

    const order = {
      buyer:{name:"agustin"},
      items: context.cart,
      total: subtotal * 1.21
    };
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then(({id})=> setOrderId(id));
    [...document.getElementsByClassName("productosRow")].map(
      (n) => n && n.remove()
    );
   context.clear()
  }
  return (
    <div className="wrap cf">
      <div className="heading cf">
        <h1>My Cart</h1>
        <Link to={`/`} style={{ textDecoration: 'none'}}>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          style={{
            float: "right",
          }}
        >
          continue shopping
        </Button>
        </Link>
      </div>
      <div>
        {context.cart.length > 0 ? (
          <div className="cart">
            <ul className="cartWrap productosRow">
              {context.cart.map((prodData) => (
                
                <li
                  className="items odd"
                  id={prodData.item.id}
                  key={prodData.item.title}
                >
                  <div className="infoWrap">
                    <div className="cartSection">
                      <img
                        src={prodData.item.pictureUrl}
                        alt=""
                        className="itemImg"
                      />
                      <p className="itemNumber">#{prodData.item.id}</p>
                      <h3>{prodData.title}</h3>
                      <p>
                        {" "}
                        <input
                          type="text"
                          className="qty"
                          placeholder={prodData.quantity}
                        />{" "}
                        x ${prodData.price}
                      </p>
                      <p className="stockStatus"> In Stock</p>
                    </div>
                    <div className="prodTotal cartSection">
                      <p> ${prodData.item.price * prodData.quantity}</p>
                    </div>
                    <div className="cartSection">
                      <Button
                        onClick={borrarRow.bind(this, prodData.item.id)}
                        color="secondary"
                        className={classes.button}
                        startIcon={<DeleteIcon />}
                        style={{
                          float: "right",
                        }}
                      ></Button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="cart">
            <ul className="cartWrap productosRow">
              <li className="items odd">
                <div className="infoWrap">
                  <div className="cartSection">
                    <h3
                      style={{
                        textAlign: "center",
                      }}
                    >
                      carrito vacio
                    </h3>
                  </div>
                  <div className="prodTotal cartSection">
                    <p></p>
                  </div>
                  <div className="cartSection"></div>
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>

      <Button
        onClick={borrarTodo}
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<DeleteIcon />}
      >
        Borrar todo
      </Button>
      <p>su id de compra es:{orderId}</p>
      <div className="subtotal cf">
        <ul
          style={{
            listStyleType: "none",
          }}
        >
          <li className="totalRow">
            <span className="label">Subtotal</span>
            <span className="value">${subtotal}</span>
          </li>
          <li className="totalRow">
            <span className="label">Tax</span>
            <span className="value">${subtotal * 0.21}</span>
          </li>
          <li className="totalRow final">
            <span className="label">Total</span>
            <span className="value">${subtotal * 1.21}</span>
          </li>
          <li className="totalRow">
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              onClick={sendOrden}
            >
              checkout
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
}
