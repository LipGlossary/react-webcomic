import React           from 'react';
import {Link}          from 'react-router';
import connectToStores from 'alt/utils/connectToStores';
import _               from 'lodash';

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

    if (this.props.renderAs === 'index') {
      return (
        <li className='page__wrapper red-box'>
          <p>Page directory item.</p>
          <Link to={`/${series}/${chapter}/${page}`}>
            {pageData.title}
          </Link>
        </li>
      );
    }

    return (
      <div className='page__wrapper blue-box'>
        <p>Page page.</p>
        {pageData.title}
      </div>
    );
  }
}

export default connectToStores(Page);
