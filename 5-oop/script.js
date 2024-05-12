'use strict'

const Character = function (race, name, language) {
    this.race = race;
    this.name = name;
    this.language = language;
}

Character.prototype.speak = function () {
    console.log(`Имя Персонажа: ${this.name}. Язык, на котором он разговаривает: ${this.language}`);
};


function Orc(race, name, language, weapon) {
    Character.call(this, race, name, language);
    this.weapon = weapon;
}

Orc.prototype = Object.create(Character.prototype);
Orc.prototype.constructor = Orc;

Orc.prototype.attack = function () {
    console.log(`${this.name} аттаковал ${this.weapon}!`)
}

function Elf(race, name, language, typeSpell) {
    Character.call(this, race, name, language);
    this.typeSpell = typeSpell;
    this.myAlltypeSpell = [];
}


Elf.prototype = Object.create(Character.prototype);
Elf.prototype.constructor = Elf;

Elf.prototype.saySpell = function () {
    console.log(`${this.name} применил заклинание ${this.typeSpell}`);
}

Elf.prototype.createNewSpell = function (newSpell) {
    if (this.myAlltypeSpell.includes(newSpell)) {
        console.log(`Заклинание для ${this.name} уже было создано!`)
    } else {
        this.myAlltypeSpell.push(newSpell);
        return console.log(`Заклинание для ${this.name} добавлено!`);
    }
}


const orc1 = new Orc('Раса Орка', 'Имя Орка', 'Язык Орка', 'Оружие Орка');
orc1.attack();


const elf1 = new Elf('Раса Эльфа', 'Имя Эльфа', 'Язык Эльфа', 'Заклинание Эльфа');
elf1.createNewSpell('Новое заклинание 1');
elf1.createNewSpell('Новое заклинание 2');
elf1.createNewSpell('Новое заклинание 3');
elf1.createNewSpell('Новое заклинание 2');
console.log(elf1.myAlltypeSpell);
