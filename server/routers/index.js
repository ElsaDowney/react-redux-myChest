const regRouter = (app)=> {
  app.use('/', require('./hello-world'));
  app.use('/', require('./clothes-router'));
  app.use('/',require('./match-list'));
  //
};

module.exports = regRouter;
