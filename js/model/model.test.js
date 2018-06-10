import {assert} from "chai";
import Model from "./model";
import InitialState from "../initial-statle";

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

describe(`test model`, () => {
  const model = new Model(InitialState.getState());

  it(`should return state`, () => {
    assert.deepEqual(model.getState, InitialState.getState());
  });

  it(`should return screen value`, () => {
    assert.equal(model.getScreenValue, 0);
  });

  it(`should increase screen number by 1`, () => {
    assert.equal(model.getScreenValue, 0);
    model.setNextScreen();
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
    assert.equal(model.getErrors, 0);
  });

  it(`should add + 1 error`, () => {
    assert.equal(model.getErrors, 0);
    model.addError();
    assert.equal(model.getErrors, 1);
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
  });

  it(`should check is it little time`, () => {
    assert.equal(model.isLitleTime, false);
  });
});
