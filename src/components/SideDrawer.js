import React, { useContext } from 'react';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CycleIcon from '@material-ui/icons/Cached';
import InfoIcon from '@material-ui/icons/Info';
import StatsIcon from '@material-ui/icons/Equalizer';
import Constants from '../constants/Constants';
import { PageContext } from '../contexts/PageContext';

const SideDrawer = ({ open, onClose }) => {
  const { setPageString } = useContext(PageContext);

  const setPagePokedex = () => {
    setPageString('pokedex');
    onClose();
  };

  const setPageTypeChart = () => {
    setPageString('types');
    onClose();
  };

  return (
    <Drawer open={open} onClose={onClose}>
      <List>
        <ListItem button onClick={setPagePokedex}>
          <ListItemIcon><StatsIcon/></ListItemIcon>
          <ListItemText primary="Pokemon"/>
        </ListItem>
        <ListItem button onClick={setPageTypeChart}>
          <ListItemIcon><CycleIcon/></ListItemIcon>
          <ListItemText primary="Types"/>
        </ListItem>
      </List>
      <Divider/>
      <List>
        <ListItem button onClick={() => window.location.href = Constants.githubURL}>
          <ListItemIcon><InfoIcon/></ListItemIcon>
          <ListItemText primary="About"/>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;
