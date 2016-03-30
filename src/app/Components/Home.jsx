import React  from 'react';
import {Link} from 'react-router';

export default class Chapter extends React.Component {

  render () {
    return (
      <div className='home__wrapper'>
        <h1>Webcomics by Lonely Robot</h1>
        <ul>
          <li>
            <Link to='/belfry'>The Belfry Twins</Link>
          </li>
        </ul>
      </div>
    );
  }
}
