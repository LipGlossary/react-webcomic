import React       from 'react';
import request     from 'reqwest';
import DataActions from './DataActions';

export default React.createClass({

  componentWillMount () {
    request({
      url: `${CONFIG.api}/default`
    })
    .then((response) => {
      DataActions.setData(response.data);
    })
    .catch((error) => {
      throw new Error(error);
    });
  },

  render () {
    return (
      <div className='app__wrapper'>
        {this.props.children}
      </div>
    );
  }

});
