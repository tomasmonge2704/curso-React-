import { cartContext } from "./CartContext";
import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "../styles.css";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function Cart() {
  const classes = useStyles();
  const context = useContext(cartContext);
  console.log(context.cart)
  context.cart.map((prodData) => (console.log(prodData)))
  function Subtotal() {
    let subtotal = 0;
    context.cart.map(
      (item) => (subtotal = subtotal + item.item.price * item.quantity)
    );
    return subtotal;
  }
  function borrarRow(title) {
    document.getElementById(title).remove();
   // clearEspecifico(productosAgregados, title);
  }
  function borrarTodo() {
    [...document.getElementsByClassName("productosRow")].map(
      (n) => n && n.remove()
    );
   // clear(productosAgregados);
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
            float: "right",
          }}
        >
          continue shopping
        </Button>
      </div>
      <div>
        {context.cart.length > 0 ? (
          <div className="cart">
            <ul className="cartWrap productosRow">
              {context.cart.map((prodData) => (
                
                <li
                  className="items odd"
                  id={prodData.item.title}
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
                        onClick={borrarRow.bind(this, prodData.item.title)}
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
      <div className="subtotal cf">
        <ul
          style={{
            listStyleType: "none",
          }}
        >
          <li className="totalRow">
            <span className="label">Subtotal</span>
            <span className="value">${Subtotal()}</span>
          </li>
          <li className="totalRow">
            <span className="label">Tax</span>
            <span className="value">${Subtotal() * 0.21}</span>
          </li>
          <li className="totalRow final">
            <span className="label">Total</span>
            <span className="value">${Subtotal() * 1.21}</span>
          </li>
          <li className="totalRow">
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              checkout
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
}
