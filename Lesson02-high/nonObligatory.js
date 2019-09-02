'use strict';

let num = 266219,
    arrNum = String(num).split(''),                 // исправил ошибки
    multNum = arrNum.reduce(function(sum, current){ //переделал с reduce
        return sum * current;
    });

console.log(multNum);
console.log((String(multNum ** 3)).substring(0, 2));