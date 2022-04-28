import * as React from 'react';
import {useContext, useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import { CartContext } from '../Cart/CartContext';

const pages = ['vehiculos', 'zapatillas', 'libros'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function ButtonAppBar () {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [cartCount, setcartCount] = React.useState();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const context = useContext(CartContext);
  useEffect(() => {
    setcartCount(context.cartCount());
  }, [context.cartCount()]);
  return (
    <AppBar position="static" style={{backgroundColor:"#282c34", backdropFilter:"blur(20px)" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Link to={`/curso-React-`} style={{ textDecoration: 'none' }}>
          <Button
            variant="contained"
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            inicio
          </Button>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <Link to={`/curso-React-/category/${page}`} style={{ textDecoration: 'none'}}>  
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          
          <Link to={`/curso-React-/`} style={{ textDecoration: 'none', marginRight:"20%" }}>
          <Button
            variant="contained"
            sx={{  display: { xs: 'flex', md: 'none' } }}
          >
            Inicio
          </Button>
          </Link>
         
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent:"space-evenly" }}>
            {pages.map((page) => (
              <Link to={`/curso-React-/category/${page}`} style={{ textDecoration: 'none' }}>
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                variant='contained'
              >
                {page}
              </Button>
              </Link>
            ))}
          </Box>
          <Box style={{marginRight:"3%"}}>
          <CartWidget greeting={cartCount} />
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
           
          </Box>
      
          
          
          
        </Toolbar>
      </Container>
    </AppBar>
  );
};
