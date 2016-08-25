const express = require('express');
const toRegister = require('../dbs/register-db');

const router = express.Router();

router.post('/user', (req, res)=> {

  const data = {
    userName: req.body.userName,
    password: req.body.password,
    clo_list: []
  };
  toRegister.register(data, function (result) {
    if (result === 'fail') {
      res.json({value: 'fail'});
    }
    else {
      res.json({value: 'success'});
    }
  });
});
module.exports = router;
