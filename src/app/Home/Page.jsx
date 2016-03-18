import React           from 'react';
import connectToStores from 'alt/utils/connectToStores';
import {join}          from 'path';
import {Link}          from 'react-router';
import _               from 'lodash';
import DataStore       from '../DataStore';

class Page extends React.Component {

  static getStores () {
    return [DataStore];
  }

  static getPropsFromStores () {
    return DataStore.getState();
  }

  componentWillMount () { }

  componentWillReceiveProps () { }

  render () {
    if (_.isEmpty(this.props.data)) { return false; }

    let {series, chapter, page} = this.props.params;

    let chapterPath = join(series, chapter);
    let chapters = _
      .chain(this.props.data)
      .find({asset: series})
      .value()
      .chapters;
    let pages = _
      .chain(chapters)
      .find({asset: chapter})
      .value()
      .pages;
    let asset = join('/assets/images/', chapterPath, pages[page]);

    let prevPath = join(chapterPath, Math.max(page - 1, 0).toString());
    let nextPath = join(chapterPath, Math.min(page + 1, pages.length - 1).toString());

    return (
      <div className='page__wrapper'>
        <Link to='/home'>Home</Link>
        <Link to={prevPath}>Previous</Link>
        <Link to={nextPath}>Next</Link>
        <Link to={nextPath}><img src={asset} /></Link>
      </div>
    );
  }
}

export default connectToStores(Page);
