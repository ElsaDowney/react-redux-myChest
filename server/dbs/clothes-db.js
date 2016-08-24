const url = require('../helpers/get-url');
const MongoClient = require('../helpers/mongodb');
const collection = db.collection('users');

exports.getAllClothes = function (userName, callback) {
  MongoClient.connect(url, function (err, db) {
    collection.findOne({userName: userName}, function (err, docs) {
      callback(docs);
    });
    db.close();
  });
};

exports.deleteOneClothes = function (userName, c_id, callback) {
  MongoClient.connect(url, (err, db)=> {
    collection.update({userName: userName}, {$pull: {"clo_list": {c_id: parseInt(c_id)}}}, (err, result)=> {
      this.getAllClothes(userName, (result) => {
        callback(result);
      })
    });
    db.close();
  });
};


