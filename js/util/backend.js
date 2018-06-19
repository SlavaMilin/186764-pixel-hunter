import Configuration from "./configuration";

export default class Backend {
  constructor() {
    this.configuration = new Configuration();
  }
  toJSON(response) {
    response.json();
  }

  checkStatus(response) {
    if (response.ok) {
      return response;
    }
    throw new Error(`Произошла ошибка. Статус: ${response.status} ${response.statusText}. Пожалуйста, перезагрузите страницу`);
  }

  static loadData() {
    return fetch(this.configuration.BackendSettings.GET_QUESTIONS_URL).then(this.checkStatus).then(this.toJSON);
  }

  static uploadStatistic(data, userName) {
    const requestSettings = {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': `application/json`
      },
      method: `POST`
    };
    return fetch(`${this.configuration.BackendSettings}/stats/:${this.constructor.BackendSettings.APP_ID}-:${userName}`, requestSettings).then(this.checkStatus);
  }
}
