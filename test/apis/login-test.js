const request = require('supertest');
const url = require('../../server/helpers/get-url');
const mongoClient = require('../../server/helpers/mongodb');

describe('server', () => {
  let server;

  beforeEach((done) => {
    mongoClient.connect(url, (err, db)=> {
      const collection = db.collection('users');
      collection.removeMany({}, ()=> {
        collection.insert([{
          userName: "yang",
          password: "111111",
        }], (err, result)=> {
        });
        db.close();
        done();
      });
    });
    server = require('../../server');
  });

  it('return success to user login', (done)=>{
    request(server)
      .post('/sessions')
      .send({userName: 'yang', password: '111111'})
      .expect(200, {value: 'success'}, done);
  });

  it('return fail to user login', (done)=>{
    request(server)
      .post('/sessions')
      .send({userName: 'yang', password: '111222'})
      .expect(200, {value: 'fail'}, done);
  });
});


