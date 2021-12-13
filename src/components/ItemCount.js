import React from 'react';
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

let CantidadProducto = 0;
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
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

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Zapatilla Nike"
        
      />
      <CardMedia
        className={classes.media}
        image="https://ferreira.vteximg.com.br/arquivos/ids/372487-1000-1000/ni_ct4352104.jpg?v=637468388867100000"
        title="Paella dish"
      />
      <CardContent>
      <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group" >
        <Button className="botonMenos" onClick={restarCantidad}><ExposureNeg1Icon/></Button>
        <Button>{CantidadProducto}</Button>
        <Button className="botonMas" onClick={SumarCantidad}><ExposurePlus1Icon/></Button>
      </ButtonGroup>
    
      <Button variant="outlined" color="secondary" className='BotonCarrito' style={{ width:"100%" }}>
        Agregar al carrito 
      </Button>

      </CardContent>
      
    </Card>
  );
}

function restarCantidad() {
 CantidadProducto = CantidadProducto - 1;
 
}
function SumarCantidad() {
  CantidadProducto = CantidadProducto + 1;
  
 }