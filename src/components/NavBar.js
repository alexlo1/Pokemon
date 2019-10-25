import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';

const NavBar = () => (
  <AppBar position="fixed">
    <Toolbar disableGutters variant="dense">
      <IconButton color="inherit">
        <MenuIcon/>
      </IconButton>
      <Typography variant="h6">Pokedex</Typography>
    </Toolbar>
  </AppBar>
);

export default NavBar;
