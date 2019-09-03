'use strict';

let money, 
    start = function(){
    let money;

    do{
        money = prompt('Ваш месячный доход?', 200000);
    }
    while(isNaN(money) || money === '' || money === null);    
};

money = +start(); 

let appData = {
    income: {}, 
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 10000000,
    period: 12, 
    budget: money,
    budgetDay: 0,
    budgetMonth: 0, 
    expensesMonth: 0,
    asking: function(){
        let addExpenses = prompt('Перечислите возможные ' + 
                'расходы за рассчитываемый период через запятую', 
                'Курсы, отдых, приобретения');
            appData.addExpenses = addExpenses.toLowerCase().split(', ');
            appData.deposit = confirm('Есть ли у вас депозит в банке?');
    }
            
};
appData.asking();

//перенос цикла
let expPerMonth1, expPerMonth2;

appData.getExpensesMonth = function(){
    
    let sum = 0, 
        howMuchExp;
    
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
            howMuchExp = prompt('Во сколько это обойдется?', 6500);
        }
        while (isNaN(howMuchExp) || howMuchExp === '' || howMuchExp === null);

        sum += +howMuchExp;
    }
    return sum;    
};


let expensesAmount = appData.getExpensesMonth();

console.log('Расходы за месяц: ', expensesAmount);

//замена accumulatedMonth на appData.getAccumulatedMonth

appData.getAccumulatedMonth = function getAccumulatedMonth(){    
    return money - expensesAmount;
};
console.log('Накопления за месяц: ', appData.getAccumulatedMonth());

//getTargetMonth

appData.getTargetMonth = function getTargetMonth(){
    return Math.floor(appData.mission / appData.getAccumulatedMonth());
};
if (appData.getTargetMonth() >= 0){
    console.log('Ваша цель будет достигнута через ' + appData.getTargetMonth() +
        ' месяцев.');
 } else {
    console.log('Цель не будет достигнута');
 }


let budgetDay = Math.floor(appData.getAccumulatedMonth() / 30);


appData.getStatusIncome = function(){
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

console.log(appData.getStatusIncome());