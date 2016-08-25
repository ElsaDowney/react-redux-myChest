const express = require('express');

const router = express.Router();

const allMatches = require('../dbs/match-list');
const getMatches=require('../../public/js/functions/getAllMatches')

router.get('/matches', (req, res)=> {
  const userName = 'xiaopangzhu';
  allMatches(userName,  (result)=> {
    const matches=getMatches(result.clo_list);
    res.json(matches).end();
  });
});

module.exports = router;

