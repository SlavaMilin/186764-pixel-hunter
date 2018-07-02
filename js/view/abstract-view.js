import Util from "../util/util";

export default class AbstractView {
  constructor(model) {
    if (new.target === AbstractView) {
      throw new Error(`Can't instantiate AbstractView, only concrete one`);
    }
    this.render = Util.render;
    this._model = model;
    this._data = model.levelData;
    this._state = model.state;
  }

  get template() {
    throw new Error(`Template is required`);
  }

  get element() {
    if (this._element) {
      return this._element;
    }
    this._element = this.render(this.template);
    this.bind(this._element);
    return this._element;
  }

  bind() {
    // bind handlers if required
  }

}
