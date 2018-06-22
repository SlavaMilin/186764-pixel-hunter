export default class AbstractPresenter {
  constructor(model) {
    this._model = model;
    this._element = {};
  }
  render() {
    const container = document.querySelector(`.central`);
    container.innerHTML = ``;
    container.appendChild(this._element);
  }
}
