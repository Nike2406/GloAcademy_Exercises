'use strict';

do{
    let newLi = document.querySelectorAll('.newLi');
    let newEl = document.createElement('li');
    newEl.textContent = prompt('Введите новый пункт', 5);
    newLi[0].appendChild(newEl);
} while(confirm('One more?'));