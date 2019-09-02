'use strict';

let money, 
    howMuchMoney,
    start = function(){

    do{
        howMuchMoney = prompt('Ваш месячный доход?', 200000);
        console.log('howMuchMoney', howMuchMoney, typeof(howMuchMoney));
    }
    while(isNaN(howMuchMoney) || howMuchMoney === '' || howMuchMoney === null)    
}
start();

money = +howMuchMoney; 
console.log('money', money, typeof(money));

let appData = {
    income: {}, 
    addIncome: [],
    expenses: {
        expPerMonth1:howMuchExp,
        expPerMonth1:howMuchExp
    },
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

            for (let i = 0; i < 2; i++) {
                if (i === 0){
                    expPerMonth1 = prompt('Какие обязательные ежемесячные расходы у вас есть?', 
                    'Налоги');
                }
            
                if (i === 1){
                    expPerMonth1 = prompt('Какие другие  обязательные ежемесячные расходы у вас есть?', 
                    'Еда');
                }
            
                let howMuchExp;
                do {
                    howMuchExp = prompt('Во сколько это обойдется?', 6500);
                }
                while (isNaN(howMuchExp) || howMuchExp === '' || howMuchExp === null);
    }
}

appData.asking();      //запросы


//перенос цикла
let expPerMonth1, expPerMonth2;

appData.getExpensesMonth = function(){
    
    let sum = 0, howMuchExp;
    


    sum += +howMuchExp;
    }
    return sum;
    
}


let expensesAmount = appData.getExpensesMonth();

console.log('Расходы за месяц: ', expensesAmount);

//замена accumulatedMonth на appData.getAccumulatedMonth

appData.getAccumulatedMonth = function getAccumulatedMonth(){    
    return money - expensesAmount;
}
console.log('Накопления за месяц: ', appData.getAccumulatedMonth());

//getTargetMonth

appData.getTargetMonth = function getTargetMonth(){
    return Math.floor(appData.mission/appData.getAccumulatedMonth());
}
if (appData.getTargetMonth()>=0)
    console.log('Ваша цель будет достигнута через ' + appData.getTargetMonth() +
    ' месяцев.');
 else 
    console.log('Цель не будет достигнута');

 
console.log('Цель заработать ' + appData.mission + ' рублей');
console.log('Период ' + appData.period + ' месяцев. За это время вы накопите ' + 
appData.getAccumulatedMonth()*appData.period +' рублей.');

let budgetDay = Math.floor(appData.getAccumulatedMonth()/30);

if (budgetDay < 0)
console.log('Что то пошло не так.');

else 
    console.log('Дневной бюджет: ' + budgetDay + 
    ' рублей, остаток от деления: ' + appData.getAccumulatedMonth()%30);

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
}

console.log(appData.getStatusIncome());