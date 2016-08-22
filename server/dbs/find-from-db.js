const url = require('../helpers/get-url');
const MongoClient = require('../helpers/mongodb');

function findData(callback) {
  MongoClient.connect(url, function (err, db) {
    const collection = db.collection('users');
    collection.find({}).toArray(function (err, result) {
      callback(result);
    });
  });
}

module.exports = findData;