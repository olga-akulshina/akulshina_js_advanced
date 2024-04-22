'use strict'

const allDice = [
    {
        name: 'd4',
        min: 1,
        max: 4
    },
    {
        name: 'd6',
        min: 1,
        max: 6
    },
    {
        name: 'd8',
        min: 1,
        max: 8
    },
    {
        name: 'd10',
        min: 1,
        max: 10
    },
    {
        name: 'd12',
        min: 1,
        max: 12
    },
    {
        name: 'd16',
        min: 1,
        max: 16
    },
    {
        name: 'd20',
        min: 1,
        max: 20
    }
]



function diceGame(typeDice) {
    const dice = allDice.find(el => typeDice === el.name);
    return Math.floor(Math.random() * (dice.max) + 1);
}

console.log(diceGame('d8')); 