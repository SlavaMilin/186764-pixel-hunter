import GameThree from "../view/game-three";
import AbstractPresenter from "./abstract-presenter";

export default class GameThreePresenter extends AbstractPresenter {
  constructor(model) {
    super(model);
    this._view = new GameThree(model);
    this._element = this._view.element;
  }
}
