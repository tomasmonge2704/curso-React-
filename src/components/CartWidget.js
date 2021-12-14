import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ItemListContainer from './ItemListContainer'


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
export default function CartWidget() {
    const classes = useStyles();
    return(
    <div className={classes.sectionDesktop}>
           
        <IconButton aria-label="show 17 new notifications" color="inherit">
       
        <ItemListContainer greeting="1"/>
            
            
        </IconButton>
        
      </div>
      );

}