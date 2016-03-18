import React           from 'react';
import connectToStores from 'alt/utils/connectToStores';
import _               from 'lodash';
import {join}          from 'path';
import {Link}          from 'react-router';

import DataStore   from '../DataStore';

class Home extends React.Component {

  static getStores () {
    return [DataStore];
  }

  static getPropsFromStores () {
    return DataStore.getState();
  }

  componentWillReceiveProps () { }

  render () {
    let ChapterList = _.map(this.props.chapters, (chapter, c_index) => {
      let PageList = _.map(chapter.pages, (page, p_index) => {
        let path = join('/', this.props.asset, chapter.asset, p_index.toString());
        return (
          <li key={p_index}>
            <Link to={path} data={page}>
              {p_index}
            </Link>
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
