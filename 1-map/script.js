'use strict'

const objArr = [
    { id: 1, name: 'Вася' },
    { id: 2, name: 'Петя' },
    { id: 1, name: 'Вася' }
];

const uniqueObj = new Set();

const uniqueArr = objArr.filter(object => {
    if (uniqueObj.has(object.id)) {
        return false;
    } else {
        uniqueObj.add(object.id);
        return true;
    }
})

console.log(uniqueArr);