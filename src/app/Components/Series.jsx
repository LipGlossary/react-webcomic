import React           from 'react';
import {Link}          from 'react-router';
import connectToStores from 'alt/utils/connectToStores';
import _               from 'lodash';
import cx              from 'classnames';

import DataStore from '../DataStore';
import Chapter   from './Chapter';

class Series extends React.Component {

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
    let seriesData = this.props.data || _.find(this.props.projects, {slug: series});
    let chaptersData = seriesData.chapters;
    let slug = this.props.slug || seriesData.slug;

    let ChapterList = _.map(chaptersData, (chapter, index) => {
      return (
        <Chapter
          chapter={chapter.chapter}
          data={chapter}
          key={index}
          params={params}
          renderAs={this.props.renderAs || 'index'}
          series={this.props.series}
          slug={chapter.slug}
        />
      );
    });

    let TitleElement = seriesData.title;
    let wrapperElement = 'div';

    if (this.props.renderAs || this.props.children) {
      TitleElement = <Link to={`/${slug}`}>{TitleElement}</Link>;

      if (this.props.renderAs === 'index' || this.props.renderAs === 'footer') {
        wrapperElement = 'li';
      }
    }

    let classes = cx(
      'series__wrapper',
      this.props.renderAs || (this.props.children ? 'breadcrumb' : 'main')
    );

    return React.createElement(wrapperElement, {className: classes},
      <h1>{TitleElement}</h1>,
      this.props.children || <ul className='chapter-list'>{ChapterList}</ul>
    );
  }
}

export default connectToStores(Series);
