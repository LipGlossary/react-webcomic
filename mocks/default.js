module.exports = [
  {
    route: '/default',
    method: 'GET',
    code: 200,
    response: () => {
      return {
        data: [
          {
            title: 'The Belfry Twins',
            asset: 'belfry',
            chapters: [
              {
                title: 'Gothology: The Eternal Sad',
                asset: '1',
                pages: ['01.jpg', '02.jpg', '03.jpg']
              }, {
                title: 'Gothology: Misery Loves Company',
                asset: '2',
                pages: ['01.jpg', '02.jpg', '03.jpg']
              }
            ]
          }
        ]
      }
    }
  }
];
