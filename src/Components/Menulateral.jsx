/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { makeStyles } from '@mui/styles';
import { Drawer, List, ListItem, ListItemText, Divider } from '@mui/material';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
}));

const MenuLateral = () => {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Toolbar />
      <div className={classes.drawerContainer}>
        <List>
          <ListItem button>
            <ListItemText primary="Navegação" />
          </ListItem>
        </List>
        <Divider />
        {/* Adicione aqui mais itens para navegação */}
      </div>
    </Drawer>
  );
};

export default MenuLateral;
