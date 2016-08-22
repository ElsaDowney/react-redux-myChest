const express = require('express');
const findData = require('../dbs/find-from-db');

const router = express.Router();

router.get('/hello', (req, res)=> {
  findData((result) => {
    res.json("hello World!");
  });
});

module.exports = router;
