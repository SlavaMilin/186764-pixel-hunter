import Configuration from "./configuration";

class Backend {
  constructor() {
    this.settings = new Configuration();
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
    return fetch(this.settings.BackendSettings.getQuestionsUrl).then(this.checkStatus).then(this.toJSON);
  }
}

export default Backend;
