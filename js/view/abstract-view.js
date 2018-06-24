import Util from "../util/util";

export default class AbstractView {
  constructor() {
    if (new.target === AbstractView) {
      throw new Error(`Can't instantiate AbstractView, only concrete one`);
    }
    this.render = Util.render;
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
