const combineReducers = require('redux').combineReducers;
const name = require('./reducer');

const appReducer = combineReducers({
  name
});

export default appReducer;
