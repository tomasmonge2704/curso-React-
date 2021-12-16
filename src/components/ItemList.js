
import arr from "./Item";
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ExposurePlus1Icon from '@material-ui/icons/ExposurePlus1';
import ExposureNeg1Icon from '@material-ui/icons/ExposureNeg1';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';


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
      const [count, onAdd] = useState(0);
      const [anchorEl, setAnchorEl] = React.useState(null);
      const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };
    
      const open = Boolean(anchorEl);
      const id = open ? 'simple-popover' : undefined;
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
          <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group" >
            <Button className="botonMenos" onClick={() =>{if (count !== 0){onAdd(count - 1)}else{console.log("no podes tener negativo");}}}><ExposureNeg1Icon/></Button>
            <Button>{count}</Button>
            <Button className="botonMas" onClick={() => {if (stock == count){console.log("no stock");} else{onAdd(count + 1)}}}><ExposurePlus1Icon/></Button>
            <Button variant="contained" color="secondary" onClick={handleClick}>
            Ver mas
          </Button>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Typography className={classes.typography}>lorem sadasdasdasdasfsd asfaasda dsa dasd asdas da</Typography>
          </Popover>
          </ButtonGroup>
          
          <Button variant="outlined" color="secondary" className='BotonCarrito' style={{ width:"100%" }}>
            Agregar al carrito 
          </Button>
    
          </CardContent>
          
        </Card> )}
        </div>
        
      );
   }


