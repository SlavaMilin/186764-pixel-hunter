import AbstractView from "./abstract-view";
import {AnswerType} from "../util/config";
import Util from "../util/util";

export default class GameOneView extends AbstractView {
  constructor(model) {
    super(model);
  }

  get template() {
    return `
<div class="game" data-answer="${this._model.correctAnswer}">
  <p class="game__task">Угадай, фото или рисунок?</p>
  <form class="game__content  game__content--wide">
    <div class="game__option">
      <img src="${this._data.answers[0].image.url}" alt="Option 1" width="${this._data.answers[0].image.width}" height="${this._data.answers[0].image.height}">
      <label class="game__answer  game__answer--photo">
        <input name="question1" type="radio" value="photo" data-value="${AnswerType.PHOTO}">
        <span>Фото</span>
      </label>
      <label class="game__answer  game__answer--wide  game__answer--paint">
        <input name="question1" type="radio" value="paint" data-value="${AnswerType.PAINTING}">
        <span>Рисунок</span>
      </label>
    </div>
  </form>
  <div class="stats">
    ${Util.getStatisticTemplate(this._model.statistic)}
  </div>
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

  bind(element) {
    element.querySelector(`.game__content`).addEventListener(`click`, (evt) => {
      if (evt.target.dataset.value) {
        this.onAnswer([evt.target.dataset.value]);
      }
    });
  }

  onAnswer() {}
}
