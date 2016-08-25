const express = require('express');
const toRegister = require('../dbs/register-db');
const router = express.Router();

router.post('/users', (req, res)=> {
  const data = {
    userName: req.body.userName,
    password: req.body.password,
    clo_list: []
  };

  toRegister.register(data,(result)=> {
    if(result){
      res.status(201).json({value: 'success'});
    }else {
      res.status(400).json({value: 'fail'});
    }
  });
});
module.exports = router;
