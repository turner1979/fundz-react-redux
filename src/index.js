import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router';
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.scss';
import Home from './layouts/home/Home';
import Funds from './layouts/funds/Funds';
import * as serviceWorker from './serviceWorker';

const createHistory = require("history").createBrowserHistory;
const history = createHistory();

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <Router history={history}>
      <Switch>
         <Route exact path="/" component={Home} />
         <Route path="/funds" component={Funds} />
      </Switch>
   </Router>
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
