import React from 'react';
import { BrowserRouter as Router, Route, Link as RouterLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/styles';
import AddCircle from '@material-ui/icons/AddCircle';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import RemoveCircle from '@material-ui/icons/RemoveCircle';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import HomePage from '../home';
import ProductsPage from '../products';
import AboutUsPage from '../about-us';

import { increaseCounter, decreaseCounter } from '../../actions';

const useStyles = makeStyles({
  counter: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto'
  }
});

const TopNavBar = ({ counter, decreaseCounter, increaseCounter }) => {
  const css = useStyles();

  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Link component={RouterLink} to="/" color="inherit" underline="none">
            <Button color="inherit">Home</Button>
          </Link>
          <Link component={RouterLink} to="/products/" color="inherit" underline="none">
            <Button color="inherit">Products</Button>
          </Link>
          <Link component={RouterLink} to="/about-us/" color="inherit" underline="none">
            <Button color="inherit">About Us</Button>
          </Link>

          <Box className={css.counter}>
            <IconButton color="inherit" onClick={decreaseCounter}><RemoveCircle color="inherit" /></IconButton>
            <Typography>{counter}</Typography>
            <IconButton color="inherit" onClick={increaseCounter}><AddCircle color="inherit" /></IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Route path="/" exact component={HomePage} />
      <Route path="/products/" component={ProductsPage} />
      <Route path="/about-us/" component={AboutUsPage} />
    </Router>
  );
};

const mapStateToProps = state => ({
  counter: state.counter
});
const mapDispatchToProps = dispatch => ({
  decreaseCounter: (counter) => dispatch(decreaseCounter()),
  increaseCounter: (counter) => dispatch(increaseCounter())
});

export default connect(mapStateToProps, mapDispatchToProps)(TopNavBar);
