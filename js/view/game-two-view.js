import AbstractView from "./abstract-view";
import {AnswerType} from "../util/config";
import Util from "../util/util";

export default class GameTwoView extends AbstractView {
  constructor(model) {
    super(model);
  }

  get template() {
    return `
<div class="game" data-answer="${this._model.correctAnswer}">
  <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
  <form class="game__content">
    ${Array(this._data.answers.length).fill(``).map((it, i) => (`
    <div class="game__option">
        <img src="${this._data.answers[i].image.url}" alt="Option ${i}">
      <label class="game__answer game__answer--photo">
        <input name="question${i}" type="radio" value="photo" data-value="${AnswerType.PHOTO}">
        <span>Фото</span>
      </label>
      <label class="game__answer game__answer--paint">
        <input name="question${i}" type="radio" value="paint" data-value="${AnswerType.PAINTING}">
        <span>Рисунок</span>
      </label>
    </div>
    `)).join(``)}
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

  onAnswer() {}

  bind(element) {
    const img = element.querySelectorAll(`.game__option img`);

    element.querySelector(`.game__content`).addEventListener(`change`, () => {
      const NEED_SELECTED_PHOTOS = 2;
      const inputs = document.querySelectorAll(`input:checked`);
      if (inputs.length === NEED_SELECTED_PHOTOS) {
        const result = [...inputs].map((it) => it.dataset.value);
        this.onAnswer(result);
      }
    });

    [...img].forEach((it, i) => {
      it.addEventListener(`load`, (evt) => {
        const currentSize = {
          width: img[i].width,
          height: img[i].height
        };
        const sizes = Util.resize(this._data.answers[i].image, currentSize);
        evt.target.width = sizes.width;
        evt.target.height = sizes.height;
      });
    });
  }
}
