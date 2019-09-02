'use strict';

let money;
let income = 'Channel';
let addExpenses = prompt('Перечислите возможные ' + 
'расходы за рассчитываемый период через запятую', 'Курсы, отдых, приобретения');
let deposit = confirm('Есть ли у вас депозит в банке?');
let mission = 1000000;
let period = 12;

let start = function(){

    do{
        money = prompt('Ваш месячный доход?', 200000);
        console.log('money', money, typeof(money));
    }
    while(isNaN(money) || money === '' || money === null)    
}
start();

let showTypeOf = function(data){
    console.log(data, typeof(data));
}

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);


let expPerMonth1, expPerMonth2;

let getExpensesMonth = function(){
    
    let sum = 0, howMuch;
    
for (let i = 0; i < 2; i++) {
    if (i === 0){
        expPerMonth1 = prompt('Какие обязательные ежемесячные расходы у вас есть?', 
        'Налоги');
    }

    if (i === 1){
        expPerMonth1 = prompt('Какие другие  обязательные ежемесячные расходы у вас есть?', 
        'Еда');
    }

    do {
        howMuch = prompt('Во сколько это обойдется?', 6500);
    }
    while (isNaN(howMuch) || howMuch === '' || howMuch === null);

    sum += +howMuch;
    }
    return sum;
    
}


let expensesAmount = getExpensesMonth();


console.log('Расходы за месяц: ', expensesAmount);


let accumulatedMonth = function getAccumulatedMonth(){    
    return money - expensesAmount;
}
console.log('Накопления за месяц: ', accumulatedMonth());

function getTargetMonth(){
    return Math.floor(mission/accumulatedMonth());
}
if (getTargetMonth()>=0)
    console.log('Ваша цель будет достигнута через ' + getTargetMonth() +
    ' месяцев.');
 else 
    console.log('Цель не будет достигнута');

 
console.log('Цель заработать ' + mission + ' рублей');
console.log('Период ' + period + ' месяцев. За это время вы накопите ' + 
accumulatedMonth()*period +' рублей.');

let budgetDay = Math.floor(accumulatedMonth()/30);

if (budgetDay < 0)
console.log('Что то пошло не так.');

else 
    console.log('Дневной бюджет: ' + budgetDay + 
    ' рублей, остаток от деления: ' + accumulatedMonth()%30);

let getStatusIncome = function(){
    if (budgetDay >= 800) {
        return ('Высокий уровень дохода');
    } else if (budgetDay >= 300 && budgetDay < 800){ 
        return('Средний уровень дохода');
    } else if (budgetDay >= 0 && budgetDay < 300) {
        return('Низкий уровень дохода');
    } else {
        return('Что-то пошло не так');
    }
}

console.log(getStatusIncome());