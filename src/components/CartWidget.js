import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

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
           
        <IconButton aria-label="show 17 new notifications" color="inherit">
       
         
        <Badge badgeContent={props.greeting}  color="secondary">
        <ShoppingCartIcon />
        </Badge>    
            
        </IconButton>
        
      </div>
      );

}