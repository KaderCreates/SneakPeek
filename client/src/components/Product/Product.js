import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from '../Navbar';
import Link from '@material-ui/core/Link';
import ControlledOpen from './components/controlledOpen';
import Button from '@material-ui/core/Button';
import './styles.css'
import Cart from './components/Cart';
import AddCartButton from './components/addToCart';
import products from '../../products.js'
import { relative } from 'path';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

class Product extends Component {

  style = {
    container: {
      position: 'relative',
      marginTop: '2rem',
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      size: 0
    }

    this.getProduct = this.getProduct.bind(this)
  }

  getProduct = () => {
    return products.filter((product) => {
      return parseInt(this.props.match.params.id) === product.id
    }).pop()
  }
  setSize = (size) => {
    this.setState({ ...this.state, size })
  }
  render() {
    let product = this.getProduct()
    product = { ...this.getProduct(), size: this.state.size }
    console.log(product)
    return (
      <>
        <Navbar />
        <CssBaseline />
        <Container style={this.style.container} >
          <img id='img' src={product.image} alt="imageMapped" />
          <div id='container'>
            <h3 >{product.title}</h3>
            <p >{product.price}</p>
            <ControlledOpen setSize={this.setSize} />
            <AddCartButton
              product={product.id}
              cartData={product}
            />
          </div>
        </Container>
      </>
    )
  }

}

export default withRouter(Product);