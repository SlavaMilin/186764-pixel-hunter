import Observer from "./observer";
import {assert} from "chai";

let testData = ``;
const testFunc = (message) => {
  if (message === `foo`) {
    testData = `bar`;
  }
};
const observer = new Observer();

describe(`test observer class`, () => {
  it(`should add subscriber`, () => {
    observer.subscribe(testFunc);
    assert.equal(observer.subscribers.length, 1);
  });

  it(`should notify subscribers`, () => {
    observer.notifySubscribers(`foo`);
    assert.equal(testData, `bar`);
  });

  it(`should remove subscriber`, () => {
    observer.unsubscribe(testFunc);
    assert.equal(observer.subscribers.length, 0);
  });
});
