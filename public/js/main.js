import React, {Component} from "react";
import {render} from "react-dom";
import {createStore, applyMiddleware} from 'redux';
import {Provider} from "react-redux";
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from "./containers/App";
// import reducer from "./reducers/reducer";

import reducer from "./reducers/RegisterAndLogin-reducer";

import getValue from "./middlewares/get-value";

import Home from "./components/Home";

import RegisterAndLogin from './containers/RegisterAndLogin';

import RegisterLogin from './middlewares/RegisterAndLogin';//中间件

const createStoreWithMiddleware = applyMiddleware(RegisterLogin)(createStore);

const store = createStoreWithMiddleware(reducer);

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="Home" component={Home}/>
        <Route path="RegisterAndLogin" component={RegisterAndLogin}/>
      </Route>
    </Router>
  </Provider>, document.getElementById('app'));
