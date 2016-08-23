const url = require('../helpers/get-url');
const MongoClient = require('../helpers/mongodb');

exports.getAllClothes = function (userName, callback) {
  MongoClient.connect(url, function (err, db) {
    const collection = db.collection('clothes');
    collection.findOne({userName: userName}, function (err, docs) {
      callback(docs);
    });
    db.close();
  })
};
