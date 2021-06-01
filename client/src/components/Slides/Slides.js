import { relative } from 'path';
import React from 'react';
import { Fade } from 'react-slideshow-image';
import './styles.css'
import MediaQuery from 'react-responsive'
import { Container } from '@material-ui/core';



const fadeImages = [
  require('../assets/retrofiba.jpeg'),
  require('../assets/reversetaxi.jpeg'),
  require('../assets/airjordan12frenchblues.jpeg'),
  require('../assets/AirJordan6RetroInfared2019.jpeg'),
  require('../assets/AirJordan11RetroConcord2018.jpeg')
];

const fadeProperties = {
  duration: 3000,
  transitionDuration: 500,
  infinite: true,
  arrows: false,
}

const Slideshow = () => {
  return (

    <Fade {...fadeProperties}>
      <div className="each-fade">
        <div className="image-container">
          <img alt="error" src={fadeImages[0]} />
        </div>
      </div>
      <div className="each-fade">
        <div className="image-container">
          <img alt="error" src={fadeImages[1]} />
        </div>
      </div>
      <div className="each-fade">
        <div className="image-container">
          <img alt="error" src={fadeImages[2]} />
        </div>
      </div>
      <div className="each-fade">
        <div className="image-container">
          <img alt="error" src={fadeImages[3]} />
        </div>
      </div>
      <div className="each-fade">
        <div className="image-container">
          <img alt="error" src={fadeImages[4]} />
        </div>
      </div>
    </Fade>
  )
}

export default Slideshow;