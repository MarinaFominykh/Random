export class Card {
    constructor(data, cardTemplateSelector) {
        this._name = data.name;
        this._template = document.querySelector(cardTemplateSelector).content.querySelector('.list__nik');
    }

    getCard() {
        this._cardElement = this._template.cloneNode(true);
        this._cardTitle = this._cardElement.querySelector('.list__nik-title');
        this._cardTitle.textContent = this._name;
        return this._cardElement
    };

}