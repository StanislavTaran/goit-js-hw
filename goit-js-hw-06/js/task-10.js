'use strict';

import { default as users } from './users.js';

const getSortedUniqueSkills = users => {
  let skillsList = users.flatMap(user => user.skills).sort();
  const result = new Set(skillsList);
  return [...result];
};

console.log(getSortedUniqueSkills(users));
