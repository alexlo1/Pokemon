import React from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import SearchBox from './SearchBox';

const useStyles = makeStyles({
  grow: {
    flexGrow: 1,
  },
});

const NavBar = () => {
  const classes = useStyles();
  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton edge="start" color="inherit">
          <MenuIcon/>
        </IconButton>
        <Typography variant="h6">Pokedex</Typography>
        <div className={classes.grow}/>
        <SearchBox/>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
