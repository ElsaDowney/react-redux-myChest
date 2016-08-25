const url = require('../helpers/get-url');
const MongoClient = require('../helpers/mongodb');

exports.getAllClothes = (userName, callback) => {
  MongoClient.connect(url,  (err, db) => {
    const collection = db.collection('users');
    collection.findOne({userName: userName}, (err, docs) => {
      callback(docs);
    });
    db.close();
  });
};


exports.deleteOneClothes = function(userName, c_id, callback) {
  MongoClient.connect(url, (err, db)=>{
    const collection = db.collection('users');
    collection.update({userName: userName}, {$pull: {"clo_list": {c_id: parseInt(c_id)}}}, (err, result)=> {
      this.getAllClothes(userName, (result) => {
        callback(result);
      });
    });
    db.close();
  });
};


