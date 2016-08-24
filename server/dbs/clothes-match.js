const url = require('../helpers/get-url');
const MongoClient = require('../helpers/mongodb');

exports.updateMatches = (userName, c_id1, c_id2, callback) => {
  MongoClient.connect(url, (err, db) => {
    const collection = db.collection('users');
    collection.update(
      {"userName": userName, "clo_list.c_id": c_id1},
      {"$push": {"clo_list.$.matches": c_id2}},
      function (err, docs) {
        callback(docs);
      });
    db.close();
  });
};