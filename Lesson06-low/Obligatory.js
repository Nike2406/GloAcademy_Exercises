'use strict';

let money, 
start = function() {
    do{
        money = +prompt('Ваш месячный доход?', 200000);
    }
    while(isNaN(money) || money === '' || money === null);   
    money = +money;
};
start();

let appData = {
    income: {},     //в программе не используется
    addIncome: [],  //в программе не используется
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 10000000,
    period: 12, 
    budget: money,
    budgetDay: 0,
    budgetMonth: 0, 
    expensesMonth: 0,
    asking: function() {
        let addExpenses = prompt('Перечислите возможные ' + 
                'расходы за рассчитываемый период через запятую', 
                'Курсы, отдых, приобретения');
            appData.addExpenses = addExpenses.toLowerCase().split(', ');
            appData.deposit = confirm('Есть ли у вас депозит в банке?');
        
            //цикл из getExpensesMonth
            
            let amount, expense, sum = 0;

            for (let i = 0; i < 2; i++) {
                expense = prompt('Введите обязательную статью расходов', 'Расход' + (i+1));
                do {
                  amount = +prompt('Во сколько это обойдется?', 5000);
                }
                  while (isNaN(amount) || amount === '' || amount === null);
                  appData.expenses[expense] = +amount;
                  sum += amount;
              }
          },
    getExpensesMonth: function() {    
        // let sum = 0;
        for (let key in appData.expenses) {
            appData.expensesMonth += appData.expenses[key];
        }
        // return sum;
    },
    getBudget: function getBudget() {    
        appData.budgetMonth = money - appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);    
    },

    getTargetMonth: function getTargetMonth() {
        return Math.floor(appData.mission / appData.budgetMonth);
    },

    getStatusIncome: function() {
        if (appData.budgetDay >= 800) {
            return ('Высокий уровень дохода');
        } else if (appData.budgetDay >= 300 && appData.budgetDay < 800) { 
            return('Средний уровень дохода');
        } else if (appData.budgetDay >= 0 && appData.budgetDay < 300) {
            return('Низкий уровень дохода');
        } else {
            return('Что-то пошло не так');
        }
    }
};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();

console.log('Расходы за месяц: ', appData.expensesMonth );

if (appData.getTargetMonth() >= 0) {
    console.log('Ваша цель будет достигнута через ' + appData.getTargetMonth() +
        ' месяцев.');
 } else {
    console.log('Цель не будет достигнута');
 }

console.log(appData.getStatusIncome());

console.log('Наша программа включает в себя данные:');
for (let key in appData) {
    console.log(key + ':' + appData[key]);
}
