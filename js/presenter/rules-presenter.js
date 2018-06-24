import AbstractPresenter from "./abstract-presenter";
import RulesView from "../view/rules-view";

export default class RulesPresenter extends AbstractPresenter {
  constructor(model) {
    super(model);
    this._view = new RulesView(model);
    this._view.onAnswer = this.onAnswer;
    this._element = this._view.element;
  }

  onAnswer(name) {
    this._model.name = name;
    this._model.startGame();
  }
}
