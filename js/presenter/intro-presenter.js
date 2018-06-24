import AbstractPresenter from "./abstract-presenter";
import IntroView from "../view/intro-view";
import {GameType} from "../util/config";

export default class IntroPresenter extends AbstractPresenter {
  constructor(model) {
    super(model);
    this._view = new IntroView(model);
    this._view.onAnswer = this.onAnswer;
    this._element = this._view.element;
  }

  onAnswer() {
    this._model.notifySubscribers(GameType.RULES, this._model);
  }
}
