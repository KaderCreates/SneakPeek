import React, { Component } from 'react';
import Navbar from '../Navbar';
import Link from '@material-ui/core/Link';
import ControlledOpen from './components/controlledOpen';
import Button from '@material-ui/core/Button';
import './styles.css'
import Cart from './components/Cart';
import AddCartButton from './components/addToCart';
import products from '../../products.js'


export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }

    this.getProduct = this.getProduct.bind(this)
  }

  getProduct = () => {
    return products.filter((product) => {
      return this.props.match.params.id === product.id
    }).pop()
  }
  render() {
    const product = this.getProduct()
    console.log(product)
    return (
      <>
        <Navbar />
        <img id='img' src={product.image} alt="imageMapped" />
        <div id='container'>
          <h3 >{product.title}</h3>
          <p >{product.price}</p>
          <ControlledOpen />
          <AddCartButton
            product={product.id}
          />
        </div>
      </>
    )
  }

}