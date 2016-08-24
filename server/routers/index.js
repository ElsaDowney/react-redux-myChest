const regRouter = (app)=> {
  app.use('/', require('./clothes'));
  app.use('/',require('./match-list'));
  app.use('/',require('./register-router'));
  app.use('/', require('./clothes-match'));
};

module.exports = regRouter;
