import AbstractPresenter from "./abstract-presenter";
import ModalErrorView from "../view/modal-error-view";

export default class ModalErrorPresenter extends AbstractPresenter {
  constructor(model) {
    super(model);
    this._view = new ModalErrorView(model);
    this._element = this._view.element;
  }

  errorMessage() {}

  render() {
    document.querySelector(`body`).appendChild(this._element);
  }
}
