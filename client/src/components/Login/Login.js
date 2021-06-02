import React from 'react';
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
import history from '../../history';
import { useState } from 'react';
import { Redirect } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { withRouter } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Router } from 'react-router';
import { Link } from '@material-ui/core';
import swal from 'sweetalert';



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

function LogIn(props) {
  const { classes } = props;
  const [emailval, setEmail] = useState('');
  const [passwordval, setpassword] = useState('');

  const handleLogin = (password, email, propsfn) => {
    const emailtxt = email.emailval;
    const passwordtxt = password.passwordval;
    const data = { email: emailtxt, password: passwordtxt };


    fetch('https://sneakpeekmock.herokuapp.com/sneakpeek/api/login', {
      method: "POST",
      mode: "cors", 
      cache: "no-cache", 
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      },
      redirect: "follow",
      referrer: "no-referrer",
      body: JSON.stringify(data)
    })
      .then(function (response) {
        return response.json();
      }).then(function (myJson) {
        const looged = myJson.IsLogged;
        if (looged) {
          propsfn.props.UpdateLogInfo(myJson.userRole, true);
          history.push('/')
        } else {
          swal("Failed to login", "Username and/or password is incorrect", "error")
        }
      });

  }

  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form id="formInput" className={classes.form}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input id="email" value={emailval} onInput={e => setEmail(e.target.value)} name="email" autoFocus />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input name="password" value={passwordval} onInput={e => setpassword(e.target.value)} type="password" id="password" />

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
            onClick={() => handleLogin({ passwordval }, { emailval }, { props })}
          >
            Sign in
          </Button>
        </form>
      </Paper>
    </main>
  );
}

LogIn.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LogIn);