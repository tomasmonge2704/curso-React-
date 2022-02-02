import React, { useContext, useState } from "react";
import Button from '@mui/material/Button';
import { CartContext } from "./CartContext";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";


export default function ItemDetail({ item }) {
  const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage(){
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage);
  const [display, setdisplay] = useState("");
  const [displayNone, setdisplayNone] = useState("Noseve");
  const [count, onAdd] = useState(1);

  const context = useContext(CartContext);

  const onAddFunction = () => {
    context.addItem(item, count);
    setdisplay("Noseve");
    setdisplayNone("");
  };

  return (
    <div className="card-wrapper">
    <div className="card">
      {/* card left */}
      <div className="product-imgs cardd" style={{padding:"10px"}}>
        <div className="img-display">
          <div className="img-showcase">
            <img src={item.pictureUrl} alt="shoe image" style={{borderRadius:"20px"}} />
            <img src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_2.jpg" alt="shoe image" style={{borderRadius:"20px"}}/>
            <img src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_3.jpg" alt="shoe image" style={{borderRadius:"20px"}} />
            <img src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_4.jpg" alt="shoe image" style={{borderRadius:"20px"}}/>
          </div>
        </div>
        <div className="img-select">
          <div className="img-item">
            <a href="#" data-id={1}>
              <img src={item.pictureUrl}  alt="shoe image" />
            </a>
          </div>
          <div className="img-item">
            <a href="#" data-id={2}>
              <img src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_2.jpg" alt="shoe image" />
            </a>
          </div>
          <div className="img-item">
            <a href="#" data-id={3}>
              <img src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_3.jpg" alt="shoe image" />
            </a>
          </div>
          <div className="img-item">
            <a href="#" data-id={4}>
              <img src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_4.jpg" alt="shoe image" />
            </a>
          </div>
        </div>
      </div>
      {/* card right */}
      <div className="product-content cardd">
        <h2 className="product-title">{item.title}</h2>
       
        <div className="product-price">
          <p className="new-price">Price: <span>${item.price}</span></p>
          <p className="new-price">Stock: <span>{item.stock}</span></p>
        </div>
        <div className="product-detail" >
          <h2>Descripcion: </h2>
          <p>{item.detalle}</p>
         
          <ul>
            <li>Available: <span>in stock</span></li>
            <li>Categoria: <span>{item.categoria}</span></li>
         
          </ul>
          
        </div>
        
        <div className={display}>
          <ItemCount
            onAddFunction={onAddFunction}
            onAdd={onAdd}
            count={count}
            stock={item.stock}
          />
        </div>
        <Link
          className={displayNone}
          to={`/cart`}
          style={{ textDecoration: "none" }}
        >
          <Button
            variant="contained"
            color="secondary"
            style={{
              justifyContent: "center",
              display: "flex",
              width: "100%",
              marginTop: "10px",
            }}
          >
            ir al carrito
          </Button>
        </Link>
       
      </div>
    </div>
  </div>
  );
}
