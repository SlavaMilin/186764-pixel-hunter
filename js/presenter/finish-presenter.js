import AbstractPresenter from "./abstract-presenter";
import FinishView from "../view/finish-view";

export default class FinishPresenter extends AbstractPresenter {
  constructor(model) {
    super(model);
    this._view = new FinishView(model);
    this._view.onBackClick = this.onBackClick;
    this._element = this._view.element;
  }

  onBackClick() {
    this._model.restartGame();
  }
}
