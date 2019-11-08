'use strict';

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mood = 'happy';
user.hobby = 'javascript';
user.premium = false;

const printValues = function() {
  const userKeys = Object.keys(user);

  for (let key of userKeys) {
    console.log(`${key} : ${user[key]}`);
  }
};

printValues();
