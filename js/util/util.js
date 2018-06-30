import {GameSettings, InitialState, GameType, Result, ScoreSettings} from "../util/config";

export default class Util {
  static render(html) {
    const element = document.createElement(`template`);
    element.innerHTML = html.trim();
    return element.content;
  }

  static updateTimer(time) {
    document.querySelector(`.game__timer`).innerText = time;
  }

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

  static analysisStatistic(statistic) {
    const errors = statistic.filter((it) => ((it === Result.WRONG))).length;
    const liveValue = InitialState.lives - errors;
    const correct = statistic.length - errors;
    const slowValue = statistic.filter((it) => (it === Result.SLOW)).length;
    const fastValue = statistic.filter((it) => (it === Result.FAST)).length;

    const score = correct * ScoreSettings.CORRECT_ANSWER;
    const fastBonus = fastValue * ScoreSettings.FAST_BONUS;
    const slowPenalty = slowValue * ScoreSettings.SLOW_PENALTY;
    const liveBonus = liveValue * ScoreSettings.LIVE_BONUS;
    const totalScore = score + fastBonus + slowPenalty + liveBonus;

    return {
      score,
      totalScore,
      fastBonus,
      fastValue,
      slowPenalty,
      slowValue,
      liveBonus,
      liveValue
    };
  }

  static getStatisticTemplate(statistic) {
    return `
<ul class="stats">
  ${Array(GameSettings.TOTAL_SCREEN).fill(``).map((it, i) => {
    if (statistic[i]) {
      return `<li class="stats__result stats__result--${statistic[i]}"></li>`;
    }
    return `<li class="stats__result stats__result--unknown"></li>`;
  }).join(``)}
</ul>
    `;
  }

  static chooseUnicImg(data) {
    const result = new Set();

    for (const key of data) {
      key.answers.forEach((it) => {
        result.add(it.image.url);
      });
    }
    return result;
  }
}
