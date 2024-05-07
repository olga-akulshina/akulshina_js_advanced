'use strict'

class Character {
    constructor(race, name, language) {
        this.race = race;
        this.name = name;
        this.language = language;
    }

    speak() {
        console.log(`Имя Персонажа: ${this.name}. Язык, на котором он разговаривает: ${this.language}`);
    };
}

class Orc extends Character {
    constructor(race, name, language, weapon) {
        super(race, name, language);
        this.weapon = weapon;
    }

    attack() {
        console.log(`${this.name} аттаковал ${this.weapon}!`)
    }
}

class Elf extends Character {
    constructor(race, name, language, typeSpell) {
        super(race, name, language);
        this.typeSpell = typeSpell;
    }
    myAlltypeSpell = [];

    speak() {
        console.log(`Имя Персонажа: ${this.name}. Принадлежит к типу: ${this.race}. Язык, на котором он разговаривает: ${this.language}`);
    };

    saySpell() {
        console.log(`${this.name} применил заклинание ${this.typeSpell}`);
    }

    createNewSpell(newSpell) {
        if (this.myAlltypeSpell.includes(newSpell)) {
            console.log(`Заклинание для ${this.name} уже было создано!`)
        } else {
            this.myAlltypeSpell.push(newSpell);
            return console.log(`Заклинание для ${this.name} добавлено!`);
        }
    }
}

const orc1 = new Orc('Раса Орка', 'Имя Орка', 'Язык Орка', 'Оружие Орка');
const elf1 = new Elf('Раса Эльфа', 'Имя Эльфа', 'Язык Эльфа', 'Заклинание Эльфа');

orc1.speak();
elf1.speak();

orc1.attack();

elf1.createNewSpell('Новое заклинание 1');
elf1.createNewSpell('Новое заклинание 2');
elf1.createNewSpell('Новое заклинание 3');
elf1.createNewSpell('Новое заклинание 2');
console.log(elf1.myAlltypeSpell);