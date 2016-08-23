const clothes = require("../dbs/clothes-match");
const express = require('express');
const router = express.Router();

router.post('/clothes/match', (req, res)=> {
  const userName = "xiaopangzhu";
  const matches = req.body;
  const c_id1 = parseInt(matches[0]);
  const c_id2 = parseInt(matches[1]);
  clothes.updateMatches(userName,c_id1,c_id2,function(result){
  });
  clothes.updateMatches(userName,c_id2,c_id1,function(result){
  });
  res.status(200).end();
});

module.exports = router;
