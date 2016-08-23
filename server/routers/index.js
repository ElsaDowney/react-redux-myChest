const regRouter = (app)=> {
  app.use('/', require('./hello-world'));
  app.use('/', require('./clothes-router'));
  app.use('/',require('./register-router'));

};

module.exports = regRouter;
