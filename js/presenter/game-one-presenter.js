import AbstractPresenter from "./abstract-presenter";
import GameOneView from "../view/game-one-view";

export default class GameOnePresenter extends AbstractPresenter {
  constructor(model) {
    super(model);
    this._view = new GameOneView(model);
    this._element = this._view.element;
  }
}
