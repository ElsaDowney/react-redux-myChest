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



exports.deleteOneClothes = function (userName, c_id,callback) {
  MongoClient.connect(url, (err, db)=> {
    const collection = db.collection('users');
    collection.update({userName: userName}, {$pull: {"clo_list": {c_id: parseInt(c_id)}}}, (err, result)=> {
      this.getAllClothes(userName, (result) => {
        callback(result);
      })

      db.close();
    });
  })
};

exports.addClothItem = function (userName, cloItem, callback) {

  MongoClient.connect(url, (err, db) => {
    const collection = db.collection('users');

    this.getAllClothes(userName, (result) => {
      cloItem.id = result.clo_list.length + 1;

      collection.update({userName: userName},
        {$push: {"clo_list": cloItem}}, (err, result)=> {
          callback(result);

          db.close();
        });
    })
  });
}



