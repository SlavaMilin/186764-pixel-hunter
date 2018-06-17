class Configuration {
  static getState() {
    return {
      live: 3,
      time: 30,
      level: 0,
      answers: []
    };
  }

  static gameSettings() {
    return {
      littleTime: 5,
      getQuestionsUrl: `http://localhost:3000/questions`
    };
  }
}

export default Configuration;
