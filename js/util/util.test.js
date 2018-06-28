import {assert} from "chai";
import Util from "./util";

const testStatistic = [`fast`, `slow`, `correct`, `wrong`, `fast`, `slow`, `correct`, `wrong`, `correct`, `wrong`];
const correctAnswer = {
  score: 700,
  totalScore: 850,
  fastBonus: 100,
  fastValue: 2,
  slowPenalty: -100,
  slowValue: 2,
  liveBonus: 150,
  liveValue: 3
};

describe(`test abstract util func`, () => {
  it(`should return correct describe of statistic`, () => {
    assert.deepEqual(Util.analysisStatistic(testStatistic, 3), correctAnswer);
  });
});
