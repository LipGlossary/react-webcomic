import React           from 'react';
import connectToStores from 'alt/utils/connectToStores';
import _               from 'lodash';

import DataStore from '..//DataStore';
import Series    from './Series';

class Home extends React.Component {

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
          renderAs='index'
          series={series.slug}
          slug={series.slug}
        />
      );
    });

    return (
      <div className='home__wrapper'>
        <p>home</p>
        <ul>{SeriesList}</ul>
      </div>
    );
  }
}

export default connectToStores(Home);
