'use strict'

function getCurrentPosition() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            position => resolve(position),
            error => reject(error)
        );
    });
}

getCurrentPosition()
    .then(position => {
        console.log(position.coords.latitude, position.coords.longitude);
    })
    .catch(error => {
        console.error(`Can't get current position`, error);
    });
