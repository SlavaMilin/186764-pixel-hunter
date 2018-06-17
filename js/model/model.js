import Configuration from "../util/configuration";

class Model {
  constructor() {
    this._state = Object.assign({}, Configuration.getState());
    this._initialState = Object.assign({}, this._state);
    this._state.statistic = [];
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

  get getCurrentGameType() {
    return this.getLevelData[`type`];
  }

  get getCurrentGameAnswers() {
    return this.getLevelData[`answers`];
  }

  get getCorrectAnswer() {
    let answers = [];
    switch (this.getCurrentGameType) {
      case Configuration.questionType().ONE_OF_THREE:
        for (let i = 0; i < this.getCurrentGameAnswers.length; i++) {
          const length = this.getCurrentGameAnswers.filter((el) => {
            return el.type === this.getCurrentGameAnswers[i].type;
          }).length;
          if (length === 1) {
            answers.push(i);
            break;
          }
        }
        break;

      case Configuration.questionType().TWO_OF_TWO:
        for (const key of this.getCurrentGameAnswers) {
          answers.push(key.type);
        }
        break;

      case Configuration.questionType().TINDER_LIKE:
        answers.push(this.getCurrentGameAnswers[0].type);
        break;
    }
    return answers;
  }

  set setData(data) {
    this._data = [...data];
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
