const combineReducers = require('redux').combineReducers;
const clothesReducer = require('./clothes-reducer');
const registerAndLogin=require('./RegisterAndLogin-reducer');

const appReducer = combineReducers({
  clothesReducer,
  registerAndLogin
});

export default appReducer;
