import Configuration from "../util/configuration";

class Model {
  constructor() {
    this._configuration = new Configuration();
    this._state = Object.assign({}, this._configuration.InitialState);
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
    return this._state.lives < 1 || this._state.time < 1;
  }

  get getLives() {
    return this._state.lives;
  }

  get isLittleTime() {
    return this._state.time < this._configuration.GameSettings.LITTLE_TIME;
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

  get getCorrectAnswer() {
    let answers = [];
    switch (this.getCurrentGameType) {
      case this._configuration.questionType.ONE_OF_THREE:
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

      case this._configuration.questionType.TWO_OF_TWO:
        for (const key of this.getCurrentGameAnswers) {
          answers.push(key.type);
        }
        break;

      case this._configuration.questionType.TINDER_LIKE:
        answers.push(this.getCurrentGameAnswers[0].type);
        break;
    }
    return answers;
  }

  set setData(data) {
    this._data = [...data];
  }

  resetStateToDefault() {
    this._state = Object.assign({}, this._configuration.InitialState);
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

    const correctAnswer = this.getCorrectAnswer;

    for (let i = 0; i < answers.length; i++) {
      if (answers[i] !== correctAnswer[i]) {
        correct = false;
        this.die();
        break;
      }
    }

    if (this.getTimeValue > this._configuration.InitialState.time - this._configuration.GameSettings.FAST_ANSWER) {
      fast = true;
    }

    if (this.getTimeValue < this._configuration.InitialState.time - this._configuration.GameSettings.SLOW_ANSWER) {
      slow = true;
    }

    if (fast && correct) {
      this._state.statistic.push(this._configuration.Result.FAST);
    }

    if (slow && correct) {
      this._state.statistic.push(this._configuration.Result.SLOW);
    }

    if (!fast && !slow && correct) {
      this._state.statistic.push(this._configuration.Result.CORRECT);
    }

    if (correct === false) {
      this._state.statistic.push(this._configuration.Result.WRONG);
    }
  }
}

export default Model;
