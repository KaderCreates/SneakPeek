const mysql = require('mysql2');
const express = require('express');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const nodemailer = require('nodemailer')
const cors = require('cors');
const Pool = require('mysql2/typings/mysql/lib/Pool');
const app = express();
app.use(cors());
require('dotenv').config();

const connection = mysql.createPool({
  host: 'us-cdbr-east-04.cleardb.com',
  user: 'b0363e876fccb4',
  password: '2cf2204c',
  database: 'heroku_687c1d24e3c73a8'
});
connection.query('select 1 + 1', (err,rows) => { /* */});

exports.register = function (req, res) {
  const today = new Date();
  const users = {
    "first_name": req.body.first_name,
    "last_name": req.body.last_name,
    "email": req.body.email,
    "password_": req.body.password_,
    "created_date": today,
    "modified_date": today
  }
  connection.query('INSERT INTO users SET ?', [users] , function (error, results, fields) {
    if (error) {
      console.log("error ocurred", error);
      res.send({
        "code": 400,
        "failed": "error ocurred",
        "IsLogged": false,
        "userRole": ""
        
      })
    } else {
      console.log('The solution is: ', results);
      res.send({
        "code": 200,
        "success": "user registered sucessfully",
        "IsLogged": true,
        "userRole": "User"
      });
    }
  });
};



exports.login = function (req, res) {

  const email = req.body.email;
  const password = req.body.password;
  connection.query('SELECT * FROM users WHERE email = ? AND password_ = ?', [email, password], function (error, results, fields) {
    if (error) {
       console.log("error ocurred",error);
      res.send({
        "code": 400,
        "failed": "error ocurred",
        "IsLogged": false
      })
    } else {
      console.log('The solution is: ', results);
      if (results.length > 0) {
        if (results[0].password_ == password) {
          res.send({
            "code": 200,
            "success": "login successfull",
            "IsLogged": true,
            "userRole":"User"
          });
        
        }
        else {
          res.send({
            "code": 204,
            "success": "Email and password does not match",
            "IsLogged": false
          });
        }
      }
      else {
        res.send({
          "code": 204,
          "success": "Email does not exist",
          "IsLogged": false
        });
      }
    }
  });
}

const contactEmail = nodemailer.createTransport({
  host: process.env.SERVICE_HOST,
  port: process.env.SERVICE_PORT,
  secure: false,
  auth: {
    user: process.env.USER_NAME,
    pass: process.env.USER_PASSWORD,
  },
});

contactEmail.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

exports.contact = (req,res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message; 
    const mail = {
      from: name,
      to: process.env.USER_NAME,
      subject: "Contact Form Submission",
      html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json({ status: "ERROR" });
      } else {
        res.json({ status: "Message Sent" });
      }
    });
};

