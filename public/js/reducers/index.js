const combineReducers = require('redux').combineReducers;
const clothesReducer = require('./clothes-reducer');
const registerAndLogin=require('./registerAndLogin-reducer');
const  registerReducer=require('./register-reducer');

const appReducer = combineReducers({
  clothesReducer,
  registerAndLogin,
  registerReducer
});

export default appReducer;
