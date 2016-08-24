const url = require('../helpers/get-url');
const MongoClient = require('../helpers/mongodb');


exports.toLogin = function (data, callback) {
  MongoClient.connect(url, function (err, db) {
    const collection = db.collection('users');
    collection.findOne({userName: data.name, password: data.password}, function (err, result) {
      if (err) {
        console.log('Error:' + err);
        return;
      }
      callback(result);
    });
    db.close();
  })
};