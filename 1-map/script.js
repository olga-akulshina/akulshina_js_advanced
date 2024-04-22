'use strict'

const objArr = [
    { id: 1, name: 'Вася' },
    { id: 2, name: 'Петя' },
    { id: 1, name: 'Вася' }
];

const mapObj = new Map();

objArr.forEach(obj => {
    const hash = JSON.stringify(obj);
    if (!mapObj.has(hash)) {
        mapObj.set(hash, obj);
    }
});

const uniqueObj = new Set(mapObj.values());

console.log(uniqueObj);