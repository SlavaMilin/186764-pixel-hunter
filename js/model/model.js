import {GameSettings, InitialState, GameType, Result} from "../util/config";
import Answer from "./Answer";
import Observer from "../util/observer";
import Util from "../util/util";

export default class Model {
  constructor() {
    this._state = Object.assign({}, InitialState);
    this._data = [];
    this._subscribers = new Observer();
    this.checkAnswer = Answer.checkAnswer;
    this.tick = () => {
      if (this.timeValue > 0) {
        this._state.time -= 1;
        Util.updateTimer(this.timeValue);
      }
      if (this.timeValue === 0) {
        this.die();
        this.goNextLevel();
      }
    };
  }

  get state() {
    return this._state;
  }

  get levelValue() {
    return this._state.level;
  }

  get timeValue() {
    return this._state.time;
  }

  get livesValue() {
    return this._state.lives;
  }

  get initialLivesValue() {
    return InitialState.lives;
  }

  get statistic() {
    return this._state.statistic;
  }

  get name() {
    return this._state.name;
  }

  get levelData() {
    return this._data[this._state.level];
  }

  get currentGameType() {
    return this.levelData[`type`];
  }

  get isLittleTime() {
    return this._state.time < GameSettings.LITTLE_TIME;
  }

  get isLose() {
    return this._state.lives < 1 || this._state.time < 1;
  }

  get isMoreGameScreen() {
    return this._state.level < this._data.length;
  }

  get correctAnswer() {
    return Answer.getCorrectAnswer(this.levelData);
  }

  set data(data) {
    this._data = [...data];
  }

  set name(name) {
    this._state.name = name;
  }

  resetTimer() {
    this._state.time = InitialState.time;
  }

  stopTimer() {
    window.clearInterval(this._intervalId);
  }

  addSubscriber(func) {
    this._subscribers.subscribe(func);
  }

  notifySubscribers(type, data) {
    this._subscribers.notifySubscribers(type, data);
  }

  restartGame() {
    this._state = Object.assign({}, InitialState);
    this.stopTimer();
    this.notifySubscribers(GameType.RESTART, this);
  }

  die() {
    this._state.lives -= 1;
  }

  goNextLevel() {
    this._state.level += 1;
    this.resetTimer();

    if (!this.isMoreGameScreen) {
      return this.notifySubscribers(GameType.WIN, this);
    }

    if (this.isLose) {
      return this.notifySubscribers(GameType.LOOSE, this);
    }

    return this.notifySubscribers(this.currentGameType, this);
  }

  startGame() {
    this.notifySubscribers(this.currentGameType, this);
    this._intervalId = window.setInterval(this.tick, 1000);
  }

  saveAnswer(answers) {
    const answer = this.checkAnswer(answers, this.correctAnswer, this.timeValue);
    if (answer === Result.WRONG) {
      this.die();
    }
    this._state.statistic.push(answer);
    this.goNextLevel();
  }
}
