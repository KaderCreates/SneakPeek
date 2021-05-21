const mysql = require('mysql2');
const express = require('express');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'rootroot',
  database: 'SneakPeek'
});
connection.connect(function (err) {
  if (!err) {
    console.log("Database is connected...");
  } else {
    console.log("Error connecting to database...", err);
  }
});

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
            "success": "login sucessfull",
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