import { Card } from "./Card.js";
export class UserCard extends Card {
    constructor(data, cardSelector) {
        super(cardSelector);
        this._text = data.text;
    }

    generateCard() {
        this._element = super._getTemplate();
        super._setEventListeners();
        this._element.querySelector('.card__user-text').textContent = this._text;
        return this._element;
    }
}