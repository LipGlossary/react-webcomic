import alt  from '../../lib/alt';

class HomeActions {
  constructor () {
    this.generateActions('setData');
  }
}

export default alt.createActions(HomeActions);
