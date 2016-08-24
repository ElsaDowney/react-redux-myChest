const combineReducers = require('redux').combineReducers;
const clothesReducer = require('./clothes-reducer');
const matchListReducer = require('./matchList-reducer');
const registerAndLogin=require('./registerAndLogin-reducer');
const  registerReducer=require('./register-reducer');

const appReducer = combineReducers({
  clothesReducer,
  registerAndLogin,
  matchListReducer,
  registerReducer
});

export default appReducer;
