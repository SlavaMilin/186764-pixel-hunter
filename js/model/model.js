import {InitialState, GameType, Result, GameResult, StepValue} from "../util/config";
import Observer from "../util/observer";
import Util from "../util/util";

export default class Model {
  constructor() {
    this._state = Object.assign({}, InitialState);
    this._data = [];
    this._observer = new Observer();
    this.tick = () => {
      if (this._timeValue > 0) {
        this._state.time -= StepValue.TIME;
        Util.updateTimer(this._timeValue);
      }

      Util.paintLowTime(this._timeValue);

      if (this._timeValue === 0) {
        this._die();
        this._goNextLevel();
      }
    };
  }

  get _timeValue() {
    return this._state.time;
  }

  get _currentGameType() {
    return this.levelData[`type`];
  }

  get _isLose() {
    return this._state.lives < 0 || this._state.time < 1;
  }

  get _isMoreGameScreen() {
    return this._state.level < this._data.length;
  }

  get finalStatistic() {
    return {
      date: Date.now(),
      statistic: [...this._state.statistic],
      name: this._state.name,
      result: this._state.gameResult
    };
  }

  get state() {
    return this._state;
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

  get correctAnswer() {
    return Util.getCorrectAnswer(this.levelData);
  }

  get allStatistic() {
    return this._state.allStatistic;
  }

  get errorMessage() {
    return this._state.errorMessage;
  }

  set errorMessage(error) {
    this._state.errorMessage = error;
  }

  set data(data) {
    this._data = [...data];
  }

  set name(name) {
    this._state.name = name;
  }

  set allStatistic(statistic) {
    this._state.allStatistic = [...statistic];
  }

  _resetTimer() {
    this._state.time = InitialState.time;
  }

  _stopTimer() {
    window.clearInterval(this._intervalId);
  }

  _resetState() {
    this._state = Object.assign({}, InitialState);
  }

  _die() {
    this._state.lives -= StepValue.LIVE;
    this._state.statistic = [...this._state.statistic, Result.WRONG];
  }

  _finishGame(result) {
    this._state.gameResult = result;
    this._stopTimer();
    return this.notifySubscribers(GameType.FINISH, this);
  }

  _goNextLevel() {
    this._state.level += StepValue.LEVEL;
    this._resetTimer();

    if (this._isLose) {
      return this._finishGame(GameResult.LOOSE);
    }

    if (!this._isMoreGameScreen) {
      return this._finishGame(GameResult.WIN);
    }

    return this.notifySubscribers(this._currentGameType, this);
  }

  addSubscriber(func) {
    this._observer.subscribe(func);
  }

  notifySubscribers(type, data) {
    this._observer.notifySubscribers(type, data);
  }

  startGame() {
    this.notifySubscribers(this._currentGameType, this);
    this._intervalId = window.setInterval(this.tick, 1000);
  }

  restartGame() {
    this._resetState();
    this._stopTimer();
    this.notifySubscribers(GameType.RESTART, this);
  }

  saveAnswer(answers) {
    const answer = Util.checkAnswer(answers, this.correctAnswer, this._timeValue);
    if (answer === Result.WRONG) {
      this._die();
    }
    this._state.statistic = [...this._state.statistic, answer];
    this._goNextLevel();
  }
}
