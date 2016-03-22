import request from 'reqwest';

const bucket = { slug: 'lonelyrobot' };

class CosmicService {

  getAllObjects () {
    return new Promise((resolve, reject) => {
      request({
        url: `${CONFIG.api}/${bucket.slug}/object_types`
      })
      .then((response) => {
        resolve(response.objects.type);
      })
      .catch(reject);
    });
  }

}

export default new CosmicService();
