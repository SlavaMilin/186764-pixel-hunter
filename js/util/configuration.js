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
      FAST_ANSWER: 10,
      SLOW_ANSWER: 20,
      LITTLE_TIME: 5
    };

    this.BackendSettings = {
      GET_QUESTIONS_URL: `http://localhost:3000/questions`,
      UPLOAD_STATISTIC_URL: `http://localhost:3000/stats`,
      APP_ID: 186764
    };

    this.questionType = {
      TWO_OF_TWO: `two-of-two`,
      TINDER_LIKE: `tinder-like`,
      ONE_OF_THREE: `one-of-three`
    };
  }
}

export default Configuration;
