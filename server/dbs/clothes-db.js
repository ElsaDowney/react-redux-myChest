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



exports.deleteOneClothes = function (userName, c_id) {
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

exports.addClothItem = function (userName,cloItem,callback) {
  console.log(cloItem);
  MongoClient.connect(url,(err,db) => {
    const collection = db.collection('users');
    let middleClo_list;
    this.getAllClothes(userName, (result) => {
      if(result.clo_list){
         middleClo_list = result.clo_list;
      }else{
        middleClo_list = [];
        collection.insert({"clo_list":middleClo_list});
      }

      cloItem.id = middleClo_list.length+1;
      console.log(cloItem);
      console.log(cloItem.id);


      collection.insert({userName:userName},
        {$push: {"clo_list":cloItem}}, (err, result)=> {
          callback(result);
        });
    });


    db.close();
  })
}



