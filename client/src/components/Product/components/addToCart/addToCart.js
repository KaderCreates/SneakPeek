import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Cart from '../Cart/Cart';
import products from '../../../../products.js';
import swal from 'sweetalert';




export class addToCart extends Component {

    saveToStorage = (product) => {
        let products = []
        if (JSON.parse(localStorage.getItem("cartData")) === null) {
            products = [] //if localstotage is empty, initilize products to empty arr
        } else {
            //get data in LS and set to products
            products = JSON.parse(localStorage.getItem("cartData"))
        }
        products.push(product)
        localStorage.setItem("cartData", JSON.stringify(products))
    }

    addToCart = () => {
        const tempArr = []
        tempArr.push(this.props.cartData)
        let addProduct = this.props.product
        window.localStorage.setItem('cart', addProduct)
        this.saveToStorage(this.props.cartData)
        window.dispatchEvent(window.eventsBus)
    }

    awaitingCollection = () => {
        swal("Coming Soon!", "Checkout will be availabe as soon as the collection releases. If you have any questions or concerns, please contact us and we will get back to you as soon as possible.", "warning")
    };

    render() {
        return (
            <div>
                {this.addProduct}
                <Button
                    onClick={this.awaitingCollection}
                >
                    Awaiting Collection Drop
                </Button>
            </div>
        )
    }
}

export default addToCart
