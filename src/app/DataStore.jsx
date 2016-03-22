import alt           from '../lib/alt';
import DataActions from './DataActions';

// Store
class DataStore {
  constructor () {
    this.bindActions(DataActions);

    this.state = {
      projects: []
    };
  }

  onSetData (data) {
    this.setState({
      projects: data
    });
  }
}

export default alt.createStore(DataStore, 'DataStore');
