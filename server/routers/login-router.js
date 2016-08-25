const express = require('express');
const login = require('../dbs/login-db');
const session = require('express-session');
const router = express.Router();

router.use(session({secret: 'ssshhhhh'}));

  let sess;
router.post('/sessions', (req, res)=> {
  /*console.log(req.body);
  console.log(req.body.name+'name');
  console.log(req.body.userName+'userName');*/
   const data = {userName: req.body.userName, password: req.body.password};
    //console.log(req.body.userName+'---'+req.body.password);
  login.toLogin(data, function (result) {
    //console.log(result);
    if (result) {
      sess=req.session;
      sess.userName = result.userName;
      res.json({value: 'success'});
    }
    else {
      res.json({value: 'fail'});
    }
  });

});
module.exports = router;
