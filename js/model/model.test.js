import {assert} from "chai";
import Model from "./model";
import {InitialState} from "../util/config";


const testData = [
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
  }
];

describe(`test model`, () => {
  const model = new Model();
  model.data = testData;

  it(`should return state`, () => {
    assert.deepEqual(model.state, InitialState);
  });

  it(`should reset state to default`, () => {
    model._state.time -= 1;
    model._state.gameResult = [{
      answers: [`slow`, `fast`]
    }];
    model._state.statistic = [`slow`, `fast`];
    model._resetState();
    assert.deepEqual(model.state, InitialState);
  });

  it(`should increase screen number by 1`, () => {
    assert.equal(model._state.level, 0);
    model._goNextLevel();
    assert.equal(model._state.level, 1);
  });

  it(`should return current time`, () => {
    assert.equal(model._timeValue, 30);
  });

  it(`should subtract live`, () => {
    assert.equal(model._state.lives, 3);
    model._die();
    assert.equal(model._state.lives, 2);
  });

  it(`should check is game lose`, () => {
    assert.equal(model._isLose, false);
    model._state.lives = 0;
    assert.equal(model._isLose, true);
    model._resetState();
    model._state.time = 0;
    assert.equal(model._isLose, true);
    model._resetState();
  });

  it(`should check is it little time`, () => {
    assert.equal(model.isLittleTime, false);
    model._state.time = 1;
    assert.equal(model.isLittleTime, true);
  });

  it(`should return level data`, () => {
    assert.deepEqual(model.levelData, testData[0]);
  });

  it(`should check is it more game screen`, () => {
    assert.equal(model._isMoreGameScreen, true);
    model._state.level = 4;
    assert.equal(model._isMoreGameScreen, false);
    model._resetState();
  });

  it(`should return answer for current game`, () => {
    assert.deepEqual(model.correctAnswer, [2]);
    model._goNextLevel();
    assert.deepEqual(model.correctAnswer, [`painting`, `photo`]);
    model._goNextLevel();
    assert.deepEqual(model.correctAnswer, [`photo`]);
    model._resetState();
  });

  it(`should save name return correct value`, () => {
    model.name = `Vasia`;
    assert.equal(model.name, `Vasia`);
    model._resetState();
    assert.equal(model.name, ``);
  });

  describe(`check game statistic`, () => {
    it(`should add get correct final statistic`, () => {
      model.name = `slava`;
      model._state.statistic = [`fast`, `slow`, `correct`];
      model._state.gameResult = `Loose`;
      assert.deepEqual(model._finalStatistic, {
        statistic: [`fast`, `slow`, `correct`],
        name: `slava`,
        date: Date.now(),
        result: `Loose`
      });
      model._resetState();
    });
  });
});
