import AbstractView from "./abstract-view";

export default class ModalError extends AbstractView {
  constructor(state) {
    super();
    this._state = state;
  }

  get template() {
    return `
<section class="modal-error modal-error__wrap">
  <div class="modal-error__inner">
    <h2 class="modal-error__title">Произошла ошибка!</h2>
    <p class="modal-error__text">Статус: 404. Пожалуйста, перезагрузите страницу.</p>
  </div>
</section>
    `;
  }

  onAnswer() {}

  bind() {

  }
}
