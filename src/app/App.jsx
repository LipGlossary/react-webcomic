import React           from 'react';
import DataActions     from './DataActions';
import CosmicService   from './services/CosmicService';

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
        {this.props.children}
      </div>
    );
  }

});
