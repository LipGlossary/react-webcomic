import React           from 'react';
import {Link}          from 'react-router';
import connectToStores from 'alt/utils/connectToStores';
import _               from 'lodash';

import DataStore from '../DataStore';

class Chapter extends React.Component {

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
      <div className='home__wrapper'>
        <h1>Webcomics by Lonely Robot</h1>
        <ul>{SeriesList}</ul>
      </div>
    );
  }
}

export default connectToStores(Chapter);
