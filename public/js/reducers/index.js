const combineReducers = require('redux').combineReducers;
const clothesReducer = require('./clothes-reducer');
const matchListReducer = require('./matchList-reducer');
const registerAndLogin=require('./registerAndLogin-reducer');
const  registerReducer=require('./register-reducer');
import login from "./login"

const appReducer = combineReducers({
  clothesReducer,
  registerAndLogin,
  registerReducer,
  login,
  matchListReducer,
});

export default appReducer;
