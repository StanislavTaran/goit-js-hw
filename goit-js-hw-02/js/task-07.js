'use strict';

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

function isLoginValid(login) {
  if (login.length < 4 || login.length > 16) {
    return false;
  }
  return true;
}

function isLoginUnique(allLogins, login) {
  for (const name of allLogins) {
    if (login === name) {
      return false;
    }
  }
  return true;
}

function addLogin(allLogins, login) {
  if (isLoginValid(login)) {
    if (isLoginUnique(allLogins, login)) {
      logins.push(login);
      alert('Логин успешно добавлен!');
    } else {
      alert('Такой логин уже используется!');
      return false;
    }
  } else {
    alert('Ошибка! Логин должен быть от 4 до 16 символов');
    return false;
  }
  console.log(logins);
}

addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
