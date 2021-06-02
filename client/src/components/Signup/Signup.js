import React from 'react';
import browserHistory from 'react-router-dom';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import history from '../../history'
import { useState } from 'react';
import swal from 'sweetalert';
import { Redirect } from 'react-router-dom'
import { withRouter } from "react-router-dom";
import { Router } from 'react-router';
import { Link } from '@material-ui/core';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: 'red',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});


const handleSignup = (fname, lname, email, password, propsfn) => {
  const fnametxt = fname.fnameVal;
  const lnametxt = lname.lnameVal;
  const emailtxt = email.emailVal;
  const passwordtxt = password.passwordVal;
  const data = {first_name: fnametxt, last_name: lnametxt, email: emailtxt, password_: passwordtxt};

  fetch('https://sneakpeekmock.herokuapp.com/api/register', {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrer: "no-referrer",
    body: JSON.stringify(data)
  })
    .then(function (response) {
      return response.json();
    }).then(function (myJson) {
      const signedUp = myJson.IsLogged;
      if (signedUp) {
        propsfn.props.UpdateLogInfo(myJson.userRole, true);
        history.push('/')
      } else {
        swal("Failed to register", "Email already exists. Try Logging in instead", "error")
      }
    });
 
}

function Signup(props) {
  const { classes } = props;
  const [fnameVal, setFname] = useState('');
  const [lnameVal, setLname] = useState('');
  const [emailVal, setEmail] = useState('');
  const [passwordVal, setPassword] = useState('');

  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form id="formInput" className={classes.form}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="name">First Name</InputLabel>
            <Input id="fname" value={fnameVal} onInput={e =>  setFname(e.target.value)} name="fname" autoFocus />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="name">Last Name</InputLabel>
            <Input id="lname" value={lnameVal} onInput={e => setLname(e.target.value)} name="lname"/>
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input id="email" value={emailVal} onInput={e => setEmail(e.target.value)} name="email" autoFocus />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input name="password" value={passwordVal} onInput={e => setPassword(e.target.value)} type="password" id="password"/> 
            </FormControl>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => handleSignup({fnameVal}, {lnameVal}, {emailVal}, {passwordVal} , { props })}

          >
            Sign up
          </Button>
        </form>
      </Paper>
    </main>
  );
}

Signup.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Signup);