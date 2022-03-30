export class SubmitForm {
    constructor({ formSelector, handleFormSubmit }) {
        this._formSelector = formSelector;
        this._handleFormSubmit = handleFormSubmit;
    }


    _getTemplate() {
        const formElement = document
            .querySelector(this._formSelector)
            .content
            .querySelector('.form')
            .cloneNode(true);

        return formElement;
    }


    _getInputValues() {
        // достаём все элементы полей
        this._inputList = this._element.querySelectorAll('.form__input');
        // создаём пустой объект
        this._formValues = {};
        // добавляем в этот объект значения всех полей

        this._inputList.forEach(input => this._formValues[input.name] = input.value);

        // возвращаем объект значений
        return this._formValues;
    }

    _setEventListeners() {
        this._element.addEventListener('submit', (evt) => {
            evt.preventDefault();

            this._handleFormSubmit(this._getInputValues());
            this._element.reset();
        })
    }

    generateForm() {
        this._element = this._getTemplate();
        this._setEventListeners();
        return this._element;
    }

}