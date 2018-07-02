import {assert} from "chai";
import Util from "./util";

const testStatistic = [`fast`, `slow`, `correct`, `wrong`, `fast`, `slow`, `correct`, `wrong`, `correct`, `correct`];
const correctAnswer = {
  score: 800,
  totalScore: 850,
  fastBonus: 100,
  fastValue: 2,
  slowPenalty: -100,
  slowValue: 2,
  liveBonus: 50,
  liveValue: 1
};

const data = [
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
          url: `http://via.placeholder.com/350x300`,
          width: 468,
          height: 458
        },
        type: `painting`
      },
      {
        image: {
          url: `http://via.placeholder.com/350x250`,
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
  }
];

describe(`test abstract util func`, () => {
  it(`should return correct describe of statistic`, () => {
    assert.deepEqual(Util.analysisStatistic(testStatistic, 3), correctAnswer);
  });

  it(`should match answer & correct answer & time and return result for statistic`, () => {
    assert.equal(Util.checkAnswer([2], [2], 25), `fast`);
    assert.equal(Util.checkAnswer([`painting`, `photo`], [`painting`, `photo`], 3), `slow`);
    assert.equal(Util.checkAnswer([`photo`], [`photo`], 15), `correct`);
    assert.equal(Util.checkAnswer([`painting`], [`photo`], 15), `wrong`);
  });

  it(`should return set of images`, () => {
    const result = [`http://via.placeholder.com/350x150`, `http://via.placeholder.com/350x200`, `http://via.placeholder.com/350x250`, `http://via.placeholder.com/350x300`];
    assert.hasAllKeys(Util.chooseUnicImg(data), result);
  });
});
