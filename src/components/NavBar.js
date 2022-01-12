import React,{useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import logo from './logo.svg';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import { cartContext } from './CartContext';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  marginRight : {
    marginRight: 50,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const context = useContext(cartContext);
  

  return (
    <div className={classes.root}>
      <AppBar position="static">
          
        <Toolbar >
        
      
        <img src={logo} style={{ height: '80px' }} alt="logo" />
          <Button variant="contained" style={{ marginLeft:'10%' }} ><Link to={`/`} style={{ textDecoration: 'none' }}>inicio</Link></Button>
       
          <Link to={`/category/vehiculos`} style={{ textDecoration: 'none',marginLeft:'20%' }}>  
          <Button variant="contained" className={classes.marginRight}>
          Vehiculos
          </Button>
          </Link>
          <Link to={`/category/zapatillas`} style={{ textDecoration: 'none' }}>
          <Button variant="contained" className={classes.marginRight}>
            Zapatillas
          </Button>
          </Link>
          <Link to={`/category/libros`} style={{ textDecoration: 'none' }}>
          <Button variant="contained" className={classes.marginRight}>
            libros
          </Button>
          </Link>

          <Button variant="contained" style={{position:'absolute', right:'0', marginRight:'10%'}}>Login</Button>
          <CartWidget greeting={context.cart.length}/>
        </Toolbar>
        
      </AppBar>
      
    </div>
  );
}