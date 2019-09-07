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
    incomeAmount = document.querySelector('.income-amount'),
    expensesTitle = document.querySelector('.expenses-title'),
    expensesItems = document.querySelectorAll('.expenses-items'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    targetAmount = document.querySelector('.target-amount'),
    periodSelet = document.querySelector('.period-select');

   
    let appData = {
        income: {},     
        addIncome: [],  
        expenses: {},
        addExpenses: [],
        deposit: false,
        mission: 10000000,
        period: 12, 
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
            appData.getBudget();
            appData.getExpensesMonth();
            appData.getTargetGoal();   
            appData.showResult(); 
        },

        showResult: function(){
            budgetMonthValue.value = appData.budgetMonth;
            budgetDayValue.value = appData.budgetDay;
            expensesMonthValue.value = appData.ExpensesMonth;
            // console.log(expensesMonthValue.value);
            // console.log(appData.ExpensesMonth);
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
                let itemExpenses = item.querySelector('.expenses-title').value;
                let cashExpenses = item.querySelector('.expenses-amount').value;
                if (itemExpenses !== '' && cashExpenses !== '') {
                    appData.expenses[itemExpenses] = +cashExpenses;
                }
            });
        },

        // asking: function() {
        //     let addExpenses = prompt('Перечислите возможные ' + 
        //             'расходы за рассчитываемый период через запятую', 
        //             'Курсы, отдых, приобретения');
        //         appData.addExpenses = addExpenses.toLowerCase().split(', ');
        //         appData.deposit = confirm('Есть ли у вас депозит в банке?');
            
        // },

        getExpensesMonth: function() {    
            for (let key in appData.expenses) {
                appData.expensesMonth += +appData.expenses[key];
            }
        },

        getBudget: function() {    
            appData.budgetMonth = appData.budget - appData.expensesMonth;
            appData.budgetDay = Math.floor(appData.budgetMonth / 30);   
        },
    
        getTargetMonth: function() {
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
    
        getTargetGoal: function() {
            if (appData.getTargetMonth() >= 0) {
                console.log('Ваша цель будет достигнута через ' + appData.getTargetMonth() +
                    ' месяцев.');
             } else {
                console.log('Цель не будет достигнута');
             }
        }
    };

    //обработчик события "рассчитать"

    expensesPlus.addEventListener('click', appData.addExpensesBlock);
    start.addEventListener('click', appData.start);

       
    