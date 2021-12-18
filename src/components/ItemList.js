
import arr from "./Item";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Typography from '@material-ui/core/Typography';
import ItemCount from "./ItemCount";


export default function ItemList({stock}) {
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
        <div style={{ width:"100%", justifyContent:'center', display:'flex',}}>
        {arr.map(prod => <Card className={classes.root} style={{ marginRight:"3%"}} >
          <CardHeader
            
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={prod.title}
            
          />
          <CardMedia
            className={classes.media}
            image={prod.pictureUrl}
            title="Paella dish"
          />
          
          <CardContent>
          <Typography variant="h6">Stock disponible: {stock}</Typography>
          <Typography variant="h6">precio: ${prod.price}</Typography>
          <ItemCount/>
          
    
          </CardContent>
          
        </Card> )}
        </div>
        
      );
   }


