import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import SVGicon from '../../../SVGicons'
import { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import products from '../../../../products.js'


const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  addToCartBtn: {
    position: 'relative',
    float: 'right',
    bottom: '2rem'
  }
};

class CartDrawer extends Component {
  constructor() {
    super()
    this.productsInCart = [];
    window.addEventListener('poke', () => {
      let cl = window.localStorage.getItem('cart')
      this.productsInCart = [this.getProduct(cl)]
      this.setState({
        ['right']: true
      });
    })
    this.getProduct = this.getProduct.bind(this)
  }

  classes = styles
  state = {
    right: false,
  }

  getProduct = (productId) => {
    return products.filter((product) => {
      return productId == product.id
    }).pop()
  }

  toggleDrawer = (side, open) => () => {
    console.log(side, open)
    this.setState({
      [side]: open,
    });
  };

  render() {
    console.log(this.productsInCart)
    const cartData = JSON.parse(localStorage.getItem("cartData"))
    const sideList = side => (
      <div
        className={this.classes.list}
        role="presentation"
        onClick={this.toggleDrawer(side, false)}
        onKeyDown={this.toggleDrawer(side, false)}
      >

        <List>
          <Divider />
          <ListItem
            key={'text'}
          >
            {this.productsInCart.length > 0 ? cartData.map(({ id, title, price, size }) => {

              return <div key={id}>
                <ListItemText
                  primary={title} />
                <ListItemText
                  primary={price} />
                <ListItemText
                  primary={size} />
              </div>
            }) : <ListItemText
              primary={"Collection not released yet"}
            />}

          </ListItem>
        </List>
      </div>
    );


    return (
      <div style={this.classes.addToCartBtn}>
        <Button
          onClick={this.toggleDrawer('right', true)}>
          <SVGicon name="cart" width={30} />
        </Button>
        <Drawer anchor="right" open={this.state.right} onClose={this.toggleDrawer('right', false)}>
          {sideList('right')}
        </Drawer>
      </div>
    );
  }
}

CartDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CartDrawer);