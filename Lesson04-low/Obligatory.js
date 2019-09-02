'use strict';

let money = +prompt('Ваш месячный доход?', 200000),         
    income = 'Channel',
    addExpenses = prompt('Перечислите возможные '+          
        'расходы за рассчитываемый период через запятую', 
        'Курсы, отдых, приобретения'),
    deposit = confirm('Есть ли у вас депозит в банке?'),    
    mission = 1000000,
    period = 12,

showTypeOf = function(data){
    console.log(data, typeof(data));
}

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

let expPerMonth1 = prompt('Какие обязательные ежемесячные расходы у вас есть?', 
        'Налоги'),
    amountPerMonth1 = +prompt('Во сколько это обойдется?', 6500),

    expPerMonth2 = prompt('Какие обязательные ежемесячные расходы у вас есть?',
        'Еда'),
    amountPerMonth2 = +prompt('Во сколько это обойдется?', 5000);

function getExpensesMonth(){
    return amountPerMonth1 + amountPerMonth2;
}
console.log('Расходы за месяц: ', getExpensesMonth());

let accumulatedMonth = function getAccumulatedMonth(){    
    return money - getExpensesMonth();
}
console.log('Накопления за месяц: ', accumulatedMonth());

function getTargetMonth(){
    return Math.floor(mission / accumulatedMonth());
}

console.log('Ваша цель будет достигнута через ' + getTargetMonth() +
    ' месяцев.');

 
console.log('Цель заработать ' + mission + ' рублей');
console.log('Период ' + period + ' месяцев. За это время вы накопите ' + 
    accumulatedMonth() * period + ' рублей.');

let budgetDay = Math.floor(accumulatedMonth() / 30);
console.log('Дневной бюджет: ' + budgetDay + 
    ' рублей, остаток от деления: ' + accumulatedMonth() % 30);

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