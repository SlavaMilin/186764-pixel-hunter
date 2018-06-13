class Backend {
  constructor() {
    this._LOAD_SERVER_URL = `http://DESKTOP-QOKNMHD:8000/get`;
    this._checkStatus = (response) => {
      if (response.ok) {
        return response;
      }
      throw new Error(`Произошла ошибка. Статус: ${response.status} ${response.statusText}. Пожалуйста, перезагрузите страницу`);
    };
    this.toJSON = (response) => response.json();
  }

  get loadData() {
    return fetch(this._LOAD_SERVER_URL).then(this._checkStatus).then(this.toJSON);
  }
}

export default Backend;
