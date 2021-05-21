const mysql = require('mysql2');
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;
const login = require('./routes/loginroutes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



const router = express.Router();

router.get('/', function (req, res) {
  res.json({ message: 'test' });
});
router.post('/register', login.register);
router.post('/login', login.login)
app.use('/api', router);

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/sneakpeek', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});