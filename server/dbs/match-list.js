const url = require('../helpers/get-url');
const MongoClient = require('../helpers/mongodb');


const AllMatches=(userName,callback)=>{

  MongoClient.connect(url, function (err, db) {
    const collection=db.collection('users');
    collection.findOne({userName:userName},function(err,docs){
      callback(docs);
    });
  });
};

module.exports=AllMatches;


