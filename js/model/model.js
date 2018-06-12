class Model {
  constructor(state) {
    this._state = state;
  }

  get getState() {
    return this._state;
  }

  get getScreenValue() {
    return this._state.screen;
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

  addError() {
    this._state.errors += 1;
  }

  tick() {
    this._state.time -= 1;
  }

  setNextScreen() {
    this._state.screen += 1;
  }

  addAnswer(answer) {
    this._state.answers.push(answer);
  }
}

export default Model;
