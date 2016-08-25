const regRouter = (app)=> {
  app.use('/', require('./clothes'));
  app.use('/',require('./match-list'));
  app.use('/',require('./register-router'));
  app.use('/', require('./clothes-match'));
  app.use('/',require('./login-router'));
  app.use('/',require('./image-upload-router'));
};

module.exports = regRouter;
