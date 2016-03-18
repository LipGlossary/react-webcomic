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
    if (_.isEmpty(this.props.chapters)) { return false; }

    let chapter = this.props.params.chapter;
    let page = this.props.params.page;
    let chapterPath = join(this.props.params.series, chapter);
    let pages = _.find(this.props.chapters, {asset: chapter}).pages;
    let asset = join('/assets/images/', chapterPath, pages[page]);

    return (
      <div className='page__wrapper'>
        <Link to='/home'>Home</Link>
        <Link
          to={join(chapterPath, Math.max(page - 1, 0).toString())}
        >
          Previous
        </Link>
        <Link
          to={join(chapterPath, Math.min(page + 1, pages.length - 1).toString())}
        >
          Next
        </Link>
        <img src={asset} />
      </div>
    );
  }
}

export default connectToStores(Page);
