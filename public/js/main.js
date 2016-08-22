import React, {Component} from "react";
import {render} from "react-dom";
import {createStore, applyMiddleware} from 'redux';
import {Provider} from "react-redux";
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from "./containers/App";
import Hello from './containers/Hello';
import reducer from "./reducers/index";
import getValue from "./middlewares/get-value";

const createStoreWithMiddleware = applyMiddleware(getValue)(createStore);

const store = createStoreWithMiddleware(reducer);

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
          <IndexRoute component={Hello}/>
      </Route>
    </Router>
  </Provider>, document.getElementById('app'));
