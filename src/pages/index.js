import { Popup } from "../components/Popup.js";
import { Section } from "../components/Section.js";
import {
    arr,
    container,
    button,
    cardTemplateSelector,
    cardListSection,
    buttonAddUser,
    popupAddUserSelector,
    buttonClosePopupAddUser,
    input1,
    input2,
    input3,
    input4,
    input5,
    input6,
    input7,
    input8,
    input9,
    input10,
    formInput1,
    formInput2,
    formInput3,
    formInput4,
    formInput5,
    formInput6,
    formInput7,
    formInput8,
    formInput9,
    formInput10,
    submitButton,
    addUserForm
} from '../utils/constans.js';

function getRandomList(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}
const randomArr = getRandomList(arr);

const popupAddUser = new Popup(popupAddUserSelector);

//Слушатель на кнопку открытия попапа
buttonAddUser.addEventListener('click', () => {
    popupAddUser.open()
})


//Вызов слушателей для экзепляра класса Popup
popupAddUser.setEventListeners();


function formSubmitHandler(evt) {
    evt.preventDefault();

    input1.textContent = formInput1.value;
    input2.textContent = formInput2.value;
    input3.textContent = formInput3.value;
    input4.textContent = formInput4.value;
    input5.textContent = formInput5.value;
    input6.textContent = formInput6.value;
    input7.textContent = formInput7.value;
    input8.textContent = formInput8.value;
    input9.textContent = formInput9.value;
    input10.textContent = formInput10.value;

    popupAddUser.close();
}

addUserForm.addEventListener('submit', formSubmitHandler);

button.addEventListener('click', () => {
    const inputList = Array.from(addUserForm.querySelectorAll('.popup__input'));
    const inputListValues = Array.from(
        [inputList[0].value,
            inputList[1].value,
            inputList[2].value,
            inputList[3].value,
            inputList[4].value,
            inputList[5].value,
            inputList[6].value,
            inputList[7].value,
            inputList[8].value,
            inputList[9].value
        ])
    const newArr = getRandomList(inputListValues);
    input1.textContent = newArr[0]
    input2.textContent = newArr[1]
    input3.textContent = newArr[2]
    input4.textContent = newArr[3]
    input5.textContent = newArr[4]
    input6.textContent = newArr[5]
    input7.textContent = newArr[6]
    input8.textContent = newArr[7]
    input9.textContent = newArr[8]
    input10.textContent = newArr[9]
})