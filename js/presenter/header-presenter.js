import AbstractPresenter from "./abstract-presenter";
import HeaderView from "../view/header-view";
import ModalConfirmPresenter from "./modal-confirm-presenter";

export default class HeaderPresenter extends AbstractPresenter {
  constructor(model) {
    super(model);
    this._view = new HeaderView(model);
    this.onRestartClick = () => {
      this._modalConfirm = new ModalConfirmPresenter(model);
      this._modalConfirm.render();
    };
    this._view.onRestartClick = this.onRestartClick;
    this._element = this._view.element;
  }

  render() {
    const container = document.querySelector(`.central`);
    const firstChild = container.firstChild;
    container.insertBefore(this._element, firstChild);
  }

  onConfirmClick() {
    this._model.restartGame();
  }
}
