import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { red } from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';
import ItemCount from "./ItemCount";

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
          
          
          <ItemCount stock={prodData.stock}/>
          
          <Typography variant="h6" className={classes.alinear}>Stock disponible:{prodData.stock}</Typography>
          </CardContent>
          
        </Card> 
        )
}