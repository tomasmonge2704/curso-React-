import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@mui/material/IconButton';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from "react-router-dom";

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
export default function CartWidget(props) {
    const classes = useStyles();
    return(
    <div className={classes.sectionDesktop}>
         <Link
          to={`/curso-React-/cart`}
          style={{ textDecoration: "none" }}
        >  
        <IconButton aria-label="show 17 new notifications" color="inherit">
       
         
        <Badge badgeContent={props.greeting}  color="secondary">
        <ShoppingCartIcon  style={{ color: "#fff" }} />
        </Badge>    
            
        </IconButton>
        </Link>
      </div>
      );

          
       
}