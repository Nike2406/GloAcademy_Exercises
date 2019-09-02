'use strict';

let money = +prompt('Ваш месячный доход?', 200000),         
    income = 'Channel',
    addExpenses = prompt('Перечислите возможные '+          
        'расходы за рассчитываемый период через запятую', 
        'Курсы, отдых, приобретения'),
    deposit = confirm('Есть ли у вас депозит в банке?'),    
    mission = 1000000,
    period = 12,

showTypeOf = function(data){    //2.1
    console.log(data, typeof(data));
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

let expPerMonth1 = prompt('Какие обязательные ежемесячные расходы у вас есть?', 
        'Налоги'),
    amountPerMonth1 = +prompt('Во сколько это обойдется?', 6500),

    expPerMonth2 = prompt('Какие обязательные ежемесячные расходы у вас есть?',
        'Еда'),
    amountPerMonth2 = +prompt('Во сколько это обойдется?', 5000);

function getExpensesMonth(){        //1.1
    return amountPerMonth1 + amountPerMonth2;
}

let accumulatedMonth = function getAccumulatedMonth(){    //1.2
    return money - getExpensesMonth();
};
console.log('Накопления за месяц: ', accumulatedMonth());

function getTargetMonth(){      //1.3
    return Math.floor(mission / accumulatedMonth());
}

console.log('Ваша цель будет достигнута через ' + getTargetMonth() +
    ' месяцев.'); //2.3

let budgetDay = Math.floor(accumulatedMonth() / 30);

let getStatusIncome = function(){ //2.1
    if (budgetDay >= 800) {
        return ('Высокий уровень дохода');
    } else if (budgetDay >= 300 && budgetDay < 800){ 
        return('Средний уровень дохода');
    } else if (budgetDay >= 0 && budgetDay < 300) {
        return('Низкий уровень дохода');
    } else {
        return('Что-то пошло не так');
    }
};

console.log(getStatusIncome());