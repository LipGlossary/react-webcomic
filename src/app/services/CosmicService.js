import request from 'reqwest';

class CosmicService {

  getAllObjects () {
    return new Promise((resolve, reject) => {
      request({
        url: `${CONFIG.api}/object-types`
      })
      .then((response) => {
        resolve(response.object_types);
      })
      .catch(reject);
    });
  }

}

export default new CosmicService();
