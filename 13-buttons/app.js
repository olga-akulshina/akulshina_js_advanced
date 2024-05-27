'use strict'

const conteiner = document.querySelector('.conteiner');
const counterClick = document.querySelector('.counter');
let buttonPresed = null;

function findButton(event) {

    for (const el of [...conteiner.children]) {
        if (el === event.target) {
            if (buttonPresed) {
                buttonPresed.classList.remove('pink');
                buttonPresed.textContent = 'Нажми меня';
            }
            el.classList.add('pink');
            el.textContent = 'Нажата';
            let counter = parseInt(counterClick.textContent);
            counter++;
            counterClick.textContent = counter;
            buttonPresed = el;
        }
    }
}

conteiner.addEventListener('click', findButton);
