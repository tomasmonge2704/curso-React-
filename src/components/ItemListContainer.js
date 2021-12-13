import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
export default function ItemListContainer() {
    const classes = useStyles();
    return(
   
           
        
       
          <Badge badgeContent={1} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        
        
      
      );

}