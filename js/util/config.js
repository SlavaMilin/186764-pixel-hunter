const InitialState = {
  lives: 3,
  time: 30,
  level: 0,
  name: ``,
  statistic: []
};

const Result = {
  CORRECT: `correct`,
  WRONG: `wrong`,
  FAST: `fast`,
  SLOW: `slow`
};

const GameSettings = {
  FAST_ANSWER: 10,
  SLOW_ANSWER: 20,
  LITTLE_TIME: 5
};

const GameType = {
  TWO_OF_TWO: `two-of-two`,
  TINDER_LIKE: `tinder-like`,
  ONE_OF_THREE: `one-of-three`,
  RULES: `rules`,
  LOOSE: `loose`,
  WIN: `win`,
  RESTART: `restart`
};

const AnswerType = {
  PAINTING: `painting`,
  PHOTO: `photo`
};

const BackendSettings = {
  GET_QUESTIONS_URL: `https://es.dump.academy/pixel-hunter/questions`,
  UPLOAD_STATISTIC_URL: `http://localhost:3000/stats`,
  APP_ID: 186764
};

export {InitialState, Result, GameSettings, GameType, BackendSettings, AnswerType};
