'use strict';

let date = new Date();
console.log(date);


const helloItem = document.querySelector('.hello-item'),
    todayItem = document.querySelector('.today-item'),
    timeItem = document.querySelector('.time-item'),
    remainItem = document.querySelector('.timeRemaining-item'),    
    hours = date.getHours(),
    dateStop = new Date('01 01 2020').getTime();    

let getweekTime = () => {
    const weekDays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг',  
    'Пятница', 'Суббота'];
    todayItem.textContent = `Сегодня: ${weekDays[date.getDay()]}`;
},

plusZero = (num) => {
    if (num > 0 && num < 10) { 
        return '0' + num;
    } else if (num == 0) {
        return '00';
    } else {
        return num;
    }
},

getTimeNow = () => {
    timeItem.textContent = `Текущее время:
     ${plusZero(date.getHours())}${(date.toLocaleTimeString('en')).slice(date.toLocaleTimeString('en').length - 9)}`;
},


getDayTime = () => {
    if (hours >= 0 && hours < 4) {
        helloItem.textContent = 'Доброй ночи';
    } else if (hours >= 4 && hours < 12) {
        helloItem.textContent = 'Доброе утро';
    } else if (hours >= 12 && hours < 18) {
        helloItem.textContent = 'Добрый день';
    } else if (hours >= 18 && hours < 24) {
        helloItem.textContent = 'Добрый вечер';
    }
},



getTimeRemain = () => {
     let timeRemaining = Math.floor(((dateStop - date.getTime()) / 1000) / 60 / 60/ 24);

    remainItem.textContent = `До нового года осталось ${timeRemaining} дней`;
};

getDayTime();
getweekTime();
getTimeNow();
getTimeRemain();
