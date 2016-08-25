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
          userName: "3q",
          password: "123456",
          clo_list: []
        }], (err, result)=> {
        });
        db.close();
        done();
      });
    });
    server = require('../../server');
  });

  it('return fail to show user exist', function testPath(done) {
    request(server)
      .post('/user')
      .send({userName: '3q', password: '123456'})
      .expect(200, {value: 'fail'}, done);
  });

  it('return success to show register successfully', function testPath(done) {
    request(server)
      .post('/user')
      .send({userName: '111', password: '123456'})
      .expect(200, {value: 'success'}, done);
  });
});

