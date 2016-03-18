import alt  from '../lib/alt';

class DataActions {
  constructor () {
    this.generateActions('setData');
  }
}

export default alt.createActions(DataActions);
