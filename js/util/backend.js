import {BackendSettings} from "./config";

export default class Backend {
  toJSON(response) {
    return response.json();
  }

  checkStatus(response) {
    if (response.ok) {
      return response;
    }
    throw new Error(`Произошла ошибка. Статус: ${response.status} ${response.statusText}. Пожалуйста, перезагрузите страницу`);
  }

  loadData() {
    return fetch(BackendSettings.GET_QUESTIONS_URL).then(this.checkStatus).then(this.toJSON);
  }

  downloadStatistic(userName) {
    return fetch(`${BackendSettings.UPLOAD_STATISTIC_URL}:${BackendSettings.APP_ID}-:${userName}`).then(this.checkStatus).then(this.toJSON);
  }

  uploadStatistic(data) {
    const requestSettings = {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': `application/json`
      },
      method: `POST`
    };
    return fetch(`${BackendSettings.UPLOAD_STATISTIC_URL}:${BackendSettings.APP_ID}-:${data.name}`, requestSettings).then(this.checkStatus);
  }
}
