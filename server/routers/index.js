const regRouter = (app)=> {
  app.use('/', require('./clothes-router'));
  app.use('/',require('./register-router'));
  app.use('/', require('./clothes-match-router'));
  app.use('/',require('./login-router'));
};

module.exports = regRouter;
