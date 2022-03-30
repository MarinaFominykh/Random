// export class Card {
//     constructor(data, cardTemplateSelector) {
//         this._name = data.name;
//         this._template = document.querySelector(cardTemplateSelector).content.querySelector('.list__nik');
//     }

//     getCard() {
//         this._cardElement = this._template.cloneNode(true);
//         this._cardTitle = this._cardElement.querySelector('.list__nik-title');
//         this._cardTitle.textContent = this._name;
//         return this._cardElement
//     };

// }

export class Card {
    constructor(cardSelector) {
        this._cardSelector = cardSelector;
    }

    _getTemplate() {
        // забираем разметку из HTML и клонируем элемент
        const cardElement = document
            .querySelector(this._cardSelector)
            .content
            .querySelector('.card')
            .cloneNode(true);

        // вернём DOM-элемент карточки
        return cardElement;
    }

    _setEventListeners() {

    }

}