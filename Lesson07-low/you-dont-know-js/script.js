'use strict';

//Восстанавливаем порядок книг

let books = document.querySelectorAll('.books'),
    book = document.querySelectorAll('.book');

books[0].insertBefore(book[1], book[0]);
books[0].insertBefore(book[4], book[2]);
books[0].insertBefore(book[2], book[6]);

//Заменяем картинку

let backImg = document.querySelector('body');
backImg.setAttribute('style', 'background-image: url(./image/you-dont-know-js.jpg)');

// Убираем рекламу

document.querySelector('.adv').remove();

//Меняем порядок глав в книге 2

let volLiBook2 = document.querySelectorAll('.book:nth-child(2) li'),
    volUlBook2 = document.querySelectorAll('.book:nth-child(2) ul');

volUlBook2[0].insertBefore(volLiBook2[6], volLiBook2[4]);
volUlBook2[0].insertBefore(volLiBook2[8], volLiBook2[4]);
volUlBook2[0].insertBefore(volLiBook2[2], volLiBook2[10]);

//Меняем порядок глав в книге 5

let volLiBook5 = document.querySelectorAll('.book:nth-child(5) li'),
    volUlBook5 = document.querySelectorAll('.book:nth-child(5) ul');

volUlBook5[0].insertBefore(volLiBook5[9], volLiBook5[2]);
volUlBook5[0].insertBefore(volLiBook5[3], volLiBook5[2]);
volUlBook5[0].insertBefore(volLiBook5[5], volLiBook5[8]);
volUlBook5[0].insertBefore(volLiBook5[4], volLiBook5[2]);

//Добавляем главу в 6й книге

let volLiBook6 = document.querySelectorAll('.book:nth-child(6) li'),
    volUlBook6 = document.querySelectorAll('.book:nth-child(6) ul'),
    newVol6 = document.createElement('li');
    
newVol6.textContent = 'Глава 8: За пределами ES6';
volUlBook6[0].appendChild(newVol6);
volUlBook6[0].insertBefore(volLiBook6[9], null);

//исправляем опечатку

let changeVol3 = document.getElementsByTagName('a');
changeVol3[2].innerHTML = 'Книга 3. this и Прототипы Объектов';