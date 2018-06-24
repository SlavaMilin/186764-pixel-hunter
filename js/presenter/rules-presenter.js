import AbstractPresenter from "./abstract-presenter";
import Rules from "../view/rules";

export default class RulesPresenter extends AbstractPresenter {
  constructor(model) {
    super(model);
    this._view = new Rules();
    this._element = this._view.element;
  }
}
