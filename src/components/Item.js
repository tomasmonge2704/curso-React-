import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { red } from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';
import ItemCount from "./ItemCount";



export default function Item ({stock, prodData}) {
   
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
      }));
      const classes = useStyles();
    
      return (
         <Card className={classes.root} style={{ marginRight:"3%"}} >
          <CardHeader
            
            
            title={prodData.title}
            
          />
          <CardMedia
            className={classes.media}
            image={prodData.pictureUrl}
            title="Paella dish"
          />
          
          <CardContent>
          <Typography variant="h6">Stock disponible:{prodData.stock}</Typography>
          <Typography variant="h6">precio: ${prodData.price}</Typography>
          <ItemCount stock={prodData.stock}/>
          
    
          </CardContent>
          
        </Card> 
        
      );
   }