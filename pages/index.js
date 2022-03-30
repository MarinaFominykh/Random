import { Popup } from "../components/Popup.js";
import { Section } from "../components/Section.js";
import { FormValidator } from '../components/FormValidator.js';
import { SubmitForm } from '../components/SubmitForm.js';
import { Card } from '../components/Card.js';
import { UserCard } from "../components/UserCard.js";
import { RoleCard } from "../components/RoleCard.js";
import {
    randomUserButton,
    randomRoleButton,
    buttonAddUser,
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
    config,
    cardTemplateSelector,
    arr,
    containerSelector,
    cardUserListSection,
    cardRoleListSection,
    userConteiner,
    roleConteiner,
    arrUser,
    arrRole
} from '../utils/constans.js';


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
    const inputsUserList = Array.from(document.querySelectorAll('.card__user-text'))
    inputsUserList[0].textContent = formInput1.value;
    inputsUserList[1].textContent = formInput2.value;
    inputsUserList[2].textContent = formInput3.value;
    inputsUserList[3].textContent = formInput4.value;
    inputsUserList[4].textContent = formInput5.value;
    inputsUserList[5].textContent = formInput6.value;
    inputsUserList[6].textContent = formInput7.value;
    inputsUserList[7].textContent = formInput8.value;
    inputsUserList[8].textContent = formInput9.value;
    inputsUserList[9].textContent = formInput10.value;
    popupAddUser.close();
}

//Функция для очистки полей
function resetData() {
    const inputsUserList = Array.from(document.querySelectorAll('.card__user-text'))
    for (let i=0; i<=inputsUserList.length-1; i=i+1){
        inputsUserList[i].textContent = ''
      }
   
}

//Создание экземпляров классов и вызов методов

const popupAddUser = new Popup(popupAddUserSelector);
popupAddUser.setEventListeners();

//Валидация формы
const addUserFormValidator = new FormValidator(config, addUserForm);
addUserFormValidator.enableValidation();


//Обработчики
buttonAddUser.addEventListener('click', () => {
      addUserFormValidator.toggleSubmitButton()
    popupAddUser.open()
})

addUserForm.addEventListener('submit', formSubmitHandler);


//Разные массивы для ролей и для игроков. Элементы можно вставлять в разные контейнеры:
const cardsUserList = new Section({
        data: arrUser,
        renderer: (cardItem) => {
            const card = new UserCard(cardItem, '.card-template_type_user');
            const cardElement = card.generateCard();
            cardsUserList.addItem(cardElement);
        }
    },
    cardUserListSection
);

cardsUserList.renderItems();

const cardsRoleList = new Section({
        data: arrRole,
        renderer: (cardItem) => {
            const card = new RoleCard(cardItem, '.card-template_type_role');
            const cardElement = card.generateCard();
            cardsRoleList.addItem(cardElement);
        }
    },
    cardRoleListSection
);

cardsRoleList.renderItems();


// создаём экземпляр формы для добавления игрока:
const formUser = new SubmitForm({
    formSelector: '.form-template_type_user',
    handleFormSubmit: (formData) => {
        const card = new UserCard(formData, '.card-template_type_user');
        const cardElement = card.generateCard();
        cardsUserList.addItem(cardElement);
    }
});

// генерируем разметку формы
const formUserElement = formUser.generateForm();
//   // инициализируем класс, ответственный
//   // за добавление формы на страницу
const formUserRenderer = new Section({ data: [] }, '.list__container_type_form-nik');
//   // добавляем форму на страницу
formUserRenderer.addItem(formUserElement);


// создаём экземпляр формы для добавления роли:
const formRole = new SubmitForm({
    formSelector: '.form-template_type_role',
    handleFormSubmit: (formData) => {
        const card = new RoleCard(formData, '.card-template_type_role');
        const cardElement = card.generateCard();
        cardsRoleList.addItem(cardElement);
    }
});

const formRoleElement = formRole.generateForm();
const formCardRenderer = new Section({ data: [] }, '.list__container_type_form-role');
formCardRenderer.addItem(formRoleElement);


//Перемешиваем массив значения полей
function handlerRandomUserButtonClick() {
    const nameList = Array.from(document.querySelectorAll('.card__user-text'))
    .map(res => res.innerText);
    // let nameListLet = Array.from(document.querySelectorAll('.card__user-text'))
    // .map(res => res.innerText);
    let nameListRandom = getRandomList(nameList)
    const inputsUserList = Array.from(document.querySelectorAll('.card__user-text'))
    for (let i=0; i<=nameListRandom.length-1; i=i+1){
        inputsUserList[i].textContent = nameListRandom[i]
      }
    
};

function handlerRandomRoleButtonClick() {
    const roleList = Array.from(document.querySelectorAll('.card__role-text'))
    .map(res => res.innerText);
    // let nameListLet = Array.from(document.querySelectorAll('.card__user-text'))
    // .map(res => res.innerText);
    let roleListRandom = getRandomList(roleList)
    const inputsRoleList = Array.from(document.querySelectorAll('.card__role-text'))
    for (let i=0; i<=roleListRandom.length-1; i=i+1){
        inputsRoleList[i].textContent = roleListRandom[i]
      }
    
};

//Обработчик на кнопку "Перемешать"
randomUserButton.addEventListener('click', handlerRandomUserButtonClick);
randomRoleButton.addEventListener('click', handlerRandomRoleButtonClick);