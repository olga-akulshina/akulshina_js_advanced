'use strict'

function getTimeUntilNewYear() {
    const now = new Date();
    const currentYear = now.getFullYear();
    const nextYear = currentYear + 1;
    const newYearDate = new Date(nextYear, 0, 1);
    const timeUntilNewYear = newYearDate.getTime() - now.getTime();

    let days = Math.floor(timeUntilNewYear / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeUntilNewYear / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeUntilNewYear / (1000 * 60)) % 60);
    const seconds = Math.floor((timeUntilNewYear / 1000) % 60);

    let months = 0;

    for (let i = now.getMonth(); i < 12; i++) {
        const daysInMonth = new Date(currentYear, i + 1, 0).getDate();
        if (days >= daysInMonth) {
            days -= daysInMonth;
            months++;
        } else {
            break;
        }
    }
    return {
        months: months,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
    };
}

function displayTimeUntilNewYear() {
    const time = getTimeUntilNewYear();

    if (time.months === 1) {
        document.getElementById('months').innerText = time.months + ' месяц';
    }
    if (time.months >= 2 && time.months <= 4) {
        document.getElementById('months').innerText = time.months + ' месяца';
    }
    if (time.months === 0 || time.months >= 5 && time.months <= 12) {
        document.getElementById('months').innerText = time.months + ' месяцев';
    }



    if (time.days === 1 || time.days === 21 || time.days === 31) {
        document.getElementById('days').innerText = time.days + ' день';
    }
    if (time.days >= 2 && time.days <= 4 || time.days >= 22 && time.days <= 24) {
        document.getElementById('days').innerText = time.days + ' дня';
    }
    if (time.days === 0 || time.days >= 5 && time.days <= 20 || time.days >= 25 && time.days <= 30) {
        document.getElementById('days').innerText = time.days + ' дней';
    }



    if (time.hours === 1 || time.hours === 21) {
        document.getElementById('hours').innerText = time.hours + ' час';
    }
    if (time.hours >= 2 && time.hours <= 4 || time.hours >= 22 && time.hours <= 23) {
        document.getElementById('hours').innerText = time.hours + ' часа';
    }
    if (time.hours === 0 || time.hours >= 5 && time.hours <= 20) {
        document.getElementById('hours').innerText = time.hours + ' часов';
    }



    if (time.minutes === 1 || time.minutes === 21 || time.minutes === 31 || time.minutes === 41 || time.minutes === 51) {
        document.getElementById('minutes').innerText = time.minutes + ' минута';
    }
    if (time.minutes >= 2 && time.minutes <= 4 || time.minutes >= 22 && time.minutes <= 24 || time.minutes >= 32 && time.minutes <= 34 || time.minutes >= 42 && time.minutes <= 44 || time.minutes >= 52 && time.minutes <= 54) {
        document.getElementById('minutes').innerText = time.minutes + ' минуты';
    }
    if (time.minutes === 0 || time.minutes >= 5 && time.minutes <= 20 || time.minutes >= 25 && time.minutes <= 30 || time.minutes >= 35 && time.minutes <= 40 || time.minutes >= 55 && time.minutes <= 60) {
        document.getElementById('minutes').innerText = time.minutes + ' минут';
    }



    if (time.seconds === 1 || time.seconds === 21 || time.seconds === 31 || time.seconds === 41 || time.seconds === 51) {
        document.getElementById('seconds').innerText = time.seconds + ' секунда';
    }
    if (time.seconds >= 2 && time.seconds <= 4 || time.seconds >= 22 && time.seconds <= 24 || time.seconds >= 32 && time.seconds <= 34 || time.seconds >= 42 && time.seconds <= 44 || time.seconds >= 52 && time.seconds <= 54) {
        document.getElementById('seconds').innerText = time.seconds + ' секунды';
    }
    if (time.seconds === 0 || time.seconds >= 5 && time.seconds <= 20 || time.seconds >= 25 && time.seconds <= 30 || time.seconds >= 35 && time.seconds <= 40 || time.seconds >= 55 && time.seconds <= 60) {
        document.getElementById('seconds').innerText = time.seconds + ' секунд';
    }

}

setInterval(displayTimeUntilNewYear, 1000);

displayTimeUntilNewYear();
