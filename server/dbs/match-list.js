const url = require('../helpers/get-url');
const MongoClient = require('../helpers/mongodb');


const allMatches=(userName,callback)=>{

  MongoClient.connect(url, (err, db)=> {
    const collection=db.collection('users');
    collection.findOne({userName:userName},(err,docs)=>{
      callback(docs);
    });
  });
};

module.exports=allMatches;


