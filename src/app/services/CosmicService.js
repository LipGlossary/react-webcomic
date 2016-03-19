import request from 'reqwest';

class CosmicService {

  fetchObject (slug) {
    return new Promise((resolve, reject) => {
      request({
        url: `${CONFIG.api}/object/${slug}`
      })
      .then((response) => {
        resolve(response.object);
      })
      .catch(reject);
    });
  }

}

export default new CosmicService();
