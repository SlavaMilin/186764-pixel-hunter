import AbstractView from "./abstract-view";
import Util from "../util/util";

export default class GameThreeView extends AbstractView {
  constructor(model) {
    super(model);
  }

  get template() {
    return `
<div class="game"  data-answer="${this._model.correctAnswer}">
  <p class="game__task">${this._model.levelData.question}</p>
  <form class="game__content  game__content--triple">
    ${Array(this._data.answers.length).fill(``).map((it, i) => (`
    <div class="game__option" data-index="${i}">
      <img src="${this._data.answers[i].image.url}" alt="Option ${i}">
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

  bind(element) {
    const form = element.querySelector(`.game__content`);
    const img = element.querySelectorAll(`.game__option img`);

    form.addEventListener(`click`, (evt) => {
      if (evt.target.className === `game__option`) {
        this.onAnswer([Number(evt.target.dataset.index)]);
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

  onAnswer() {}
}
