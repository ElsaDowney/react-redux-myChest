const express = require('express');

const router = express.Router();

router.get('/sessions/user',(req,res)=>{
  if(req.session.username) {
    res.json(req.session.username);
  } else {
    req.session.username = '';
    res.json(req.session.username);
  }
});

module.exports=router;