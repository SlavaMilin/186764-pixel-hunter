import AbstractPresenter from "./abstract-presenter";
import GreetingView from "../view/greeting-view";
import {GameType} from "../util/config";

export default class GreetingsPresenter extends AbstractPresenter {
  constructor(model) {
    super(model);
    this._view = new GreetingView(model);
    this._view.onAnswer = () => {
      this.onAnswer();
    };
    this._element = this._view.element;
  }

  onAnswer() {
    this._model.notifySubscribers(GameType.RULES, this._model);
  }
}
