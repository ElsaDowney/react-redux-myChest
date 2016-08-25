const express = require('express');

const router = express.Router();

const AllMatches = require('../dbs/match-list');

router.get('/match', (req, res)=> {
  const userName = 'xiaopangzhu';
  AllMatches(userName, function (result) {
    res.json(result).end();
  });
});

module.exports = router;

