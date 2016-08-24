const combineReducers = require('redux').combineReducers;
const clothesReducer = require('./clothes-reducer');
const registerAndLogin=require('./RegisterAndLogin-reducer');
const matchListReducer = require('./matchList-reducer');

const appReducer = combineReducers({
  clothesReducer,
  registerAndLogin,
  matchListReducer
});

export default appReducer;
