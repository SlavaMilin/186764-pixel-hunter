import AbstractView from "./abstract-view";
import {InitialState} from "../util/config";

export default class HeaderView extends AbstractView {
  constructor(model) {
    super(model);
  }

  get template() {
    return `
<header class="header">
  <div class="header__back">
    <button class="back">
      <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
      <img src="img/logo_small.svg" width="101" height="44">
    </button>
  </div>
  <h1 class="game__timer">${this._state.time}</h1>
  <div class="game__lives">
    ${Array(InitialState.lives - this._state.lives).fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`).join(``)}
    ${Array(this._state.lives).fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`).join(``)}
  </div>
</header>
    `;
  }

  onRestartClick() {}

  bind(element) {
    const btn = element.querySelector(`.back`);
    btn.addEventListener(`click`, () => {
      this.onRestartClick();
    });
  }
}
