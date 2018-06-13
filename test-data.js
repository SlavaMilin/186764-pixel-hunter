module.exports = MockBase => class MockRivers extends MockBase {
  mocks () {
    return {
      route: '/get',
      responses: [
        {
          response: {
            type: 'json',
            body: [
              {
                type: `one-of-three`,
                question: `"Найдите фото среди изображений"`,
                answers: [
                  {
                    image: {
                      url: `http://via.placeholder.com/350x150`,
                      width: 350,
                      height: 150
                    },
                    type: `painting`
                  },
                  {
                    image: {
                      url: `http://via.placeholder.com/350x200`,
                      width: 350,
                      height: 200
                    },
                    type: `painting`
                  },
                  {
                    image: {
                      url: `http://via.placeholder.com/350x250`,
                      width: 350,
                      height: 250
                    },
                    type: `photo`
                  }
                ]
              },
              {
                type: `one-of-three`,
                question: `"Найдите фото среди изображений"`,
                answers: [
                  {
                    image: {
                      url: `http://via.placeholder.com/350x150`,
                      width: 350,
                      height: 150
                    },
                    type: `painting`
                  },
                  {
                    image: {
                      url: `http://via.placeholder.com/350x200`,
                      width: 350,
                      height: 200
                    },
                    type: `painting`
                  },
                  {
                    image: {
                      url: `http://via.placeholder.com/350x250`,
                      width: 350,
                      height: 250
                    },
                    type: `photo`
                  }
                ]
              },
              {
                type: `one-of-three`,
                question: `"Найдите фото среди изображений"`,
                answers: [
                  {
                    image: {
                      url: `http://via.placeholder.com/350x150`,
                      width: 350,
                      height: 150
                    },
                    type: `painting`
                  },
                  {
                    image: {
                      url: `http://via.placeholder.com/350x200`,
                      width: 350,
                      height: 200
                    },
                    type: `painting`
                  },
                  {
                    image: {
                      url: `http://via.placeholder.com/350x250`,
                      width: 350,
                      height: 250
                    },
                    type: `photo`
                  }
                ]
              },
              {
                type: `two-of-two`,
                question: `Угадайте для каждого изображения фото или рисунок?`,
                answers: [
                  {
                    image: {
                      url: `https://k32.kn3.net/5C7060EC5.jpg`,
                      width: 468,
                      height: 458
                    },
                    type: `painting`
                  },
                  {
                    image: {
                      url: `https://i.redd.it/l08jq66vul2y.jpg`,
                      width: 468,
                      height: 458
                    },
                    type: `photo`
                  }
                ]
              },
              {
                type: `two-of-two`,
                question: `Угадайте для каждого изображения фото или рисунок?`,
                answers: [
                  {
                    image: {
                      url: `https://k32.kn3.net/5C7060EC5.jpg`,
                      width: 468,
                      height: 458
                    },
                    type: `painting`
                  },
                  {
                    image: {
                      url: `https://i.redd.it/l08jq66vul2y.jpg`,
                      width: 468,
                      height: 458
                    },
                    type: `photo`
                  }
                ]
              },
              {
                type: `two-of-two`,
                question: `Угадайте для каждого изображения фото или рисунок?`,
                answers: [
                  {
                    image: {
                      url: `https://k32.kn3.net/5C7060EC5.jpg`,
                      width: 468,
                      height: 458
                    },
                    type: `painting`
                  },
                  {
                    image: {
                      url: `https://i.redd.it/l08jq66vul2y.jpg`,
                      width: 468,
                      height: 458
                    },
                    type: `photo`
                  }
                ]
              },
              {
                type: `tinder-like`,
                question: `Угадай, фото или рисунок?`,
                answers: [
                  {
                    image: {
                      url: `http://via.placeholder.com/350x250`,
                      width: 350,
                      height: 250
                    },
                    type: `photo`
                  }
                ]
              },
              {
                type: `tinder-like`,
                question: `Угадай, фото или рисунок?`,
                answers: [
                  {
                    image: {
                      url: `http://via.placeholder.com/350x250`,
                      width: 350,
                      height: 250
                    },
                    type: `photo`
                  }
                ]
              },
              {
                type: `tinder-like`,
                question: `Угадай, фото или рисунок?`,
                answers: [
                  {
                    image: {
                      url: `http://via.placeholder.com/350x250`,
                      width: 350,
                      height: 250
                    },
                    type: `painting`
                  }
                ]
              }
            ]
          }
        }
      ]
    }
  }
};
