const clothes = require("../dbs/clothes-db");
const express = require('express');
const router = express.Router();

router.get('/clothes', (req, res)=> {
  clothes.getAllClothes("xiaopangzhu", (result)=> {
    res.status(200).json(result.clo_list);
  });
});


router.delete("/clothes/:c_id", (req, res)=> {
  clothes.deleteOneClothes("xiaopangzhu", req.params.c_id, (result)=> {
    res.status(200).json(result.clo_list);
  });
});

router.post('/cloth',(req,res) => {
  clothes.addClothItem('cheng',req.body.cloItem,(result) => {
    res.status(201).json({value:'添加衣物成功！'});
  })
});


module.exports = router;
