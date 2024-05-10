'use strict'

const request = new XMLHttpRequest();
request.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto');
request.send();

request.addEventListener('load', function () {
    const dittoAbilities = JSON.parse(this.responseText);
    const dittoUrl = (dittoAbilities.abilities[0].ability.url);

    const request = new XMLHttpRequest();
    request.open('GET', dittoUrl);
    request.send();

    request.addEventListener('load', function () {
        const dittoInfoEn = JSON.parse(this.responseText);
        console.log(dittoInfoEn);
    })
})

