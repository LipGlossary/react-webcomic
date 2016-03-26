import React  from 'react';
import {Link} from 'react-router';

export default class Header extends React.Component {

  render () {
    return (
      <header className='header__wrapper'>
        <Link to='/' className='logo'>
          <img src='/assets/images/lrs-logo-horizontal.png' />
        </Link>
        <nav>
          <ul>
            <li>
              <Link to='/belfry'>Belfry Twins</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
