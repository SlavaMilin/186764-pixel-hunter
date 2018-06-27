import AbstractView from "./abstract-view";

export default class GameThreeView extends AbstractView {
  constructor(model) {
    super(model);
  }

  get template() {
    return `
<div class="game"  data-answer="${this._model.correctAnswer}">
  <p class="game__task">Найдите рисунок среди изображений</p>
  <form class="game__content  game__content--triple">
    ${Array(this._data.answers.length).fill(``).map((it, i) => (`
    <div class="game__option" data-index="${i}">
      <img src="${this._data.answers[i].image.url}" alt="Option ${i}" width="${this._data.answers[i].image.width}" height="${this._data.answers[i].image.height}">
    </div>
    `)).join(``)}
  </form>
  <div class="stats">
    <ul class="stats">
      <li class="stats__result stats__result--wrong"></li>
      <li class="stats__result stats__result--slow"></li>
      <li class="stats__result stats__result--fast"></li>
      <li class="stats__result stats__result--correct"></li>
      <li class="stats__result stats__result--wrong"></li>
      <li class="stats__result stats__result--unknown"></li>
      <li class="stats__result stats__result--slow"></li>
      <li class="stats__result stats__result--unknown"></li>
      <li class="stats__result stats__result--fast"></li>
      <li class="stats__result stats__result--unknown"></li>
    </ul>
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
    const form = element.querySelector(`.game__content`);
    form.addEventListener(`click`, (evt) => {
      if (evt.target.className === `game__option`) {
        this.onAnswer([Number(evt.target.dataset.index)]);
      }
    });
  }
}
