import {GameSettings, InitialState, GameType, Result} from "../util/config";

export default class Answer {
  static getCorrectAnswer(levelData) {
    let answers = [];
    switch (levelData.type) {
      case GameType.ONE_OF_THREE:
        for (let i = 0; i < levelData.answers.length; i++) {
          const length = levelData.answers.filter((el) => {
            return el.type === levelData.answers[i].type;
          }).length;
          if (length === 1) {
            answers.push(i);
            break;
          }
        }
        break;

      case GameType.TWO_OF_TWO:
        for (const key of levelData.answers) {
          answers.push(key.type);
        }
        break;

      case GameType.TINDER_LIKE:
        answers.push(levelData.answers[0].type);
        break;
    }
    return answers;
  }

  static checkAnswer(answers, correctAnswers, time) {
    let fast = false;
    let slow = false;
    let correct = true;
    let result = ``;

    for (let i = 0; i < answers.length; i++) {
      if (answers[i] !== correctAnswers[i]) {
        correct = false;
        break;
      }
    }

    if (time > InitialState.time - GameSettings.FAST_ANSWER) {
      fast = true;
    }
    if (time < InitialState.time - GameSettings.SLOW_ANSWER) {
      slow = true;
    }

    if (fast && correct) {
      result = Result.FAST;
    }

    if (slow && correct) {
      result = Result.SLOW;
    }

    if (!fast && !slow && correct) {
      result = Result.CORRECT;
    }

    if (correct === false) {
      result = Result.WRONG;
    }

    return result;
  }
}
