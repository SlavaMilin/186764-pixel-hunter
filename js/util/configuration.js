class Configuration {
  constructor() {
    this.InitialState = {
      lives: 3,
      time: 30,
      level: 0,
      statistic: []
    };

    this.Result = {
      CORRECT: `correct`,
      WRONG: `wrong`,
      FAST: `fast`,
      SLOW: `slow`
    };

    this.GameSettings = {
      fastAnswer: 10,
      slowAnswer: 20,
      littleTime: 5
    };

    this.BackendSettings = {
      getQuestionsUrl: `http://localhost:3000/questions`
    };

    this.questionType = {
      TWO_OF_TWO: `two-of-two`,
      TINDER_LIKE: `tinder-like`,
      ONE_OF_THREE: `one-of-three`
    };
  }
}

export default Configuration;
