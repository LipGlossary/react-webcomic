import React           from 'react';
import {Link}          from 'react-router';
import connectToStores from 'alt/utils/connectToStores';
import {join}          from 'path';
import _               from 'lodash';
import cx              from 'classnames';

import DataStore from '../DataStore';

class Page extends React.Component {

  static getStores () {
    return [DataStore];
  }

  static getPropsFromStores () {
    return DataStore.getState();
  }

  render () {

    if (_.isEmpty(this.props.projects)) { return false; }

    let params = this.props.params || {};
    let series = params.series || this.props.series;
    let chapter = params.chapter || this.props.chapter;
    let page = params.page || this.props.page;
    let seriesData = _.find(this.props.projects, {slug: series});
    let chapterData = _.find(seriesData.chapters, {chapter: parseInt(chapter, 10)});
    let pageData = this.props.data || _.find(chapterData.pages, {page: parseInt(page, 10)});
    // let slug = this.props.slug || pageData.slug;

    let chapterPath = join('/', series, `${chapter}`);
    let prevPath = join(chapterPath, `${Math.max(page - 1, 0)}`);
    let nextPath = join(chapterPath, `${Math.min(page + 1, chapterData.pages.length - 1)}`);
    let imageSrc = `https://cosmicjs.com/uploads/${pageData.asset}`;

    let classes = cx('page__wrapper', this.props.renderAs || 'main');

    if (this.props.renderAs === 'index' || this.props.renderAs === 'footer') {
      return (
        <li className={classes}>
          <h3>
            <Link to={`/${series}/${chapter}/${page}`}>
              {pageData.title}
            </Link>
          </h3>
        </li>
      );
    }

    return (
      <div className={classes}>
        <h3>{pageData.title}</h3>
        <ul>
          <li>
            <Link to={prevPath}>Previous ({Math.max(page - 1, 0)})</Link>
          </li>
          <li>
            <Link to={nextPath}>
              Next ({Math.min(page + 1, chapterData.pages.length - 1)})
            </Link>
          </li>
        </ul>
        <div>
          <p>{pageData.asset}</p>
          <Link to={nextPath}>
            <img src={imageSrc} />
          </Link>
        </div>
      </div>
    );
  }
}

export default connectToStores(Page);
