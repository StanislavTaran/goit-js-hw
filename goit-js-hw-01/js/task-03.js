"use strict"

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

let password  = prompt("Please enter your password", '');
    if (password == null){
      message = "Отменено пользователем!"
    }
    else if (password == ADMIN_PASSWORD){
        message = "Добро пожаловать!"
    }
    else{
        message = "Доступ запрещен, неверный пароль!"
    }

alert(message);