import AbstractPresenter from "./abstract-presenter";
import GameTwoView from "../view/game-two-view";

export default class GameTwoPresenter extends AbstractPresenter {
  constructor(model) {
    super(model);
    this._view = new GameTwoView(model);
    this._view.onAnswer = this.onAnswer;
    this._element = this._view.element;
  }

  onAnswer(answer) {
    this._model.saveAnswer(answer);
  }
}
