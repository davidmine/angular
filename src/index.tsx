import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import Detail from './components/Rfp/Detail/Detail';

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/rfp/:rfpId" component={Detail} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
