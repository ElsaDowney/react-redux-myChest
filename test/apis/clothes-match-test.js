const request = require('supertest');
const url = require('../../server/helpers/get-url');
const mongoClient = require('../../server/helpers/mongodb');

describe('server', () => {
  let server;

  beforeEach(function (done) {
    mongoClient.connect(url, (err, db)=> {
      const collection = db.collection('users');
      collection.removeMany({}, ()=> {
        collection.insert([{
          _id: 0,
          userName: "xiaopangzhu",
          password: "123456",
          clo_list: [
            {c_id: 0, season: "summer", color: "red", sort: "coat", style: "fashion", image: "0", matches: []},
            {c_id: 1, season: "summer", color: "yellow", sort: "coat", style: "fashion", image: "1", matches: []},
          ]
        }], (err, result)=> {
        });
        db.close();
        done();
      });
    });
    server = require('../../server');
  });

  it('response /clothes/match and return matchSucceed clothes', function testPath(done) {
    request(server)
      .post('/clothes/match')
      .send([0, 1])
      .expect(200, done);
  });
});
