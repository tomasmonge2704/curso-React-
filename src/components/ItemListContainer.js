import React from 'react';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


export default function ItemListContainer(props) {
    
    return(
   
        <Badge badgeContent={props.greeting} color="secondary">
        <ShoppingCartIcon />
      </Badge>
       
           
      
      );

}