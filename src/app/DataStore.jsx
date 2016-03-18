import alt from '../lib/alt';
import DataActions from './DataActions';

// Store
class DataStore {
  constructor () {
    this.bindActions(DataActions);

    this.state = {
      title: '',
      asset: '',
      chapters: []
    };
  }

  onSetData (data) {
    this.setState({
      title: data.title,
      asset: data.asset,
      chapters: data.chapters
    });
  }
}

export default alt.createStore(DataStore, 'DataStore');
