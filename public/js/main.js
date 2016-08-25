import React, {Component} from "react";
import {render} from "react-dom";
import {createStore, applyMiddleware} from 'redux';
import {Provider} from "react-redux";
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from "./containers/App";
import ClothList from './containers/ClothList';
import reducer from "./reducers/index";
import clothes from "./middlewares/clothes-middleware";
import ClothForm from './containers/ClothFrom'

import Home from "./components/Home";
import RegisterAndLogin from './containers/RegisterAndLogin';
import MatchList from './containers/matchList'
import registerLogin from './middlewares/register-login';
import ImageUpload from './middlewares/image-upload';
import SaveAdd from './middlewares/save-add-middleware';

import login from './middlewares/login';
import register from './middlewares/register';

import matchList from "./middlewares/match-list"

const createStoreWithMiddleware = applyMiddleware(registerLogin,
  register, login, clothes, matchList, ImageUpload, SaveAdd)(createStore);


const store = createStoreWithMiddleware(reducer);

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="Home" component={Home}/>
        <Route path="RegisterAndLogin" component={RegisterAndLogin}/>
        <Route path="ClothList" component={ClothList}/>
        <Route path="MatchList" component={MatchList}/>
        <Route path="ClothForm" component={ClothForm}/>
      </Route>
    </Router>
  </Provider>, document.getElementById('app'));
