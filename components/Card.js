export class Card {
    constructor(cardSelector) {
        this._cardSelector = cardSelector;
    }

    _getTemplate() {
        // забираем разметку из HTML и клонируем элемент
        this._cardElement = document
            .querySelector(this._cardSelector)
            .content
            .querySelector('.card')
            .cloneNode(true);
            this._deleteButton = this._cardElement.querySelector('.card__delete-button');

        // вернём DOM-элемент карточки
        return this._cardElement;
    }
    _handleDeleteCard = () => {
        this._cardElement.remove();
        // this._cardElement = null;
    }

    _setEventListeners() {
        this._deleteButton.addEventListener('click', this._handleDeleteCard);
    }

}