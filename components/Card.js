export class Card {
  constructor(elements, cardSelector, handleCardClick) {
    this._name = elements.name;
    this._link = elements.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElem = document
        .querySelector(this._cardSelector)
        .content
        .querySelector('.element')
        .cloneNode(true);

    return cardElem;
}

//Генерация карточки
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector('.element__image').alt = this._name;
    this._element.querySelector('.element__image').src = this._link;
    this._element.querySelector('.element__caption').textContent = this._name;

    return this._element;
  }

//Удаление карточки
_removeElem() {
  this._element.remove();
}

//Лайк
_toggleLike() {
  this._element.querySelector('.element__button-like').classList.toggle('element__button-like_active');
}

//Навешиваем слушатели
_setEventListeners() {

  this._element.querySelector('.element__button-delete').addEventListener('click', () => {
    this._removeElem();
      });

  this._element.querySelector('.element__button-like').addEventListener('click', () => {
    this._toggleLike();
      });

  this._element.querySelector('.element__image').addEventListener('click', () => {
    this._handleCardClick(this._link, this._name);
      });
  }
}
