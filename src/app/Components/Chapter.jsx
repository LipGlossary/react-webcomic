import React           from 'react';
import {Link}          from 'react-router';
import connectToStores from 'alt/utils/connectToStores';
import _               from 'lodash';
import cx              from 'classnames';

import DataStore from '../DataStore';
import Page      from './Page';

class Chapter extends React.Component {

  static getStores () {
    return [DataStore];
  }

  static getPropsFromStores () {
    return DataStore.getState();
  }

  render () {

    if (_.isEmpty(this.props.projects)) { return false; }

    let params = this.props.params || {};
    let series =  params.series || this.props.series;
    let chapter = params.chapter || this.props.chapter;
    let seriesData = _.find(this.props.projects, {slug: series});
    let chapterData = this.props.data || _.find(seriesData.chapters, {chapter: parseInt(chapter, 10)});
    let pagesData = chapterData.pages;
    // let slug = this.props.slug || chapterData.slug;

    let PageList = _.map(pagesData, (page, index) => {
      return (
        <Page
          chapter={this.props.chapter}
          data={page}
          key={index}
          page={page.page}
          params={params}
          renderAs={this.props.renderAs || 'index'}
          series={this.props.series}
          slug={page.slug}
        />
      );
    });

    let classes = cx('chapter__wrapper', this.props.renderAs);

    if (this.props.renderAs === 'index' || this.props.renderAs === 'footer') {
      return (
        <li className={classes}>
          <p>
            <Link to={`/${series}/${chapter}`}>{chapterData.title}</Link>
          </p>
          <ul className='page-list'>{PageList}</ul>
        </li>
      );
    }

    return (
      <div className={classes}>
        <p>
          <Link to={`/${series}/${chapter}`}>{chapterData.title}</Link>
        </p>
        { this.props.children || <ul>{PageList}</ul> }
      </div>
    );
  }
}

export default connectToStores(Chapter);
