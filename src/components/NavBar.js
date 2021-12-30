import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import logo from './logo.svg';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';




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
  

  return (
    <div className={classes.root}>
      <AppBar position="static">
          
        <Toolbar >
        
      
        <img src={logo} style={{ height: '80px' }} alt="logo" />
          <Button variant="contained" style={{ marginLeft:'10%' }} ><Link to={`/`}>inicio</Link></Button>
       
            
          <Typography variant="h6" style={{ marginLeft:'20%' }} className={classes.marginRight}>
          <Link to={`/category/vehiculos`}>Vehiculos</Link>
          </Typography>
          <Typography variant="h6"className={classes.marginRight}>
          <Link to={`/category/zapatillas`}>Zapatillas</Link>
          </Typography>
          <Typography variant="h6"className={classes.marginRight}>
          <Link to={`/category/libros`}>libros</Link>
          </Typography>
          

          <Button variant="contained" style={{position:'absolute', right:'0', marginRight:'10%'}}>Login</Button>
          <CartWidget greeting="1"/>
        </Toolbar>
        
      </AppBar>
      
    </div>
  );
}