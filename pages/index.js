import { Popup } from "../components/Popup.js";
import { Section } from "../components/Section.js";
import{FormValidator} from '../components/FormValidator.js'
import {
       randomButton,
       buttonAddUser,
    resetButton,
    popupAddUserSelector,
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
     addUserForm,
    config
    } from '../utils/constans.js';


    //Функции

//Рандом
function getRandomList(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}
//Функция для сабмита формы
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

//Функция для очистки полей
function resetData() {
    input1.textContent = ''
    input2.textContent = ''
    input3.textContent = ''
    input4.textContent = ''
    input5.textContent = ''
    input6.textContent = ''
    input7.textContent = ''
    input8.textContent = ''
    input9.textContent = ''
    input10.textContent = ''
}

function handlerRandomButtonClick() {
    const inputList = Array.from(document.querySelectorAll('.list__nik-title'));
         const inputListValues = Array.from(
          [inputList[0].textContent,
              inputList[1].textContent,
              inputList[2].textContent,
              inputList[3].textContent,
              inputList[4].textContent,
              inputList[5].textContent,
              inputList[6].textContent,
              inputList[7].textContent,
              inputList[8].textContent,
              inputList[9].textContent
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
};

//Создание экземпляров классов и вызов методов

const popupAddUser = new Popup(popupAddUserSelector);
popupAddUser.setEventListeners();

//Валидация формы

const addUserFormValidator = new FormValidator(config, addUserForm);
addUserFormValidator.enableValidation();
resetButton.addEventListener('click', resetData);

//Обработчики

buttonAddUser.addEventListener('click', () => {
  addUserFormValidator.toggleSubmitButton()
    popupAddUser.open()
})

addUserForm.addEventListener('submit', formSubmitHandler);
randomButton.addEventListener('click', handlerRandomButtonClick);





