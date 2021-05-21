import React from 'react';
import { Fade } from 'react-slideshow-image';
import './styles.css'

const fadeImages = [
  require('./images/yeezy.jpg'),
  require('./images/yeezy2.jpg'),
  require('./images/yeezy3.jpg'),
  require('./images/jordans.jpg'),
  require('./images/jordan3.jpg')
];

const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  arrows: false
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