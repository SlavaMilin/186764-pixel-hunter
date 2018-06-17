class Configuration {
  static getState() {
    return {
      live: 3,
      time: 30,
      level: 0,
      statistic: []
    };
  }

  static gameSettings() {
    return {
      littleTime: 5,
      getQuestionsUrl: `http://localhost:3000/questions`
    };
  }

  static answerType() {
    return {
      PAINTING: `painting`,
      PHOTO: `photo`
    };
  }

  static questionType() {
    return {
      TWO_OF_TWO: `two-of-two`,
      TINDER_LIKE: `tinder-like`,
      ONE_OF_THREE: `one-of-three`
    };
  }
}

export default Configuration;
