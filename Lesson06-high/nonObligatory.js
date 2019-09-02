'use strict';

let arr = [];

/*метод foreach в данном случае не подходит,
так как массив изначально пустой*/

for (let i = 0; i < 7; i++) { 
    arr[i] = prompt('Введите число', Math.floor(Math.random()*100000));
    if (arr[i][0] =='4' || arr[i][0] == '2'){
    console.log(arr[i])
};
}

console.log(arr);

//поиск простого числа

let n = 100;

prime:
for (let i = 1; i <= n; i++) { 

  for (let j = 2; j < i; j++) { //1 не проходит и сразу идет в консоль
    if (i % j == 0) continue prime; 
  }

  console.log(i);
}
