import React, { useState } from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import SearchBox from './SearchBox';
import SideDrawer from './SideDrawer';

const useStyles = makeStyles({
  grow: {
    flexGrow: 1,
  },
});

const NavBar = () => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={() => setDrawerOpen(true)}
        >
          <MenuIcon/>
        </IconButton>
        <Typography variant="h6">Pokedex</Typography>
        <div className={classes.grow}/>
        <SearchBox/>
      </Toolbar>
      <SideDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
    </AppBar>
  );
};

export default NavBar;
