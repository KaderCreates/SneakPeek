import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Cart from '../Cart/Cart';
import products from '../../../../products.js'



export class addToCart extends Component {

    addToCart = () => {
       let addProduct = this.props.product   
       window.localStorage.setItem('cart', addProduct)
       window.dispatchEvent(window.eventsBus)
    }
  
    render() {
        return (
            <div>
                {this.props.product}
                <Button
                onClick={this.addToCart}
                >
                   Add to cart
                </Button>
            </div>
        )
    }
}

export default addToCart
