import React           from 'react';
import DataActions     from './DataActions';
import CosmicService   from './services/CosmicService';

import Header from './Components/Header';
import Home   from './Components/Home';
import Footer from './Components/Footer';

export default React.createClass({

  componentWillMount () {
    CosmicService.getAllObjects()
    .then((objects) => {
      DataActions.setData(objects);
    })
    .catch((error) => { throw new Error(error); });
  },

  render () {
    return (
      <div className='app__wrapper'>
        <Header />
        { this.props.children || <Home /> }
        <Footer />
      </div>
    );
  }

});
