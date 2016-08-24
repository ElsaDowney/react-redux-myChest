const request = require('supertest');
const url = require('../../server/helpers/get-url');
const mongoClient = require('../../server/helpers/mongodb');

describe('server', () => {
  let server;
  const useName='xiaopangzhu';
  beforeEach(function (done) {
    mongoClient.connect(url, (err, db)=> {
      const collection = db.collection('users');
      collection.removeMany({},()=> {
        collection.insert({
          _id: 0,
          userName: "xiaopangzhu",
          password: "123456",
          clo_list: [
            {c_id: 0, season: "summer", color: "red", sort: "coat", style: "fashion", image: "0", matches: [3, 4]},
            {c_id: 1, season: "summer", color: "yellow", sort: "coat", style: "fashion", image: "1", matches: []},
            {c_id: 2, season: "summer", color: "blue", sort: "coat", style: "simple", image: "2", matches: []},
            {c_id: 3, season: "summer", color: "white", sort: "pants", style: "simple", image: "3", matches: [1]},
            {c_id: 4, season: "summer", color: "white", sort: "pants", style: "simple", image: "4", matches: [1]},
            {c_id: 5, season: "summer", color: "white", sort: "pants", style: "simple", image: "5", matches: []},
            {c_id: 6, season: "summer", color: "white", sort: "pants", style: "simple", image: "6", matches: []},
            {c_id: 7, season: "summer", color: "white", sort: "pants", style: "simple", image: "7", matches: []},
            {c_id: 8, season: "summer", color: "white", sort: "pants", style: "simple", image: "8", matches: []},
          ]
        }, (err, result)=> {
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
      .expect(200, {
            _id: 0,
            userName: "xiaopangzhu",
            password: "123456",
            clo_list: [
              {c_id: 0, season: "summer", color: "red", sort: "coat", style: "fashion", image: "0", matches: [3, 4]},
              {c_id: 1, season: "summer", color: "yellow", sort: "coat", style: "fashion", image: "1", matches: []},
              {c_id: 2, season: "summer", color: "blue", sort: "coat", style: "simple", image: "2", matches: []},
              {c_id: 3, season: "summer", color: "white", sort: "pants", style: "simple", image: "3", matches: [1]},
              {c_id: 4, season: "summer", color: "white", sort: "pants", style: "simple", image: "4", matches: [1]},
              {c_id: 5, season: "summer", color: "white", sort: "pants", style: "simple", image: "5", matches: []},
              {c_id: 6, season: "summer", color: "white", sort: "pants", style: "simple", image: "6", matches: []},
              {c_id: 7, season: "summer", color: "white", sort: "pants", style: "simple", image: "7", matches: []},
              {c_id: 8, season: "summer", color: "white", sort: "pants", style: "simple", image: "8", matches: []},
            ]
          }, done);
  });
});