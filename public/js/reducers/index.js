const combineReducers = require('redux').combineReducers;
const clothesReducer = require('./clothes');
import matchListReducer from './match-list-reducer';
const registerAndLogin=require('./register-login');
const  registerReducer=require('./register');
import login from "./login";
const imageUpload = require('./image-upload-reducer');

const appReducer = combineReducers({
  clothesReducer,
  registerAndLogin,
  registerReducer,
  login,
  matchListReducer,
  imageUpload
});

export default appReducer;
