import alt from '../../lib/alt';
import HomeActions from './HomeActions';

// Store
class HomeStore {
  constructor () {
    this.bindActions(HomeActions);

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

export default alt.createStore(HomeStore, 'HomeStore');
