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
    expensesAmount = document.querySelector('.expenses-amount'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    targetAmount = document.querySelector('.target-amount'),
    periodSelet = document.querySelector('.period-select');
    
console.log('start: ', start);
console.log('incomePlus: ', incomePlus);
console.log('expensesPlus: ', expensesPlus);
console.log('depositeCheck: ', depositeCheck);
console.log('additionalIncomeItem: ', additionalIncomeItem);
console.log('budgetDayValue: ', budgetDayValue);
console.log('expensesMonthValue: ', expensesMonthValue);
console.log('additionalIncomeValue: ', additionalIncomeValue);
console.log('additionalExpensesValue: ', additionalExpensesValue);
console.log('incomePeriodValue: ', incomePeriodValue);
console.log('targetMonthValue: ', targetMonthValue);
console.log('salaryAmount: ', salaryAmount);
console.log('incomeTitle: ', incomeTitle);
console.log('incomeAmount: ', incomeAmount);
console.log('expensesTitle: ', expensesTitle);
console.log('expensesAmount: ', expensesAmount);
console.log('additionalExpensesItem: ', additionalExpensesItem);
console.log('targetAmount: ', targetAmount);
console.log('periodSelet: ', periodSelet);
console.log('budgetMonthValue: ', budgetMonthValue);