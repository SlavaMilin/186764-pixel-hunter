import {GameSettings, InitialState, Result} from "../util/config";
import CorrectAnswer from "./CorrectAnswer";

export default class Model {
  constructor() {
    this._state = Object.assign({}, InitialState);
    this._data = [];
    this.getCorrectAnswer = CorrectAnswer.getCorrectAnswer;
  }

  get getState() {
    return this._state;
  }

  get getScreenValue() {
    return this._state.level;
  }

  get getTimeValue() {
    return this._state.time;
  }

  get isLose() {
    return this._state.lives < 1 || this._state.time < 1;
  }

  get getLives() {
    return this._state.lives;
  }

  get isLittleTime() {
    return this._state.time < GameSettings.LITTLE_TIME;
  }

  get getLevelData() {
    return this._data[this._state.level];
  }

  get isMoreGameScreen() {
    return this._state.level < this._data.length;
  }

  get getCurrentGameType() {
    return this.getLevelData[`type`];
  }

  get getCurrentGameAnswers() {
    return this.getLevelData[`answers`];
  }

  get getStatistic() {
    return this._state.statistic;
  }

  set setData(data) {
    this._data = [...data];
  }

  resetStateToDefault() {
    this._state = Object.assign({}, InitialState);
  }

  die() {
    this._state.lives -= 1;
  }

  tick() {
    this._state.time -= 1;
  }

  goNextLevel() {
    this._state.level += 1;
  }

  saveAnswer(answers) {
    let fast = false;
    let slow = false;
    let correct = true;

    const correctAnswer = this.getCorrectAnswer(this.getLevelData);

    for (let i = 0; i < answers.length; i++) {
      if (answers[i] !== correctAnswer[i]) {
        correct = false;
        this.die();
        break;
      }
    }

    if (this.getTimeValue > InitialState.time - GameSettings.FAST_ANSWER) {
      fast = true;
    }

    if (this.getTimeValue < InitialState.time - GameSettings.SLOW_ANSWER) {
      slow = true;
    }

    if (fast && correct) {
      this._state.statistic.push(Result.FAST);
    }

    if (slow && correct) {
      this._state.statistic.push(Result.SLOW);
    }

    if (!fast && !slow && correct) {
      this._state.statistic.push(Result.CORRECT);
    }

    if (correct === false) {
      this._state.statistic.push(Result.WRONG);
    }
  }
}
