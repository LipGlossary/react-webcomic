import React  from 'react';
import {Link} from 'react-router';

export default class Header extends React.Component {

  render () {
    return (
      <div className='header__wrapper'>
        <Link to='/' className='imprint'>
          <img src='/assets/images/lrs-logo-horizontal.png' />
          <p>Comics</p>
        </Link>
        <nav>
          <ul>
            <li>
              <Link to='/belfry'>Belfry Twins</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
