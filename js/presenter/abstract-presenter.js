export default class AbstractPresenter {
  constructor(model) {
    this._model = model;
    this.root = {};
  }

  render() {
    const container = document.querySelector(`.central`);
    container.innerHTML = ``;
    container.appendChild(this.root);
  }
}
