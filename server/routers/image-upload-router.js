const express = require('express');
const router = express.Router();

const busboy = require("connect-busboy");
router.use(busboy())

router.put('/upload', function(req, res){

  req.busboy.on("file", function(fieldName, file,name){

    var imageName = fieldName+ name;
    console.log(imageName);
    var path = __dirname + "/../../public/images/" + imageName;
    var writeStream = require('fs').createWriteStream(path)

    file.on('data', function(data) {
      writeStream.write(data)
    });

    file.on('end', function() {
      writeStream.end();
    });

    file.on('error', function(err) {
      console.log('something is wrong :( ');
      writeStream.close();
    });

    res.status(200).json(imageName);
  });
  req.pipe(req.busboy);
});

module.exports = router;
