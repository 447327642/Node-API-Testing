var express = require('express');
var router = express.Router();

/* Mock User */
var Users = [{
  name: 'John',
  surname: 'Doe',
  password: 'mypassword',
  age: 35,
  address: 'Moffet Field, Nasa Research Park'
}];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.status(200).json(Users);
});

/* GET user . */
router.get('/:name', function(req, res, next) {
  for(var i=0;i<Users.length;i++){
      if(Users[i].name === req.params.name){
        res.status(200).json(Users[i]);
        return next();
      }
  }
  res.status(404).send('User not found!');
});

module.exports = router;
