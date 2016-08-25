const express = require('express');
const bodyParser = require('body-parser');
const regRouters = require('./server/routers/index');
const path = require('path');
const session = require('express-session');
const app = new express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));
regRouters(app);

/*
app.use(session({
  secret: 'nicai',
  resave: true,
  saveUninitialized: true,
}));
*/

app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

var server = app.listen(3000, function () {
  console.log('listening at port %s', server.address().port);
});

module.exports = server;
