const express = require('express');

const router = express.Router();

router.get('/clothes', (req, res)=> {
  res.json([{c_id:1,image:"111"}]);
});

module.exports = router;
