import {GameSettings, InitialState, GameType} from "../util/config";
import Answer from "./Answer";
import Observer from "../util/observer";

export default class Model {
  constructor() {
    this._state = Object.assign({}, InitialState);
    this._data = [];
    this._subscribers = new Observer();
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

  addSubscriber(func) {
    this._subscribers.subscribe(func);
  }

  notifySubscribers(type, data) {
    this._subscribers.notifySubscribers(type, data);
  }

  restartGame() {
    this._state = Object.assign({}, InitialState);
    this.notifySubscribers(GameType.RESTART, this);
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

  startGame() {
    this.notifySubscribers(this.currentGameType, this);
  }

  saveAnswer(answers) {
    this._state = Answer.saveAnswer(answers, this.correctAnswer, this.state);
  }
}
