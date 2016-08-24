import React, {Component} from "react";
import {render} from "react-dom";
import {createStore, applyMiddleware} from 'redux';
import {Provider} from "react-redux";
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from "./containers/App";
import ClothList from './containers/ClothList';
import reducer from "./reducers/index";
import clothes from "./middlewares/clothes-middleware";

import Home from "./components/Home";
import RegisterAndLogin from './containers/RegisterAndLogin';
import MatchList from './containers/matchList'
import RegisterLogin from './middlewares/register-login';
import matchList from "./middlewares/matchList"

import register from './middlewares/register';

const createStoreWithMiddleware = applyMiddleware(clothes,RegisterLogin,register,matchList)(createStore);

const store = createStoreWithMiddleware(reducer);

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="Home" component={Home}/>
        <Route path="RegisterAndLogin" component={RegisterAndLogin}/>
        <Route path="ClothList" component={ClothList}/>
        <Router path="LoginAndRegister" component={MatchList}/>
    </Route>
    </Router>
  </Provider>, document.getElementById('app'));
