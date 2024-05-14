'use strict'

function getInfoPokemon(url, errorMessage) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`${errorMessage} ${response.status}`);
            }
            return response.json()
        })
}

getInfoPokemon('https://pokeapi.co/api/v2/pokemon/ditto', 'Can not get info of Pokemon')
    .then(data => getInfoPokemon(data.abilities[0].ability.url, `Can not get info about pokemon's abilities`))
    .then(data => {
        const englishEntry = data.effect_entries.find(entry => entry.language.name === "en");
        console.log(englishEntry ? englishEntry.effect : 'No English entry found');
    })
    .catch(error => {
        const el = document.querySelector('.info_Pokemon');
        el.innerHTML = error.message;
    });




