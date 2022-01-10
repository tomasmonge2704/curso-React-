import React, {useContext,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { red } from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';
import ItemCount from "./ItemCount";
import {cartContext} from "./CartContext";
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function ItemDetail({prodData}) {

    const useStyles = makeStyles((theme) => ({
        root: {
          maxWidth: 345,
        },
        typography: {
          padding: theme.spacing(2),
        },
        media: {
          height: 0,
          paddingTop: '56.25%', // 16:9
        },
        expand: {
          transform: 'rotate(0deg)',
          marginLeft: 'auto',
          transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
          }),
        },
        expandOpen: {
          transform: 'rotate(180deg)',
        },
        avatar: {
          backgroundColor: red[500],
        },
        alinear:{
            justifyContent:"center", display:'flex'
        }
      }));
      const classes = useStyles();
      const [display, setdisplay] = useState('');
      const [displayNone, setdisplayNone] = useState('Noseve');
      const [count, onAdd] = useState(1);
     
      const productosAgregados = useContext(cartContext);
     
      const onAddFunction = () => {
        
        if(productosAgregados.find( item => item.title === prodData.title)){
          prodData.cantidad = prodData.cantidad + count;
        }
        else{
          prodData.cantidad = count;
          productosAgregados.push(prodData)
        }   
        setdisplay('Noseve');
        setdisplayNone('');
      }

        return(
        
            <Card className={classes.root} style={{ marginRight:"3%"}} >
          
          <CardMedia
            className={classes.media}
            image={prodData.pictureUrl}
            
          />
          <CardHeader title={prodData.title}/>
          <CardContent>
          <Typography variant="h6" className={classes.alinear}>precio: ${prodData.price}</Typography>
          <Typography variant="h6" className={classes.alinear}>{prodData.detalle}</Typography>
          
          <div className={display}>
          <ItemCount onAddFunction={onAddFunction} onAdd={onAdd} count={count} stock={prodData.stock} />
          </div>
          <Link className={displayNone} to={`/cart`} style={{ textDecoration: 'none'}}>
          <Button variant="contained" color="secondary" style={{justifyContent:'center', display:'flex',width:"100%",marginTop:"10px"}}>
          ir al carrito
          </Button>
          </Link>
          <Typography variant="h6" className={classes.alinear}>Stock disponible:{prodData.stock}</Typography>
          </CardContent>
          
        </Card> 
        
        )
}