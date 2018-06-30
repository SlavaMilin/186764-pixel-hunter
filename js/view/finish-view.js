import AbstractView from "./abstract-view";
import {GameResult} from "../util/config";
import Util from "../util/util";

export default class FinishView extends AbstractView {
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
</header>

<div class="result">
  <h1>${this._state.gameResult}</h1>
  
  ${Array(this._model.allStatistic.length).fill(``).map((it, i) => {
    if (this._model.allStatistic[i].result === GameResult.LOOSE) {
      return `
<table class="result__table">
  <tr>
    <td class="result__number">${i + 1}.</td>
    <td>
      ${Util.getStatisticTemplate(this._model.allStatistic[i].statistic)}
    </td>
    <td class="result__total"></td>
    <td class="result__total  result__total--final">fail</td>
  </tr>
</table>
      `;
    }
    const result = Util.analysisStatistic(this._model.allStatistic[i].statistic);
    return `
<table class="result__table">
  <tr>
    <td class="result__number">${i + 1}.</td>
    <td colspan="2">
      ${Util.getStatisticTemplate(this._model.allStatistic[i].statistic)}
    </td>
    <td class="result__points">×&nbsp;100</td>
    <td class="result__total">${result.score}</td>
  </tr>
  ${(() => {
    if (result.fastValue) {
      return `
      <tr>
        <td></td>
        <td class="result__extra">Бонус за скорость:</td>
        <td class="result__extra">${result.fastValue}&nbsp;<span class="stats__result stats__result--fast"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${result.fastBonus}</td>
      </tr>
      `;
    }
    return ``;
  })()}
  <tr>
    <td></td>
    <td class="result__extra">Бонус за жизни:</td>
    <td class="result__extra">${result.liveValue}&nbsp;<span class="stats__result stats__result--alive"></span></td>
    <td class="result__points">×&nbsp;50</td>
    <td class="result__total">${result.liveBonus}</td>
  </tr>
  ${(() => {
    if (result.slowValue) {
      return `
      <tr>
        <td></td>
        <td class="result__extra">Штраф за медлительность:</td>
        <td class="result__extra">${result.slowValue}&nbsp;<span class="stats__result stats__result--slow"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${result.slowPenalty}</td>
      </tr>
      `;
    }
    return ``;
  })()}
  <tr>
    <td colspan="5" class="result__total  result__total--final">${result.totalScore}</td>
  </tr>
</table>
    `;
  }).join(``)}
</div>
<footer class="footer">
  <a href="https://htmlacademy.ru" class="social-link social-link--academy">HTML Academy</a>
  <span class="footer__made-in">Сделано в <a href="https://htmlacademy.ru" class="footer__link">HTML Academy</a> &copy; 2016</span>
  <div class="footer__social-links">
    <a href="https://twitter.com/htmlacademy_ru" class="social-link  social-link--tw">Твиттер</a>
    <a href="https://www.instagram.com/htmlacademy/" class="social-link  social-link--ins">Инстаграм</a>
    <a href="https://www.facebook.com/htmlacademy" class="social-link  social-link--fb">Фэйсбук</a>
    <a href="https://vk.com/htmlacademy" class="social-link  social-link--vk">Вконтакте</a>
  </div>
</footer>
    `;
  }

  onBackClick() {}

  bind(element) {
    element.querySelector(`.back`).addEventListener(`click`, () => {
      this.onBackClick();
    });
  }
}
