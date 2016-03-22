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

    return (
      <div className='series__wrapper'>
        <p>
          <Link to={`/${slug}`}>{seriesData.title}</Link>
        </p>
        {
          this.props.renderAs === 'index'
          ? <ul>{ChapterList}</ul>
          : this.props.children || <ul>{ChapterList}</ul>
        }
      </div>
    );
  }
}

export default connectToStores(Series);
