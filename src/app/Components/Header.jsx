import React           from 'react';
import {Link}          from 'react-router';
import connectToStores from 'alt/utils/connectToStores';
import _               from 'lodash';

import DataStore from '../DataStore';

class Header extends React.Component {

  static getStores () {
    return [DataStore];
  }

  static getPropsFromStores () {
    return DataStore.getState();
  }

  render () {

    let SeriesList = _.map(this.props.projects, (series, index) => {
      return (
        <li key={index}>
          <Link to={`/${series.slug}`}>{series.title}</Link>
        </li>
      );
    });

    return (
      <div className='header__wrapper'>
        <Link to='/' className='imprint'>
          <img src='/assets/images/lrs-logo-horizontal.png' />
          <p>Comics</p>
        </Link>
        <nav>
          <ul>{SeriesList}</ul>
        </nav>
      </div>
    );
  }
}

export default connectToStores(Header);
