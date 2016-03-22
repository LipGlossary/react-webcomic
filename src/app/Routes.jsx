/* eslint no-unused-vars: [2, {"varsIgnorePattern": "^React"}] */
import {Router, Route} from 'react-router';
import React           from 'react';
import history         from '../lib/history';

import App     from './App';
import Series  from './Components/Series';
import Chapter from './Components/Chapter';
import Page    from './Components/Page';

// declare our routes and their hierarchy
let routes = (
  <Route path="/" component={App}>

    <Route path=":series" component={Series}>
      <Route path=":chapter" component={Chapter}>
        <Route path=":page" component={Page} />
      </Route>
    </Route>

  </Route>
);

export default <Router history={history} routes={routes} />;
