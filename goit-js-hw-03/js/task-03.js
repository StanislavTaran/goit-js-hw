'use strict';

const findBestEmployee = function(employees) {
  const namesEmployees = Object.keys(employees);
  let bestResult = 0;
  let bestEmployee;
  for (let name of namesEmployees) {
    if (bestResult < employees[name]) {
      bestResult = employees[name];
      bestEmployee = name;
    }
  }
  return `Name: ${bestEmployee} , result ${bestResult}`;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
