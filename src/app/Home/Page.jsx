import React  from 'react';
import {Link} from 'react-router';
import {join} from 'path';
import _      from 'lodash';

import CosmicService from '../services/CosmicService';

function _getPageSlugWithParams (params) {
  if (!params || !params.series || !params.chapter || !params.page) { return; }
  return `${params.chapter}-${params.page}`;
}

function _getPageUriWithProps (series, slug) {
  if (!series || !slug) { return; }

  let resources = _.split(slug, '-');
  return {
    series: series,
    chapter: resources[0],
    page: resources[1]
  };
}

export default class Page extends React.Component {

  _setResources(series, slug, params) {
    this.slug = _getPageSlugWithParams(params) || slug;
    this.uri = _getPageUriWithProps(series, slug) || params;
  }

  _fetchChapter () {
    if (!this.uri || !this.uri.chapter) { return; }

    CosmicService.fetchObject(`chapter-${this.uri.chapter}`)
    .then((response) => {
      this.chapter = response;
      this.forceUpdate();
    })
    .catch((error) => {
      throw new Error(error);
    });
  }

  _fetchPage () {
    if (!this.slug) { return; }

    CosmicService.fetchObject(this.slug)
    .then((response) => {
      this.page = response;
      this.forceUpdate();
    })
    .catch((error) => {
      throw new Error(error);
    });
  }

  componentWillMount () {
    this._setResources(this.props.series, this.props.slug, this.props.params);
    this._fetchChapter();
    this._fetchPage();
  }

  componentWillReceiveProps (nextProps) {
    this._setResources(nextProps.series, nextProps.slug, nextProps.params);
    this._fetchChapter();
    this._fetchPage();
  }

  render () {
    if (_.isEmpty(this.page) || _.isEmpty(this.chapter)) { return false; }

    let {series, chapter, page} = this.uri;
    let chapterLength = this.chapter.metafields.length - 1;
    let chapterPath = join(series, chapter);
    let pagePath = join(chapterPath, page);

    if (this.props.renderAs === 'index') {
      return (
        <li>
          <Link to={pagePath}>{this.page.title}</Link>
        </li>
      );
    }

    let prevPath = join(chapterPath, Math.max(page - 1, 0).toString());
    let nextPath = join(chapterPath, Math.min(page + 1, chapterLength).toString());
    let imageSrc = join('https://cosmicjs.com/uploads/', _.first(this.page.metafields).value);

    return (
      <div className='page__wrapper'>
        <Link to='/home'>Home</Link>
        <Link to={prevPath}>Previous</Link>
        <Link to={nextPath}>Next</Link>
        <Link to={nextPath}><img src={imageSrc} /></Link>
      </div>
    );
  }
}
