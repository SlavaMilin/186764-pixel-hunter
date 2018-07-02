import AbstractView from "./abstract-view";

export default class ModalConfirmView extends AbstractView {
  constructor(model) {
    super(model);
  }

  get template() {
    return `
<section class="modal-confirm modal-confirm__wrap">
  <form class="modal-confirm__inner">
    <button class="modal-confirm__close" type="button">Закрыть</button>
    <h2 class="modal-confirm__title">Подтверждение</h2>
    <p class="modal-confirm__text">Вы уверены что хотите начать игру заново?</p>
    <div class="modal-confirm__btn-wrap">
      <button class="modal-confirm__btn modal-confirm__btn--accept">Ок</button>
      <button class="modal-confirm__btn modal-confirm__btn--cancel">Отмена</button>
    </div>
  </form>
</section>
    `;
  }

  bind(element) {
    const removeModal = () => {
      document.querySelector(`.modal-confirm`).remove();
    };

    element.querySelector(`.modal-confirm__btn--cancel`).addEventListener(`click`, (evt) => {
      evt.preventDefault();
      removeModal();
    });
    element.querySelector(`.modal-confirm__close`).addEventListener(`click`, (evt) => {
      evt.preventDefault();
      removeModal();
    });
    element.querySelector(`.modal-confirm__btn--accept`).addEventListener(`click`, (evt) => {
      evt.preventDefault();
      this.onConfirmClick();
      removeModal();
    });
  }

  onAnswer() {}
  onConfirmClick() {}
}
