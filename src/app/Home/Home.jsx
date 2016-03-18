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
    let SeriesList = _.map(this.props.data, (series, s_index) => {
      let seriesPath = join('/', series.asset);
      let ChapterList = _.map(series.chapters, (chapter, c_index) => {
        let chapterPath = join(seriesPath, chapter.asset);
        let PageList = _.map(chapter.pages, (page, p_index) => {
          let pagePath = join(chapterPath, p_index.toString());
          return (
            <li key={p_index}>
              <Link to={pagePath}>{p_index}</Link>
            </li>
          );
        });
        return (
          <li key={c_index}>
            <Link to={chapterPath}>
              <p>{chapter.title}</p>
            </Link>
            <ul>{PageList}</ul>
          </li>
        );
      });
      return (
        <li key={s_index}>
          <Link to={seriesPath}>
            <p>{series.title}</p>
          </Link>
          <ul>{ChapterList}</ul>
        </li>
      );
    });

    return (
      <div className='home__wrapper'>
        <h1>{this.props.title}</h1>
        <ul>{SeriesList}</ul>
      </div>
    );
  }
}

export default connectToStores(Home);
