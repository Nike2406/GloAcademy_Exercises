'use strict';

let money, 
start = function() {
    do{
        money = prompt('Ваш месячный доход?', 200000);
    }
    while(isNaN(money) || money === '' || money === null);   
    money = +money;
};
start();

let appData = {
    income: {},     
    addIncome: [],  
    expenses: {},
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 10000000,
    period: 12, 
    budget: money,
    budgetDay: 0,
    budgetMonth: 0, 
    expensesMonth: 0,
    asking: function() {

        if (confirm('Есть ли у вас дополнительный заработок?')){
            let itemIncome, cashIncome;
            do {
                itemIncome = prompt('Какой у вас дополнительный заработок?',     
                    'Преподование');
            }
            while (itemIncome === '' || itemIncome === null || !isNaN(itemIncome));

            do {
                cashIncome = prompt('Сколько вы на этом зарабатываете?', 10000);
            }
            while (cashIncome === '' || cashIncome === null || isNaN(cashIncome)); 
            cashIncome = +cashIncome;         
            appData.income[itemIncome] = cashIncome;
        }

        let addExpenses;
        do {
            addExpenses= prompt('Перечислите возможные ' + 
                'расходы за рассчитываемый период через запятую', 
                'Курсы, отдых, приобретения');
            }
            while (addExpenses === '' || addExpenses === null || !isNaN(addExpenses));

        appData.addExpenses = addExpenses.toLowerCase().split(', ');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
        
            //цикл из getExpensesMonth
            
            let amount, expense = 0;

            for (let i = 0; i < 2; i++) {
                do {
                    expense = prompt('Введите обязательную статью расходов', 
                    'Расход' + (i+1));
                }
                while (expense === '' || expense === null || !isNaN(expense));
                do {
                    amount = prompt('Во сколько это обойдется?', 5000);
                }
                    while (isNaN(amount) || amount === '' || amount === null);

                amount = +amount;
                appData.expenses[expense] = amount;
            }
    },

    getExpensesMonth: function() {    
        for (let key in appData.expenses) {
            appData.expensesMonth += appData.expenses[key];
        }
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
    },

    getInfoDeposit: function(){
        if (appData.deposit) {
            do {
                appData.percentDeposit = prompt('Какой годовой процент?', 10);
            }
            while (isNaN(appData.percentDeposit) || appData.percentDeposit === '' || 
            appData.percentDeposit === null);

            appData.percentDeposit = +appData.percentDeposit;
            
            do {
                appData.moneyDeposit = prompt('Какая заложена сумма?', 150000);
            }
            while (isNaN(appData.moneyDeposit) || appData.moneyDeposit === '' || 
            appData.moneyDeposit === null);

            appData.moneyDeposit = +appData.moneyDeposit;
        }
    },

    calcSavedMoney: function() {
        return appData.budgetMonth * appData.period;
    },    
    
    getTargetGoal: function() {
        if (appData.getTargetMonth() >= 0) {
            console.log('Ваша цель будет достигнута через ' + appData.getTargetMonth() +
                ' месяцев.');
         } else {
            console.log('Цель не будет достигнута');
         }
    }
};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getInfoDeposit();

console.log('Расходы за месяц: ', appData.expensesMonth );

console.log(appData.getStatusIncome());

let arrToUp = function() {
    let newAddExpenses = [];

    for (let i = 0; i < appData.addExpenses.length; i++){
        newAddExpenses[i] = appData.addExpenses[i][0].toUpperCase() + appData.addExpenses[i].slice(1).toLowerCase();
    }
        console.log(newAddExpenses.join(', '));
}; 

arrToUp();  

console.log('Наша программа включает в себя данные:');
for (let key in appData) {
    console.log(key + ':' + appData[key]);
}
console.log(appData);