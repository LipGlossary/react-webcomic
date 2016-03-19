import React   from 'react';
import {Link}  from 'react-router';
import {join}  from 'path';
import _       from 'lodash';

import Page          from './Page';
import CosmicService from '../services/CosmicService';

function _getChapterSlugWithParams (params) {
  if (!params || !params.series || !params.chapter) { return; }
  return `chapter-${params.chapter}`;
}

function _getChapterUriWithProps (series, slug) {
  if (!series || !slug) { return; }

  let resources = _.split(slug, 'chapter-');
  return {
    series: series,
    chapter: resources[1],
  };
}

export default class Chapter extends React.Component {

  _setResources(series, slug, params) {
    this.slug = _getChapterSlugWithParams(params) || slug;
    this.uri = _getChapterUriWithProps(series, slug) || params;
  }

  _fetchChapter () {
    if (!this.slug) { return; }

    CosmicService.fetchObject(this.slug)
    .then((response) => {
      this.chapter = response;
      this.forceUpdate();
    })
    .catch((error) => {
      throw new Error(error);
    });
  }

  componentWillMount () {
    this._setResources(this.props.series, this.props.slug, this.props.params);
    this._fetchChapter();
  }

  componentWillReceiveProps (nextProps) {
    this._setResources(nextProps.series, nextProps.slug, nextProps.params);
    this._fetchChapter();
  }

  render () {
    if (_.isEmpty(this.chapter)) { return false; }

    let chapterPath = join('/', this.uri.series, this.uri.chapter);

    let PageList = _.map(this.chapter.metafields, (page, index) => {
      return (
        <Page
          key={index}
          {...this.uri}
          slug={page.object.slug}
          renderAs={this.props.renderAs}
        />
      );
    });

    return (
      <li className='chapter__wrapper'>
        <Link to={chapterPath}>
          <p>{this.chapter.title}</p>
        </Link>
        <ul>{PageList}</ul>
      </li>
    );
  }
}
