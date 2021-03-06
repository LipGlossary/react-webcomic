import React           from 'react';
import {Link}          from 'react-router';
import connectToStores from 'alt/utils/connectToStores';
import _               from 'lodash';

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
          renderAs='index'
          series={this.props.series}
          slug={page.slug}
        />
      );
    });

    if (this.props.renderAs === 'index') {
      return (
        <li className='chapter__wrapper red-box'>
          <Link to={`/${series}/${chapter}`}>
            {chapterData.title}
          </Link>
          <ul>{PageList}</ul>
        </li>
      );
    }

    return (
      <div className='chapter__wrapper blue-box'>
        {chapterData.title}
        {this.props.children || <ul>{PageList}</ul>}
      </div>
    );
  }
}

export default connectToStores(Chapter);
