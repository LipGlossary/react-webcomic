import React           from 'react';
import connectToStores from 'alt/utils/connectToStores';
import request         from 'reqwest';
import _               from 'lodash';
import {join}          from 'path';

import HomeStore   from './HomeStore';
import HomeActions from './HomeActions';

class Home extends React.Component {

  static getStores () {
    return [HomeStore];
  }

  static getPropsFromStores () {
    return HomeStore.getState();
  }

  componentWillMount () {
    request({
      url: `${CONFIG.api}/default`
    })
    .then((response) => {
      HomeActions.setData(response.data);
    })
    .catch((error) => {
      throw new Error(error);
    });
  }

  componentWillReceiveProps () { }

  render () {
    let ChapterList = _.map(this.props.chapters, (chapter, c_index) => {
      let PageList = _.map(chapter.pages, (page, p_index) => {
        let path = join('/assets/images', this.props.asset, chapter.asset, page);
        return (
          <li key={p_index}>
            <a href={path}>
              {p_index + 1}
            </a>
          </li>
        );
      });
      return (
        <li key={c_index}>
          <p>{chapter.title}</p>
          <ul>{PageList}</ul>
        </li>
      );
    });

    return (
      <div className='home__wrapper'>
        <h1>{this.props.title}</h1>
        <ul>{ChapterList}</ul>
      </div>
    );
  }
}

export default connectToStores(Home);
