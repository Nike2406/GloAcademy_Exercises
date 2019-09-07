'use strict';

let start = document.getElementById('start'),
    btnPlus = document.getElementsByTagName('button'),
    incomePlus = btnPlus[0],
    expensesPlus = btnPlus[1],
    depositeCheck = document.querySelector('#deposit-check'), 
    additionalIncomeItem = document.querySelectorAll('.additional_income-item'),

    budgetDayValue = document.querySelector('.budget_day-value'),
    budgetMonthValue = document.querySelector('.budget_month-value'),
    expensesMonthValue = document.querySelector('.expenses_month-value'),
    additionalIncomeValue = document.querySelector('.additional_income-value'),
    additionalExpensesValue = document.querySelector('.additional_expenses-value'),
    incomePeriodValue = document.querySelector('.income_period-value'),
    targetMonthValue = document.querySelector('.target_month-value'),

    salaryAmount = document.querySelector('.salary-amount'),  
    incomeTitle = document.querySelector('.income-title'),
    expensesTitle = document.querySelector('.expenses-title'),
    expensesItems = document.querySelectorAll('.expenses-items'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    targetAmount = document.querySelector('.target-amount'),
    periodSelet = document.querySelector('.period-select'),
    incomeItem = document.querySelectorAll('.income-itemss');

   
    let appData = {
        income: {},    
        incomeMonth: 0, 
        addIncome: [],  
        expenses: {},
        addExpenses: [],
        deposit: false,
        budget: 0,
        budgetDay: 0,
        budgetMonth: 0, 
        expensesMonth: 0,

        start: function() {
             
            if (salaryAmount.value === '') {
                alert('Ошибка! Поле "Мясячный доход" должно быть заполнено.');
                return;
            }

            appData.budget = +salaryAmount.value;

            appData.getExpenses();
            appData.getIncome();
            appData.getExpensesMonth();
            appData.getTargetGoal();   
            appData.getAddExpenses();
            appData.getAddIncome();
            appData.getBudget();

            appData.showResult(); 
        },

        showResult: function(){
            budgetMonthValue.value = appData.budgetMonth;
            budgetDayValue.value = appData.budgetDay;
            expensesMonthValue.value = appData.expensesMonth;
            additionalExpensesValue.value = appData.addExpenses.join (', ');
            additionalIncomeValue.value = appData.addIncome.join (', ');
            targetMonthValue.value = Math.ceil(appData.getTargetMonth());
            incomePeriodValue.value = appData.calcPeriod();
        },

        addExpensesBlock: function() {            
            let cloneExpensesItem = expensesItems[0].cloneNode(true);
            expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
            expensesItems = document.querySelectorAll('.expenses-items');
            if (expensesItems.length === 3) {
                expensesPlus.style.display = 'none';
            }
        },

        getExpenses: function() {
            expensesItems.forEach(function(item) {
                let itemExpenses = item.querySelector('.expenses-title').value,
                    cashExpenses = item.querySelector('.expenses-amount').value;
                if (itemExpenses !== '' && cashExpenses !== '') {
                    appData.expenses[itemExpenses] = +cashExpenses;
                }
            });
        },

        getAddExpenses: function() {
            let addExpenses = additionalExpensesItem.value.split(',');
            addExpenses.forEach(function(item) {
                item = item.trim();
                if (item !== '') {
                    appData.addExpenses.push(item);
                }
            });
        },

        getIncome: function() {
            if (confirm('Есть ли у вас дополнительный доход?')) {
                let itemIncome = prompt('Какой?', 'Преподование'),
                    cashIncome = prompt('Сколько в месяц вы зарабатываете на нем?',
                         1000);
                appData.income[itemIncome] = +cashIncome;
            }

            for (let key in appData.income) {
                appData.incomeMonth += +appData.income[key];
            }
        },

        getAddIncome: function() {
            additionalIncomeItem.forEach(function(item) {
                let itemValue = item.value.trim();
                    if (itemValue !== '') {
                        appData.addIncome.push(itemValue);
                    }
            });
        },

        getExpensesMonth: function() {    
            for (let key in appData.expenses) {
                appData.expensesMonth += +appData.expenses[key];
            }
        },

        getBudget: function() {    
            appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
            appData.budgetDay = Math.floor(appData.budgetMonth / 30); 
        },
    
        getTargetMonth: function() {
            return targetAmount.value / appData.budgetMonth;
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
    
        getTargetGoal: function() {
            if (appData.getTargetMonth() >= 0) {
                console.log('Ваша цель будет достигнута через ' + appData.getTargetMonth() +
                    ' месяцев.');
             } else {
                console.log('Цель не будет достигнута');
             }
        },
        
        calcPeriod: function() {
            return appData.budgetMonth * periodSelet.value;
        }
    };

    //обработчик события "рассчитать"

    
    expensesPlus.addEventListener('click', appData.addExpensesBlock);
    start.addEventListener('click', appData.start);

       
    