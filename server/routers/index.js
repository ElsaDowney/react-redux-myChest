const regRouter = (app)=> {
  app.use('/', require('./hello-world'));
  app.use('/', require('./clothes-router'));
  //
};

module.exports = regRouter;
