import AbstractPresenter from "./abstract-presenter";
import RulesView from "../view/rules-view";

export default class RulesPresenter extends AbstractPresenter {
  constructor(model) {
    super(model);
    this._view = new RulesView();
    this._element = this._view.element;
  }
}
