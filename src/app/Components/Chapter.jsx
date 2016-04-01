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

    let wrapperElement = 'div';
    let Thumbnail;
    let TitleElement = chapterData.title;

    if (this.props.renderAs === 'index' || !this.props.renderAs) {
      let link = `/${series}/${chapter}`;

      if (!this.props.renderAs) {
        link += `/${pagesData[0].page}`;
      }

      Thumbnail = (
        <Link to={link} className='image'>
          <img src={`https://cosmicjs.com/uploads/${_.first(pagesData).asset}`} />
        </Link>
      );
    }

    if (this.props.renderAs || this.props.children) {
      TitleElement = <Link to={`/${series}/${chapter}`}>{TitleElement}</Link>;

      if (this.props.renderAs === 'index' || this.props.renderAs === 'footer') {
        wrapperElement = 'li';
      }
    }

    let classes = cx(
      'chapter__wrapper',
      this.props.renderAs || (this.props.children || 'main')
    );

    return React.createElement(wrapperElement, {className: classes},
      <h2>{TitleElement}</h2>,
      Thumbnail,
      this.props.children || <ul className='pages-list'>{PageList}</ul>
    );
  }
}

export default connectToStores(Chapter);
