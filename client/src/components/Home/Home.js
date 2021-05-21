import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Slideshow from '../Slides';
import Navbar from '../Navbar';
import SideMenu from '../SideMenu';
import Preorder from '../Preorder';
import Sneakers from '../Sneakers';


const styles = {
  h1: {
    textAlign: 'center',
    paddingTop: '1rem'
  },
  h3: {
    color: 'grey'
  },
  newsletter: {
    textAlign: 'center',
    padding: '1.5rem',
  },
  button: {
    fontSize: '10px',
    color: 'black',
    backgroundColor: '#ff726f',
    padding: '3.2ch', 
  },
  footer: {

  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(0),
      width: '25ch',
    } 
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div>
      <header className="App-header">

        <Slideshow />
        <Navbar />
      </header>
      <h1 style={styles.h1}>Subscribe to our newsletter</h1>
      <h3 style={styles.h3}>Be first to know when pre-orders and exclusive products go live</h3>
      <div style={styles.newsletter}> 
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic"  variant="outlined" placeholder="Email Address"/>
        <Button style={styles.button} variant="outlined">Subscribe</Button>
      </form>
      </div>
      {/* <div id="footer">footer</div> */}
    </div>
  );

}
export default withStyles(styles)(Home);