import React, { Component } from 'react';
import Navbar from '../Navbar'
import './styles.css'
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import products from '../../products.js'




class Sneaker extends Component {

  constructor() {
    super();
    this.state = {

    }
  }
  
  render() {


    return (
      <>
        <div>
          <br />
          <Navbar />
          <br />
          {products.map((product, index) =>
            <div key={product.id + " " + index} id="whole" className="flip-container" >
              <div className="flipper">
                <div className="front">
                  <div className='column' >
                    <img id="images" src={product.image} alt="imageMapped" />
                  </div>
                </div>
                <div className="back" >
                  <div className="overlay" id="text" >
                    <p>
                      <h4>
                        {product.title}
                      </h4>
                    </p>
                    <p>
                      {product.price}
                    </p>
                    <Link to={`product/${product.id}`} style={{ textDecoration: 'none' }}>
                      <Button
                        id='sneakbtn'
                      >
                        View
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <br />
        <br />
      </>

    );
  }
}

export default Sneaker