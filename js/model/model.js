import Configuration from "../util/configuration";

class Model {
  constructor(state) {
    this._state = Object.assign({}, state);
    this._initialState = Object.assign({}, state);
    this._data = [];
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
    return this._state.live < 1 || this._state.time < 1;
  }

  get getErrors() {
    return this._state.live;
  }

  get isLittleTime() {
    return this._state.time < Configuration.gameSettings().littleTime;
  }

  get getLevelData() {
    return this._data[this._state.level];
  }

  get isMoreGameScreen() {
    return this._state.level < this._data.length;
  }

  set setData(data) {
    this._data = [...data];
  }

  get getCurrentGameType() {
    return this.getLevelData[`type`];
  }

  get getCurrentGameAnswers() {
    return this.getLevelData[`answers`];
  }

  get getCorrectAnswer() {
    let answers = [];
    switch (this.getCurrentGameType) {
      case `one-of-three`:
        for (let i = 0; i < this.getCurrentGameAnswers.length; i++) {
          const length = this.getCurrentGameAnswers.filter((el) => {
            return el.type === this.getCurrentGameAnswers[i].type;
          }).length;
          if (length === 1) {
            answers.push(i + 1);
            break;
          }
        }
        break;

      case `two-of-two`:
        this.getCurrentGameAnswers.forEach((key, i) => {
          answers.push(`${i + 1} - ${key.type}`);
        });
        break;

      case `tinder-like`:
        answers.push(this.getCurrentGameAnswers[0].type);
        break;
    }
    return `Правильный ответ: ${answers.join(`, `)}`;
  }

  resetToDefault() {
    this._state = Object.assign({}, this._initialState);
  }

  die() {
    this._state.live -= 1;
  }

  tick() {
    this._state.time -= 1;
  }

  goNextLevel() {
    this._state.level += 1;
  }

  addAnswer(answer) {
    this._state.answers.push(answer);
  }
}

export default Model;
