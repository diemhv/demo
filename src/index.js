import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { Router, Route } from "react-router-dom";

import registerServiceWorker from './registerServiceWorker';
import history from "./helpers/History"
import store from "./store";

import './index.css';

import Home from './pages/Home';
import Person from './pages/Person';

const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/person/:username" component={Person} />
        </div>
      </Router>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
