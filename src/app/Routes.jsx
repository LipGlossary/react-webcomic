/* eslint no-unused-vars: [2, {"varsIgnorePattern": "^React"}] */
import {Router, Route, IndexRoute} from 'react-router';
import React    from 'react';
import history  from '../lib/history';

import App      from './App';
import Home     from './Home/Home';
import Page     from './Home/Page';

// declare our routes and their hierarchy
let routes = (
  <Route path="/" component={App}>

    <IndexRoute component={Home}/>

    <Route path=":series">
      <Route path=":chapter">
        <Route path=":page" component={Page} />
      </Route>
    </Route>

  </Route>
);

export default <Router history={history} routes={routes}/>;
