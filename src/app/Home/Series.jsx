import React   from 'react';
import {Link}  from 'react-router';
import request from 'reqwest';
import {join}  from 'path';
import _       from 'lodash';

import Chapter from './Chapter';

export default class Series extends React.Component {

  componentWillMount () {
    let slug = this.props.params && this.props.params.series || this.props.slug;

    request({
      url: `${CONFIG.api}/object/${slug}`
    })
    .then((response) => {
      this.series = response.object;
      this.forceUpdate();
    })
    .catch((error) => {
      throw new Error(error);
    });
  }

  componentWillReceiveProps (nextProps) {
    request({
      url: `${CONFIG.api}/object/${nextProps.slug}`
    })
    .then((response) => {
      this.series = response.object;
      this.forceUpdate();
    })
    .catch((error) => {
      throw new Error(error);
    });
  }

  render () {
    if (_.isEmpty(this.series)) { return false; }

    let slug = this.props.params && this.props.params.series || this.props.slug;
    let seriesPath = join('/', slug);

    let ChapterList = _.map(this.series.metafields, (chapter, index) => {
      return (
        <Chapter
          key={index}
          series={slug}
          slug={chapter.object.slug}
          renderAs='index'
        />
      );
    });

    return (
      <li className='series__wrapper'>
        <Link to={seriesPath}>
          <p>{this.series.title}</p>
        </Link>
        <ul>{ChapterList}</ul>
      </li>
    );
  }
}
