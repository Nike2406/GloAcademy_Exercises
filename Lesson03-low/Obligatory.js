'use strict';

let money = +prompt('Ваш месячный доход?', 200000),         //1
    income = 'Channel',
    addExpenses = prompt('Перечислите возможные '+          //2
        'расходы за рассчитываемый период через запятую', 
        'Курсы, отдых, приобретения'),
    deposit = confirm('Есть ли у вас депозит в банке?'),    //3
    mission = 1000000,
    period = 12,

    expPerMonth1 = prompt('Какие обязательные ежемесячные расходы у вас есть?', //5
        'Налоги'),
    amountPerMonth1 = +prompt('Во сколько это обойдется?', 6500),

    expPerMonth2 = prompt('Какие обязательные ежемесячные расходы у вас есть?',
        'Еда'),
    amountPerMonth2 = +prompt('Во сколько это обойдется?', 5000),

    budgetMonth = money - amountPerMonth1 - amountPerMonth2;    //6
console.log('Ваш ежемесячный бюджет равен ' + budgetMonth +
' рублей.');

console.log('Ваша цель будет достигнута через ' + Math.ceil(mission / budgetMonth) +
 ' месяцев.');      //7

console.log(typeof(money), typeof(income), typeof(deposit)); //4
console.log(income.length);
console.log('Период ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей');

console.log(addExpenses.toLowerCase().split(', '));

let budgetDay = Math.floor(budgetMonth / 30);   //8
console.log('Дневной бюджет: ' + budgetDay + 
' рублей, остаток от деления: ' + budgetMonth % 30);

if (budgetDay >= 800) {         //9
    console.log('Высокий уровень дохода');
}else if (budgetDay >= 300 && budgetDay < 800) {
    console.log('Средний уровень дохода');
}else if (budgetDay >= 0 && budgetDay < 300) {
    console.log('Низкий уровень дохода');
}else {
    console.log('Что-то пошло не так');
}
