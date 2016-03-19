import alt from '../../lib/alt';
import HomeActions from './HomeActions';

// Store
class HomeStore {
  constructor () {
    this.bindActions(HomeActions);

    this.state = {
      series: []
    };
  }

  onSetSeries (data) {
    this.setState({series: data});
  }
}

export default alt.createStore(HomeStore, 'HomeStore');
