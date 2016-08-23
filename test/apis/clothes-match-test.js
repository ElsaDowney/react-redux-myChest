const request = require('supertest');
const url = require('../../server/helpers/get-url');
const mongoClient = require('../../server/helpers/mongodb');

describe('server', () => {
  let server;

  beforeEach(function () {
    mongoClient.connect(url, (err, db)=> {
      const collection = db.collection('users');
      collection.removeMany({},()=>{
        collection.insert([{hello: "world"}], (err, result)=> {
        });
        db.close();
      });
    });
    server = require('../../server');
  });

  it('return matchSucced clothes of /clothes/match', function testPath(done) {
    request(server)
      .post('/clothes/match')
      .expect(200, done);
  });
});
