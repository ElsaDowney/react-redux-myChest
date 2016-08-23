const clothes = require("../dbs/clothes-db");

const express = require('express');

const router = express.Router();



router.get('/clothes', (req, res)=> {
  clothes.getAllClothes("xiaopangzhu",(result)=>{
    res.status(200).json(result);
   })
});


router.delete("/clothes/:c_id",(req,res)=>{
  res.status(201).end();
});


module.exports = router;
