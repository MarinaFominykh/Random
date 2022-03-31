const arrUser = [
    {text: 'Игрок 1'},
    {text: 'Игрок 2'},
    {text: 'Игрок 3'}, 
    {text: 'Игрок 4'}, 
    {text: 'Игрок 5'}, 
    {text: 'Игрок 6'}, 
    {text: 'Игрок 7'}, 
    {text: 'Игрок 8'}, 
    {text: 'Игрок 9'}, 
    {text: 'Игрок 10'}
]

const arrRole = [
    {text: 'Мирный'},
    {text: 'Мирный'},
    {text: 'Мирный'}, 
    {text: 'Мирный'}, 
    {text: 'Мирный'}, 
    {text: 'Мирный'}, 
    {text: 'Дон мафии'}, 
    {text: 'Мафия'}, 
    {text: 'Мафия'}, 
    {text: 'Шериф'}
]

const containerSelector = '.list';
const randomUserButton = document.querySelector('.button__random-user');
const randomRoleButton = document.querySelector('.button__random-role');
const cardTemplateSelector = '.card-template';
const userConteiner = document.querySelector('.list__niks');
const roleConteiner = document.querySelector('.list__roles');
const cardUserListSection = '.list__niks';
const cardRoleListSection = '.list__roles';
const popupAddUserSelector = '.popup';
const popupAddUser = document.querySelector('.popup');
const buttonAddUser = document.querySelector('.button__add-user');
const buttonClosePopupAddUser = document.querySelector('.popup__close');
const submitButton = document.querySelector('.popup__save');
const buttonReset = document.querySelector('.button__reset')
const addUserForm = document.querySelector('.popup__container');
const config = {
    formSelector: '.popup__container',
    inputSelector: '.popup__input',
    buttonSelector: '.popup__save',
    inputErrorClass: 'popup__input_type_error',
    errorActiveClass: 'popup__error_active',
    errorSelector: '.popup__error',
    inactiveButtonClass: 'popup__save_disabled'
};

export {
    randomUserButton,
    randomRoleButton,
    cardTemplateSelector,
    cardUserListSection,
    cardRoleListSection,
    popupAddUser,
    buttonAddUser,
    popupAddUserSelector,
    buttonClosePopupAddUser,
    submitButton,
    addUserForm,
    config,
    containerSelector,
    userConteiner,
    roleConteiner,
    arrUser,
    arrRole,
    buttonReset
    }