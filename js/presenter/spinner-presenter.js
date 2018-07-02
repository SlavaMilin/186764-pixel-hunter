import AbstractPresenter from "./abstract-presenter";
import SpinnerView from "../view/spinner-view";

export default class SpinnerPresenter extends AbstractPresenter {
  constructor(model) {
    super(model);
    this._view = new SpinnerView(model);
    this._element = this._view.element;
  }

  render() {
    document.querySelector(`body`).appendChild(this._element);
  }

  remove() {
    document.querySelector(`.spinner`).remove();
  }
}
