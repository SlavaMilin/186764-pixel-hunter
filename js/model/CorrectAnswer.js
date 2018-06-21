import {GameSettings, InitialState, QuestionType, Result} from "../util/config";

export default class CorrectAnswer {
  static getCorrectAnswer(levelData) {
    let answers = [];
    switch (levelData.type) {
      case QuestionType.ONE_OF_THREE:
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

      case QuestionType.TWO_OF_TWO:
        for (const key of levelData.answers) {
          answers.push(key.type);
        }
        break;

      case QuestionType.TINDER_LIKE:
        answers.push(levelData.answers[0].type);
        break;
    }
    return answers;
  }

  static saveAnswer(answers, correctAnswers, state) {
    let fast = false;
    let slow = false;
    let correct = true;

    for (let i = 0; i < answers.length; i++) {
      if (answers[i] !== correctAnswers[i]) {
        correct = false;
        state.lives -= 1;
        break;
      }
    }

    if (state.time > InitialState.time - GameSettings.FAST_ANSWER) {
      fast = true;
    }
    if (state.time < InitialState.time - GameSettings.SLOW_ANSWER) {
      slow = true;
    }

    if (fast && correct) {
      state.statistic.push(Result.FAST);
    }

    if (slow && correct) {
      state.statistic.push(Result.SLOW);
    }

    if (!fast && !slow && correct) {
      state.statistic.push(Result.CORRECT);
    }

    if (correct === false) {
      state.statistic.push(Result.WRONG);
    }

    return state;
  }
}
