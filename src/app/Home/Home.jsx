import React           from 'react';
import connectToStores from 'alt/utils/connectToStores';
import request         from 'reqwest';
import _               from 'lodash';

import HomeActions from './HomeActions';
import HomeStore   from './HomeStore';
import Series      from './Series';

class Home extends React.Component {

  static getStores () {
    return [HomeStore];
  }

  static getPropsFromStores () {
    return HomeStore.getState();
  }

  componentWillMount () {
    request({
      url: `${CONFIG.api}/object-type/series`
    })
    .then((response) => {
      HomeActions.setSeries(response.objects);
    })
    .catch((error) => {
      throw new Error(error);
    });
  }

  render () {
    let SeriesList = _.map(this.props.series, (series, index) => {
      return <Series slug={series.slug} key={index} renderAs='index' />;
    });

    return (
      <div className='home__wrapper'>
        <ul>{SeriesList}</ul>
      </div>
    );
  }
}

export default connectToStores(Home);
