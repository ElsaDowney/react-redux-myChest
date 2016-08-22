import React, {Component} from "react";
import {render} from "react-dom";
import {createStore, applyMiddleware} from 'redux';
import {Provider} from "react-redux";
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from "./containers/App";
import ClothList from './containers/ClothList';

import reducer from "./reducers/index";
import getValue from "./middlewares/get-value";
import clothes from "./middlewares/clothes-middleware";


const createStoreWithMiddleware = applyMiddleware(getValue,clothes)(createStore);

const store = createStoreWithMiddleware(reducer);

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
          <IndexRoute component={ClothList}/>
      </Route>
    </Router>
  </Provider>, document.getElementById('app'));
