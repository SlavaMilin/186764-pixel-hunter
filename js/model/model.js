class Model {
  constructor(state) {
    this._state = Object.assign({}, state);
    this._initialState = Object.assign({}, state);
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
    return this._state.errors > 3;
  }

  get getErrors() {
    return this._state.errors;
  }

  get isLittleTime() {
    return this._state.time < 5;
  }

  get getLevelData() {
    return this._state.data[this._state.level];
  }

  get isMoreGameScreen() {
    return this._state.level < this._state.data.length;
  }

  set setData(data) {
    this._state.data = data;
  }

  resetToDefault() {
    this._state = Object.assign({}, this._initialState);
  }

  addError() {
    this._state.errors += 1;
  }

  tick() {
    this._state.time -= 1;
  }

  setNextScreen() {
    this._state.level += 1;
  }

  addAnswer(answer) {
    this._state.answers.push(answer);
  }
}

export default Model;
