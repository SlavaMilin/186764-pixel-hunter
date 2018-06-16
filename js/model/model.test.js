import {assert} from "chai";
import Model from "./model";
import Configuration from "../util/configuration";

const fastAnswer = {
  time: 5,
  correct: true
};

const slowAnswer = {
  time: 22,
  correct: true
};

const regularAnswer = {
  time: 15,
  correct: true
};

const errorAnswer = {
  time: 15,
  correct: false
};

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
  }
];

describe(`test model`, () => {
  const model = new Model(Configuration.getState());
  model.setData = testData;

  it(`should return state`, () => {
    assert.deepEqual(model.getState, Configuration.getState());
  });

  it(`should reset state to default`, () => {
    model.tick();
    assert.deepEqual(model._initialState, Configuration.getState());
    model.resetToDefault();
    assert.deepEqual(model.getState, Configuration.getState());
  });

  it(`should return screen value`, () => {
    assert.equal(model.getScreenValue, 0);
  });

  it(`should increase screen number by 1`, () => {
    assert.equal(model.getScreenValue, 0);
    model.goNextLevel();
    assert.equal(model.getScreenValue, 1);
  });

  it(`should return current time`, () => {
    assert.equal(model.getTimeValue, 30);
  });

  it(`should decrease time by 1`, () => {
    assert.equal(model.getTimeValue, 30);
    model.tick();
    assert.equal(model.getTimeValue, 29);
  });

  it(`should get errors value`, () => {
    assert.equal(model.getErrors, 3);
  });

  it(`should subtract live`, () => {
    assert.equal(model.getErrors, 3);
    model.die();
    assert.equal(model.getErrors, 2);
  });

  it(`should add answer to state`, () => {
    assert.lengthOf(model.getState.answers, 0);
    model.addAnswer(fastAnswer);
    model.addAnswer(slowAnswer);
    model.addAnswer(regularAnswer);
    model.addAnswer(errorAnswer);
    assert.lengthOf(model.getState.answers, 4);
  });

  it(`should check is game lose`, () => {
    assert.equal(model.isLose, false);
    model._state.live = 0;
    assert.equal(model.isLose, true);
    model.resetToDefault();
    model._state.time = 0;
    assert.equal(model.isLose, true);
    model.resetToDefault();
  });

  it(`should check is it little time`, () => {
    assert.equal(model.isLittleTime, false);
    model._state.time = 1;
    assert.equal(model.isLittleTime, true);
  });

  it(`should return level data`, () => {
    assert.deepEqual(model.getLevelData, testData[0]);
  });

  it(`should check is it more game screen`, () => {
    assert.equal(model.isMoreGameScreen, true);
    model._state.level = 4;
    assert.equal(model.isMoreGameScreen, false);
    model.resetToDefault();
  });

  it(`should return answer for current game`, () => {
    assert.equal(model.getCorrectAnswer, `Правильный ответ: 3`);
    model.goNextLevel();
    assert.equal(model.getCorrectAnswer, `Правильный ответ: 1 - painting, 2 - photo`);
    model.goNextLevel();
    assert.equal(model.getCorrectAnswer, `Правильный ответ: photo`);
    model.resetToDefault();
  });
});
