const request = require('supertest');
const url = require('../../server/helpers/get-url');
const mongoClient = require('../../server/helpers/mongodb');

describe('server', () => {
  let server;

  beforeEach(function () {
    mongoClient.connect(url, (err, db)=> {
      const collection = db.collection('users');
      collection.removeMany({},()=>{
        collection.insert([{_id:0,
          userName:"xiaopangzhu",
          password:"123456",
          clo_list:[
            {c_id:0,season:"summer",color:"red",sort:"coat",style:"fashion",image:"0",matches:[]},
            {c_id:1,season:"summer",color:"yellow",sort:"coat",style:"fashion",image:"1",matches:[]},
          ]
        }], (err, result)=> {
          db.close();
        });
      });
    });
    server = require('../../server');
  });

  it('return clothes of responds to /clothes', function testSlash(done) {
    request(server)
      .get('/clothes')
      .expect(200,[
        {c_id:0,season:"summer",color:"red",sort:"coat",style:"fashion",image:"0",matches:[]},
        {c_id:1,season:"summer",color:"yellow",sort:"coat",style:"fashion",image:"1",matches:[]}
      ], done);
  });

  it('return deleted clothes of responds to /clothes/1', function testPath(done) {
    request(server)
      .del('/clothes/1')
      .expect(201, done);
  });
});
