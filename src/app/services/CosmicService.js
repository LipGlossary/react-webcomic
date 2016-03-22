import request from 'reqwest';
import Cosmic  from 'cosmicjs';

const bucket = { slug: 'lonelyrobot' };

class CosmicService {

  getAllObjects () {
    return new Promise((resolve, reject) => {
      Cosmic.getObjects({ bucket }, function(error, response) {
        if (error) { reject(error); }
        else { resolve(response.objects); }
      });
    });
  }

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
