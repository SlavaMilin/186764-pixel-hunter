import {GameSettings, InitialState} from "../util/config";
import Answer from "./Answer";
import Observer from "../util/observer";

export default class Model {
  constructor() {
    this._state = Object.assign({}, InitialState);
    this._data = [];
    this._subscribers = new Observer();
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

  get name() {
    return this._state.name;
  }

  get correctAnswer() {
    return Answer.getCorrectAnswer(this.getLevelData);
  }

  set setData(data) {
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
    this._state = Answer.saveAnswer(answers, this.correctAnswer, this._state);
  }
}
