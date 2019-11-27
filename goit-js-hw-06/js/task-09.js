'use strict';

import { default as users } from './users.js';

const getNamesSortedByFriendsCount = users => {
  return users
    .sort((userA, userB) => userA.friends.length - userB.friends.length)
    .map(user => user.name);
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
