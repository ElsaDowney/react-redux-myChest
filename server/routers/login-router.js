const express = require('express');
const login = require('../dbs/login-db');

const router = express.Router();

router.post('/sessions', (req, res)=> {

   const data = {name: req.body.name, password: req.body.password};
  // console.log(data.name+data.password);

  login.toLogin(data, function (result) {
      /*console.log(result);
console.log('111');*/
    if (result) {
     /*console.log('222');
      console.log(result);*/
      res.json({value: true});
    }
    else {
     // console.log('333');
      res.json({value: false});
    }
  });

});
module.exports = router;
