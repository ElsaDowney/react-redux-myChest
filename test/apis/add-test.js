const request = require('supertest');
const url = require('../../server/helpers/get-url');
const mongoClient = require('../../server/helpers/mongodb');

describe('server', () => {
  let server;

  beforeEach((done)=> {
    mongoClient.connect(url, (err, db)=> {
      const collection = db.collection('users');
      collection.removeMany({}, ()=> {
        collection.insert([{
          _id: 1,
          userName: "cheng",
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

  afterEach(()=> {
    mongoClient.connect(url, (err, db)=> {
      const collection = db.collection('users');
      collection.removeMany({});
      db.close();
    });
  });

  it('responds to /upload', function testSlash(done) {
    request(server)
      .put("/upload")
      .attach("image-file", 'test/fixtures/test1.jpg')
      .expect(200,done)
  });

  it('responds to /cloth', function testSlash(done) {
    request(server)
      .post('/cloth')
      .send({cloItem: {season: 'spring',
        style: '小清新',
        sort: 'pants',
        image: 'imageadc1.jpg',
        colors: ['红色，黄色']} })
      .set('Content-Type', 'application/json')
      .expect(201,done)
  });

});

