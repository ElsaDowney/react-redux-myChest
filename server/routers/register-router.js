const express = require('express');
const toRegister = require('../dbs/register-db');

const router = express.Router();

router.post('/user', (req, res)=> {

  const data = {username: req.body.username, password: req.body.password, clo_list: []};
  console.log(data);

  toRegister(data, function (result) {
    if (result === 'fail') {
      res.json({value: 'fail'});
    }
    else {
      res.json({value: 'success'});
    }
  });



});
module.exports = router;
