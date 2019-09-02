'use strict';

let lang = 'ru';

if (lang == 'ru') {
    console.log('Понедельник, вторник, среда, четверг, ' 
    + 'пятница, суббота, воскресенье.');
} else if (lang == 'en') {
    console.log('Monday, tuesday, wednesday, thursday, ' +
    'friday, saturday, sunday.');
}

switch (lang){
    case 'ru':
         console.log('Понедельник, вторник, среда, четверг, ' 
         + 'пятница, суббота, воскресенье.');
         break;
    case 'en': 
        console.log('Monday, tuesday, wednesday, thursday, ' +
        'friday, saturday, sunday.');
        break;
}


let arr = {
    'ru': ['Понедельник, вторник, среда, четверг, ' + 
    'пятница, суббота, воскресенье.'], 

    'en': ['Monday, tuesday, wednesday, ' +
    'thursday, friday, saturday, sunday.']
};

console.log(arr[lang]);

let namePerson = prompt('Введите имя'),

    personStatus = (namePerson == 'Артем') ? 'директор':
    (namePerson == 'Максим') ? 'преподователь': 'студент';

console.log('Здравствуйте ' + personStatus + ' ' + namePerson + '.'); 

