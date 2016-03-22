import React           from 'react';
import {Link}          from 'react-router';
import connectToStores from 'alt/utils/connectToStores';
import _               from 'lodash';

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
          renderAs='index'
          series={this.props.series}
          slug={chapter.slug}
        />
      );
    });

    if (this.props.renderAs === 'index') {
      return (
        <li className='series__wrapper red-box'>
          <Link to={`/${slug}`}>{seriesData.title}</Link>
          <ul>{ChapterList}</ul>
        </li>
      );
    }

    return (
      <div className='series__wrapper blue-box'>
        {seriesData.title}
        {this.props.children || <ul>{ChapterList}</ul>}
      </div>
    );
  }
}

export default connectToStores(Series);
