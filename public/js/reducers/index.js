const combineReducers = require('redux').combineReducers;
const clothesReducer = require('./clothes-reducer');

const appReducer = combineReducers({
  clothesReducer
});

export default appReducer;
