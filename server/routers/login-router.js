const express = require('express');
const login = require('../dbs/login-db');

const router = express.Router();

router.post('/sessions', (req, res)=> {

   const data = {name: req.body.name, password: req.body.password};

  login.toLogin(data, function (result) {
    if (result) {
      res.json({value: 'success'});
    }
    else {
      res.json({value: 'fail'});
    }
  });

});
module.exports = router;
