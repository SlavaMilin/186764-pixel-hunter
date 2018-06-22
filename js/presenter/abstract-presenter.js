export default class AbstractPresenter {
  constructor(model) {
    this._model = model;
  }

  render() {
    const container = document.querySelector(`.central`);
    container.innerHTML = ``;
    container.appendChild(this._template);
  }
}
