import {BackendSettings} from "./config";

export default class Backend {
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
    return fetch(BackendSettings.GET_QUESTIONS_URL).then(this.checkStatus).then(this.toJSON);
  }

  static uploadStatistic(data, userName) {
    const requestSettings = {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': `application/json`
      },
      method: `POST`
    };
    return fetch(`${BackendSettings}/stats/:${BackendSettings.APP_ID}-:${userName}`, requestSettings).then(this.checkStatus);
  }
}
