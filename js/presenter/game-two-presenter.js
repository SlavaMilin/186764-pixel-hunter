import AbstractPresenter from "./abstract-presenter";
import GameTwo from "../view/game-two";

export default class GameTwoPresenter extends AbstractPresenter {
  constructor(model) {
    super(model);
    this._view = new GameTwo(model);
    this._element = this._view.element;
  }
}
