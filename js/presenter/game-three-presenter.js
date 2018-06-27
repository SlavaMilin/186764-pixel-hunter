import GameThreeView from "../view/game-three-view";
import AbstractPresenter from "./abstract-presenter";
import StatsView from "../view/stats-view";

export default class GameThreePresenter extends AbstractPresenter {
  constructor(model) {
    super(model);
    this._view = new GameThreeView(model);
    this._view.onAnswer = this.onAnswer;
    this._view.statistic = new StatsView(model);
    this._element = this._view.element;
  }

  onAnswer(answer) {
    this._model.saveAnswer(answer);
  }
}
