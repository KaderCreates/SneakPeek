import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SVGicon from '../SVGicons'
import Preorder from '../Preorder';
import Sneakers from '../Sneakers';

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  font: {
    fontSize: '100px'
  }
};

class SideMenu extends React.Component {

  state = {
    left: false
  };


  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {

    const sideList = (
      <div>
        <Divider />
        <List>
          <ListItem
            button
            component={Link}
            to='/'
            key={'home'}
          >
            <ListItemIcon>
              <SVGicon
                name="home"
                width={30} />
            </ListItemIcon>
            <ListItemText primary={'Home'} />
          </ListItem>
        </List>
        <List>
          <ListItem
            button
            component={Link}
            to='sneakers'
            key={'sneakers'}>
            <ListItemIcon>
              <SVGicon name="sneaker" width={30} />
            </ListItemIcon>
            <ListItemText primary={'Sneakers'} />
          </ListItem>
        </List>
        <List>
          <ListItem
            button
            component={Link}
            to='preorders'
            key={'preorders'}>
            <ListItemIcon>
              <SVGicon name="preorder" width={30} />
            </ListItemIcon>
            <ListItemText primary={'Preorders'} />
          </ListItem>
        </List>
        <br /><br />
        <List>
          <ListItem
            button
            component={Link}
            to='login'
            key={'login'}>
            <ListItemText primary={'Log in'} />
          </ListItem>
          <ListItem
            button
            component={Link}
            to='signup'
            key={'createaccount'}>
            <ListItemText primary={'Create Account'} />
          </ListItem>
          <ListItem
            button
            component={Link}
            to='about'
            key={'about'}>
            <ListItemText primary={'About'} />
          </ListItem>
          <ListItem
            button
            component={Link}
            to='contact'
            key={'contact'}>
            <ListItemText primary={'Contact'} />
          </ListItem>
        </List>
      </div>
    );



    return (
      <div>
        <Button onClick={this.toggleDrawer('left', true)}>
          <MenuIcon />
        </Button>
        <SwipeableDrawer
          open={this.state.left}
          onClose={this.toggleDrawer('left', false)}
          onOpen={this.toggleDrawer('left', true)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </SwipeableDrawer>
      </div>
    );
  }
}

SideMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SideMenu);
