import AbstractPresenter from "./abstract-presenter";
import HeaderView from "../view/header-view";

export default class HeaderPresenter extends AbstractPresenter {
  constructor(model) {
    super(model);
    this._view = new HeaderView(model);
    this._view.onRestartClick = this.onRestartClick;
    this._element = this._view.element;
  }

  render() {
    const container = document.querySelector(`.central`);
    const firstChild = container.firstChild;
    container.insertBefore(this._element, firstChild);
  }

  onRestartClick() {
    this._model.restartGame();
  }
}
