import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  center: {
    textAlign: 'center'
  },
  font: {
    fontSize: '18px',
    outline: 'none',
    color: 'black',
    padding: '1rem'
  }
};

function NavBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar style={{ background: 'transparent', boxShadow: 'none' }} position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            <div style={styles.center}>
              <Link to='/' style={{ textDecoration: 'none' }}>
                <Button style={styles.font} color="inherit">Home</Button>
              </Link>
              <Link to='/sneakers' style={{ textDecoration: 'none' }}>
                <Button style={styles.font} color="inherit">Sneaker's</Button>
              </Link>
              <Link to='/preorders' style={{ textDecoration: 'none' }}>
                <Button style={styles.font} color="inherit">Pre-Orders</Button>
              </Link>
              <Link to='/contact' style={{ textDecoration: 'none' }}>
                <Button style={styles.font} color="inherit">Contact</Button>
              </Link>
              <Link to='/about' style={{ textDecoration: 'none' }}>
                <Button style={styles.font} color="inherit">About</Button>
              </Link>
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
