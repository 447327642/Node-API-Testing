var express = require('express');
var router = express.Router();

/* Mock User */
var User = {
  name: 'John',
  surname: 'Doe',
  password: 'jnafjbnlsjdfblsjdkbflskjdfb',
  age: 35,
  address: 'Moffet Field, Nasa Research Park'
};

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

module.exports = router;
