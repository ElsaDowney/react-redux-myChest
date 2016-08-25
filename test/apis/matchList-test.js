const request = require('supertest');
const url = require('../../server/helpers/get-url');
const mongoClient = require('../../server/helpers/mongodb');

describe('get users from dbs', () => {
  let server;
  beforeEach(function (done) {
    mongoClient.connect(url, (err, db)=> {
      const collection = db.collection('users');
      collection.removeMany({}, ()=> {
        collection.insert( [
          {
            up: {id: 0, imgUp: "0"},
            down: {id: 3, imgDown: "3"}
          },
          {
            up: {id: 0, imgUp: "0"},
            down: {id: 4, imgDown: "4"}
          }
        ], (err, result)=> {
          db.close();
          done();
        });
      });
    });
    server = require('../../server');
  });

  it('return matchList of responds to /match', function testSlash(done) {
    request(server)
      .get('/match')
      .expect(200,  [
        {
          up: {id: 0, imgUp: "0"},
          down: {id: 3, imgDown: "3"}
        },
        {
          up: {id: 0, imgUp: "0"},
          down: {id: 4, imgDown: "4"}
        }
      ], done);
  });
});