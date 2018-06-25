import GameThreeView from "../view/game-three-view";
import AbstractPresenter from "./abstract-presenter";

export default class GameThreePresenter extends AbstractPresenter {
  constructor(model) {
    super(model);
    this._view = new GameThreeView(model);
    this._element = this._view.element;
  }
}
