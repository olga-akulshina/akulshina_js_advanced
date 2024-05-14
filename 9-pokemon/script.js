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
        const dittoInfo = JSON.parse(this.responseText);
        const englishEntry = dittoInfo.effect_entries.find(entry => entry.language.name === "en");
        console.log(englishEntry ? englishEntry.effect : 'No English entry found');
    })
})

