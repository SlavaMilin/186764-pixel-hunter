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
