const request = require('supertest');
const url = require('../../server/helpers/get-url');
const mongoClient = require('../../server/helpers/mongodb');

describe('server', () => {
  let server;

  beforeEach(function (done) {
    mongoClient.connect(url, (err, db)=> {
      const collection = db.collection('users');
      collection.removeMany({}, ()=> {
        collection.insert([{hello: "world"}], (err, result)=> {
          db.close();
          done();
        });
      });
    });
    server = require('../../server');
  });

  it('return 404 of error url ', function testPath(done) {
    request(server)
      .get('/foo/bar')
      .expect(404, done);
  });
});
