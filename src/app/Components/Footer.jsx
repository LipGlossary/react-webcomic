import React           from 'react';
import {Link}          from 'react-router';
import connectToStores from 'alt/utils/connectToStores';
import _               from 'lodash';

import DataStore from '..//DataStore';
import Series    from './Series';

class Footer extends React.Component {

  static getStores () {
    return [DataStore];
  }

  static getPropsFromStores () {
    return DataStore.getState();
  }

  render () {

    let SeriesList = _.map(this.props.projects, (series, index) => {
      return (
        <Series
          data={series}
          key={index}
          renderAs='footer'
          series={series.slug}
          slug={series.slug}
        />
      );
    });

    return (
      <div className='footer__wrapper'>
        <p><Link to='/'>home</Link></p>
        <ul>{SeriesList}</ul>
      </div>
    );
  }
}

export default connectToStores(Footer);
