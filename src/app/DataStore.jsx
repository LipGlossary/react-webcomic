import alt from '../lib/alt';
import DataActions from './DataActions';

// Store
class DataStore {
  constructor () {
    this.bindActions(DataActions);

    this.state = {
      data: []
    };
  }

  onSetData (data) {
    this.setState({data: data});
  }
}

export default alt.createStore(DataStore, 'DataStore');
