import AbstractPresenter from "./abstract-presenter";
import GameTwoView from "../view/game-two-view";
import StatsView from "../view/stats-view";

export default class GameTwoPresenter extends AbstractPresenter {
  constructor(model) {
    super(model);
    this._view = new GameTwoView(model);
    this._view.onAnswer = this.onAnswer;
    this._view.statistic = new StatsView(model);
    this._element = this._view.element;
  }

  onAnswer(answer) {
    this._model.saveAnswer(answer);
  }
}
