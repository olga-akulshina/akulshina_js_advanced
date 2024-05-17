'use strict'

async function race(arrPromises) {
    if (arrPromises.length === 0) {
        return Promise.reject(new Error('Array is empty'));
    }

    return new Promise((resolve, reject) => {
        for (const promise of arrPromises) {
            Promise.resolve(promise)
                .then(resolve)
                .catch(reject);
        }
    })
}

const promise1 = new Promise((resolve) => setTimeout(resolve, 500, 'Первый промис'));
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'Второй промис'));
const promise3 = new Promise((_, reject) => setTimeout(reject, 200, 'Третий промис'));

const array = [promise1, promise2, promise3];

race(array)
    .then(value => console.log(`Resolved with: ${value}`))
    .catch((error) => console.log(`Rejected with: ${error}`));
