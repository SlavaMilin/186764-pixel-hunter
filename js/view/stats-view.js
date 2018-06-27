import AbstractView from "./abstract-view";

export default class StatsView extends AbstractView {
  constructor(model) {
    super(model);
  }

  get template() {
    return `
<ul class="stats">
  ${Array(this._model.dataScreenValue).fill(``).map((it, i) => {
    if (this._model.statistic[i]) {
      return `<li class="stats__result stats__result--${this._model.statistic[i]}"></li>`;
    }
    return `<li class="stats__result stats__result--unknown"></li>`;
  }).join(``)}
</ul>
    `;
  }

  bind() {

  }
}
