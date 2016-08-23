const express = require('express');
const bodyParser = require('body-parser');
const regRouters = require('./server/routers');

const app = new express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));
// const  register=require('./server/routers/register')
// app.use('/',register);

regRouters(app);


var server = app.listen(3000, function () {
  console.log('listening at port %s', server.address().port);
});

module.exports = server;
