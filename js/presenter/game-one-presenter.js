import AbstractPresenter from "./abstract-presenter";
import GameOne from "../view/game-one";

export default class GameOnePresenter extends AbstractPresenter {
  constructor(model) {
    super(model);
    this._view = new GameOne(model);
    this._element = this._view.element;
  }
}
