import React, { useState } from 'react';
import Navbar from '../Navbar';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
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
    '& .MuiTextField-root': {
      margin: theme.spacing(0),
      width: '35ch',
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
    backgroundColor: 'red'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
  message: {
    boxSizing: 'border-box'
  }
});



function Contact(props) {

  const { classes } = props
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        'Accept': 'application/json'
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    swal("Success!", "Thank you for contacting us. We will get back to you shortly.", "success")
  };
  return (
    <>
      <Navbar />
      <main className={classes.main}>
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <ContactSupportIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Contact Us
      </Typography>
          <form onSubmit={handleSubmit} id="formInput" className={classes.form}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="name">First Name</InputLabel>
              <Input type="text" id="name" name="name" autoFocus />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email</InputLabel>
              <Input name="email" type="email" id="email" />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <TextField
                id="message"
                name="message"
                label="Message"
                required
                multiline
                rowsMax={8}
              />
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              {status}
            </Button>
          </form>
        </Paper>
      </main>
      <br />
    </>
  );
};

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);
