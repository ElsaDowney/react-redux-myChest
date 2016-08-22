const combineReducers = require('redux').combineReducers;
const name = require('./reducer');
const registerAndLogin=require('./RegisterAndLogin-reducer');

const appReducer = combineReducers({
  name,
  registerAndLogin
});

export default appReducer;
