import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const App = () => {
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const openMenu = e => setMenuAnchorEl(e.currentTarget);
  const closeMenu = () => setMenuAnchorEl(null);

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={openMenu}>
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={menuAnchorEl}
            keepMounted
            open={Boolean(menuAnchorEl)}
            onClose={closeMenu}
          >
            <MenuItem onClick={closeMenu}>Home</MenuItem>
            <MenuItem onClick={closeMenu}>Browse by category</MenuItem>
            <MenuItem onClick={closeMenu}>Browse all products</MenuItem>
          </Menu>
          <Typography variant="h6">
            Home
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default App;
