import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import { CartContext } from "./CartContext";

export default function Item ({prodData}) {
  
    function buyButton(id){
      $(`.${id}`).addClass("clicked");
      context.addItem(prodData, 1);
    }
    function removeClass(id){
      $(`.${id}`).removeClass("clicked");
      context.removeItem(id);
    }
    const context = useContext(CartContext);

      return (
        <div className="wrapper">
        <div className="container">
          <div className="top" style={{background:`url(${prodData.pictureUrl}) no-repeat center center`, backgroundSize:"100%"}} />
          <div className={`bottom ${prodData.id}`}>
            <div className="left">
              <div className="details">
                <h1 style={{fontSize:"1.3em"}}>{prodData.title}</h1>
                <p>${prodData.price}</p>
              </div>
              <div className="buy" onClick={buyButton.bind(this, prodData.id)}><i className="material-icons">add_shopping_cart</i></div>
            </div>
            <div className="right">
              <div className="done"><i className="material-icons">done</i></div>
              <div className="details">
                <h1 style={{fontSize:"1.5em"}}>{prodData.title}</h1>
                <p>Added to your cart</p>
              </div>
              <div className="remove" onClick={removeClass.bind(this, prodData.id)}><i className="material-icons">clear</i></div>
            </div>
          </div>
        </div>
        <Link to={`/item/${prodData.id}`} style={{ textDecoration: 'none' }}>
        <div className="inside">
          <div className="icon"><i className="material-icons">info_outline</i></div>
          <div className="contents">
            <p>{prodData.detalle}</p>
          </div>
        </div>
        </Link>
      </div>
        
      );
   }