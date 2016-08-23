import React, {Component} from "react";
import {render} from "react-dom";
import {createStore, applyMiddleware} from 'redux';
import {Provider} from "react-redux";
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from "./containers/App";

import index from "./reducers/index";

import Home from "./components/Home";
import RegisterAndLogin from './containers/RegisterAndLogin';
import RegisterLogin from './middlewares/register-login';

const createStoreWithMiddleware = applyMiddleware(RegisterLogin)(createStore);

const store = createStoreWithMiddleware(index);

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="Home" component={Home}/>
        <Route path="RegisterAndLogin" component={RegisterAndLogin}/>
      </Route>
    </Router>
  </Provider>, document.getElementById('app'));
