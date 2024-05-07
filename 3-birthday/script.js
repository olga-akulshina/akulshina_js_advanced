'use strict'

function ageValid(birthday) {
    const currentDate = new Date();
    const yearsAgo14 = currentDate.getFullYear() - 14;
    const date14YearsAgo = new Date(yearsAgo14, currentDate.getMonth(), currentDate.getDate());

    const birthdayDate = Date.parse(birthday);

    return (date14YearsAgo.getTime() >= birthdayDate) ? true : false;
}

console.log(ageValid('2022-01-01'));
console.log(ageValid('2014-12-31'));
console.log(ageValid('2009-05-11'));
console.log(ageValid('2010-04-22'));