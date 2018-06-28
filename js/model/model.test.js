import {assert} from "chai";
import Model from "./model";
import {InitialState} from "../util/config";

const firstAnswer = [2];
const secondAnswer = [`painting`, `photo`];
const thirdAnswer = [`photo`];
const fourthAnswer = [`painting`];

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
    model.resetState();
    assert.deepEqual(model.state, InitialState);
  });

  it(`should return screen value`, () => {
    assert.equal(model.levelValue, 0);
  });

  it(`should increase screen number by 1`, () => {
    assert.equal(model.levelValue, 0);
    model.goNextLevel();
    assert.equal(model.levelValue, 1);
  });

  it(`should return current time`, () => {
    assert.equal(model.timeValue, 30);
  });

  it(`should get errors value`, () => {
    assert.equal(model.livesValue, 3);
  });

  it(`should subtract live`, () => {
    assert.equal(model.livesValue, 3);
    model.die();
    assert.equal(model.livesValue, 2);
  });

  it(`should check is game lose`, () => {
    assert.equal(model.isLose, false);
    model._state.lives = 0;
    assert.equal(model.isLose, true);
    model.resetState();
    model._state.time = 0;
    assert.equal(model.isLose, true);
    model.resetState();
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
    assert.equal(model.isMoreGameScreen, true);
    model._state.level = 4;
    assert.equal(model.isMoreGameScreen, false);
    model.resetState();
  });

  it(`should return answer for current game`, () => {
    assert.deepEqual(model.correctAnswer, [2]);
    model.goNextLevel();
    assert.deepEqual(model.correctAnswer, [`painting`, `photo`]);
    model.goNextLevel();
    assert.deepEqual(model.correctAnswer, [`photo`]);
    model.resetState();
  });

  it(`should save name return correct value`, () => {
    model.name = `Vasia`;
    assert.equal(model.name, `Vasia`);
    model.resetState();
    assert.equal(model.name, ``);
  });

  describe(`check game statistic`, () => {
    it(`should match answer & correct answer & time and return result for statistic`, () => {
      assert.equal(model.checkAnswer(firstAnswer, model.correctAnswer, model.timeValue), `fast`);

      model.goNextLevel();
      model._state.time = 3;
      assert.equal(model.checkAnswer(secondAnswer, model.correctAnswer, model.timeValue), `slow`);

      model.goNextLevel();
      model._state.time = 15;
      assert.equal(model.checkAnswer(thirdAnswer, model.correctAnswer, model.timeValue), `correct`);

      model.goNextLevel();
      assert.equal(model.checkAnswer(fourthAnswer, model.correctAnswer, model.timeValue), `wrong`);

      model.resetState();
    });
  });
});
