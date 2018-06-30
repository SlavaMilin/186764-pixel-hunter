import AbstractPresenter from "./abstract-presenter";
import ModalConfirmView from "../view/modal-confirm-view";

export default class ModalConfirmPresenter extends AbstractPresenter {
  constructor(model) {
    super(model);
    this._view = new ModalConfirmView(model);
    this._view.onConfirmClick = this.onConfirmClick;
    this._element = this._view.element;
  }

  render() {
    document.querySelector(`body`).appendChild(this._element);
  }

  onConfirmClick() {
    this._model.restartGame();
  }
}
