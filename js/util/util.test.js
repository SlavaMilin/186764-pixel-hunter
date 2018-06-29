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
});
