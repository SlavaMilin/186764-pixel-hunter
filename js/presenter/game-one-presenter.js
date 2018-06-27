import AbstractPresenter from "./abstract-presenter";
import GameOneView from "../view/game-one-view";
import StatsView from "../view/stats-view";

export default class GameOnePresenter extends AbstractPresenter {
  constructor(model) {
    super(model);
    this._view = new GameOneView(model);
    this._view.onAnswer = this.onAnswer;
    this._view.statistic = new StatsView(model);
    this._element = this._view.element;
  }

  onAnswer(answer) {
    this._model.saveAnswer(answer);
  }
}
