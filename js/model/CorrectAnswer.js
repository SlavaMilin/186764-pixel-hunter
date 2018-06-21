import {QuestionType} from "../util/config";

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
}
