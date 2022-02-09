import { CartContext } from "./CartContext";
import * as React from "react";
import { useContext, useState, useEffect } from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import IconButton from "@mui/material/IconButton";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function Cart() {
  
  const context = useContext(CartContext);
  const [orderId, setOrderId] = useState("xxxx-xxxxx-xxxx");
  const [subtotal, setSubtotal] = useState();

  const { cart } = context;
  const [tempCart, setTempCart] = useState(cart);

  useEffect(() => {
    setSubtotal(context.cartTotal());
  }, [tempCart]);
  function borrarRow(id) {
    const filteredCart = tempCart.filter((e) => e.id !== id);
    setTempCart(filteredCart);
    context.removeItem(id);
  }
  function borrarTodo() {
    setTempCart([]);
    context.clear();
  }

  function sendOrden() {
    const order = {
      buyer: { name: "agustin" },
      items: context.cart,
      total: subtotal * 1.21,
    };
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
    setTempCart([]);
    context.clear();
    handleClickOpen();
  }
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="cardd cartCard">
      <div className="wrap cf">
        <div className="heading cf">
          <h1>My Cart</h1>
          <Link to={`/`} style={{ textDecoration: "none" }}>
            <button className="button" style={{
                float: "right",
              }}>continue shopping</button>
          </Link>
        </div>
        <div>
          {cart.length > 0 ? (
            <div className="cart">
              <ul className="cartWrap productosRow">
                {cart.map((prodData) => (
                  <li
                    className="items odd"
                    id={prodData.item.id}
                    key={prodData.item.title}
                  >
                    <div className="infoWrap">
                      <div className="cartSection">
                        <img
                          src={prodData.item.pictureUrl[0]}
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
                        <IconButton
                          aria-label="delete"
                          onClick={borrarRow.bind(this, prodData.item.id)}
                          style={{
                            float: "right",
                          }}
                        >
                          <DeleteIcon />
                        </IconButton>
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

        <button className="noselect deleteButton" onClick={borrarTodo}><span class="text">Vaciar</span><span class="icon"><svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span></button>
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
              
              <button className="button" onClick={sendOrden}> checkout</button>
            </li>
          </ul>
        </div>
        <div>
          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle>{"Gracias por su compra!"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                su id de compra es : {orderId}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Agree</Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
