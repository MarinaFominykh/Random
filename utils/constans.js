// const arr = ['Игрок 1', 'Игрок 2', 'Игрок 3', 'Игрок 4', 'Игрок 5', 'Игрок 6', 'Игрок 7', 'Игрок 8', 'Игрок 9', 'Игрок 10']
// const arr = [ {
//     text: 'Игрок 1',
//     type: 'user'
// },
// {
//     text: 'Игрок 2',
//     type: 'user'
// },
// {
//     text: 'Игрок 3',
//     type: 'user'
// }, {
//     text: 'Игрок 4',
//     type: 'user'
// }, {
//     text: 'Игрок 5',
//     type: 'user'
// }, {
//     text: 'Игрок 6',
//     type: 'user'
// },{
//     text: 'Игрок 7',
//     type: 'user'
// }, {
//     text: 'Игрок 8',
//     type: 'user'
// }, {
//     text: 'Игрок 9',
//     type: 'user'
// }, {
//     text: 'Игрок 10',
//     type: 'user'
// } 
//    ]
const arr = [{
        text: 'Игрок 1',
        isUser: true
    },
    {
        text: 'Игрок 2',
        isUser: true
    },
    {
        text: 'Игрок 3',
        isUser: true
    }, {
        text: 'Игрок 4',
        isUser: true
    }, {
        text: 'Игрок 5',
        isUser: true
    }, {
        text: 'Игрок 6',
        isUser: true
    }, {
        text: 'Игрок 7',
        isUser: true
    }, {
        text: 'Игрок 8',
        isUser: true
    }, {
        text: 'Игрок 9',
        isUser: true
    }, {
        text: 'Игрок 10',
        isUser: true
    },
    {
        text: 'Мирный'

    },
    {
        text: 'Мирный'

    },
    {
        text: 'Мирный'

    }, {
        text: 'Мирный'

    }, {
        text: 'Мирный'

    }, {
        text: 'Мирный'

    }, {
        text: 'Мафия'

    }, {
        text: 'Мафия'

    }, {
        text: 'Дон'

    }, {
        text: 'Шериф'

    }

]

const arrUser = [{
        text: 'Игрок 1',
    },
    {
        text: 'Игрок 2',
    },
    {
        text: 'Игрок 3',
    }, {
        text: 'Игрок 4',

    }, {
        text: 'Игрок 5',

    }, {
        text: 'Игрок 6',

    }, {
        text: 'Игрок 7',

    }, {
        text: 'Игрок 8',

    }, {
        text: 'Игрок 9',

    }, {
        text: 'Игрок 10',

    }
]

const arrRole = [{
        text: 'Мирный'

    },
    {
        text: 'Мирный'

    },
    {
        text: 'Мирный'

    }, {
        text: 'Мирный'

    }, {
        text: 'Мирный'

    }, {
        text: 'Мирный'

    }, {
        text: 'Мафия'

    }, {
        text: 'Мафия'

    }, {
        text: 'Дон'

    }, {
        text: 'Шериф'

    }
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
const addUserForm = document.querySelector('.popup__container');
const input1 = document.querySelector('.namber-1');
const input2 = document.querySelector('.namber-2');
const input3 = document.querySelector('.namber-3');
const input4 = document.querySelector('.namber-4');
const input5 = document.querySelector('.namber-5');
const input6 = document.querySelector('.namber-6');
const input7 = document.querySelector('.namber-7');
const input8 = document.querySelector('.namber-8');
const input9 = document.querySelector('.namber-9');
const input10 = document.querySelector('.namber-10');
const formInput1 = document.querySelector('.popup__input-1');
const formInput2 = document.querySelector('.popup__input-2');
const formInput3 = document.querySelector('.popup__input-3');
const formInput4 = document.querySelector('.popup__input-4');
const formInput5 = document.querySelector('.popup__input-5');
const formInput6 = document.querySelector('.popup__input-6');
const formInput7 = document.querySelector('.popup__input-7');
const formInput8 = document.querySelector('.popup__input-8');
const formInput9 = document.querySelector('.popup__input-9');
const formInput10 = document.querySelector('.popup__input-10');
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
    arr,
    randomUserButton,
    randomRoleButton,
    cardTemplateSelector,
    cardUserListSection,
    cardRoleListSection,
    popupAddUser,
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
    addUserForm,
    config,
    containerSelector,
    userConteiner,
    roleConteiner,
    arrUser,
    arrRole
}