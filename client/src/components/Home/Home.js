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
import ShopCollectionButton from '../Home/components/ShopCollectionButton';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Slide } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';


const styles = {
  img: {
    width: '100%',
    textAlign: 'center'
  },
  drop: {
    textAlign: 'center',
    paddingTop: '1rem'
  }
}

const Home = () => {
  return (
    <div>
      <Navbar />
      <Box
        display="flex"
        flexWrap="wrap"
        alignContent="center"
      >
        <div style={styles.img} className="HomeSlideImageContainer">
          <Slideshow />
          <ShopCollectionButton />
        </div>
      </Box>
      <div>
        <div style={styles.drop}>
          Release in June 2021
        </div>
      </div>
    </div>
  );

}
export default withStyles()(Home);