import AbstractPresenter from "./abstract-presenter";
import IntroView from "../view/intro";

export default class Intro extends AbstractPresenter {
  constructor(model) {
    super(model);
    this._view = new IntroView(this._model);
    this._template = this._view.template;
  }
}
