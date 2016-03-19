import alt  from '../../lib/alt';

class HomeActions {
  constructor () {
    this.generateActions('setSeries');
  }
}

export default alt.createActions(HomeActions);
