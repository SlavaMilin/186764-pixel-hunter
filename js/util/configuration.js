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
      littleTime: 5
    };
  }
}

export default Configuration;
