'use strict';

let start = document.getElementById('start'),
    reset = document.getElementById('cancel'),
    btnPlus = document.getElementsByTagName('button'),
    incomePlus = btnPlus[0],
    expensesPlus = btnPlus[1],
    depositeCheck = document.querySelector('#deposit-check'),
    additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
    btnTarget, btnPlusTarget,

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
    incomeItems = document.querySelectorAll('.income-items'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    targetAmount = document.querySelector('.target-amount'),
    periodSelect = document.querySelector('.period-select'), //periodRange
    periodAmount = document.querySelector('.period-amount'), //periodRangeOut

    depositBank = document.querySelector('.deposit-bank'),
    depositAmount = document.querySelector('.deposit-amount'),
    depositPercent = document.querySelector('.deposit-percent');

const AppData = function() {
    this.income = {};
    this.incomeMonth = 0;
    this.addIncome = [];
    this.expenses = {};
    this.addExpenses = [];
    this.budget = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.expensesMonth = 0;
    this.deposit = false;   //нет в программе
    this.percentDeposit = 0;//нет в программе
    this.moneyDeposit = 0;  //нет в программе
};

AppData.prototype.blockStart = function () {
    if (salaryAmount.value !== '') {
        start.removeAttribute('disabled');
    }
};

AppData.prototype.start = function () {
    if (salaryAmount.value === '') {
        start.setAttribute('disabled', 'true');
        return;
    }

    this.budget = +salaryAmount.value;

    this.getExpenses();
    this.getIncome();
    this.getExpensesMonth();
    this.getIncomeMonth();
    this.getTargetGoal();
    this.getAddExpenses();
    this.getAddIncome();
    this.getInfoDeposit();
    this.getBudget();

    this.showResult();
    this.blockInput();
};

AppData.prototype.showResult = function () {
    budgetMonthValue.value = this.budgetMonth;
    budgetDayValue.value = this.budgetDay;
    expensesMonthValue.value = this.expensesMonth;
    additionalExpensesValue.value = this.addExpenses.join(', ');
    additionalIncomeValue.value = this.addIncome.join(', ');
    targetMonthValue.value = Math.ceil(this.getTargetMonth());
    incomePeriodValue.value = this.calcPeriod();

    periodSelect.addEventListener('input', () => { //
        incomePeriodValue.value = this.calcPeriod();
    });
};

AppData.prototype.addBlock = function (btnTarget, btnPlusTarget) {
    let cloneItem = btnPlusTarget[0].cloneNode(true);
    cloneItem.querySelectorAll('input').forEach(function (item) { // убираем value
        item.value = '';
    });
    btnPlusTarget[0].parentNode.insertBefore(cloneItem, btnTarget);
    btnPlusTarget = document.querySelectorAll('.expenses-items');

    if (btnPlusTarget.length >= 3) {
        btnTarget.style.display = 'none';
    }
};

AppData.prototype.addExpensesBlock = function () {
    let cloneExpensesItem = expensesItems[0].cloneNode(true);
    cloneExpensesItem.querySelectorAll('input').forEach(function (item) { // убираем value
        item.value = '';
    });
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
    expensesItems = document.querySelectorAll('.expenses-items');

    if (expensesItems.length === 3) {
        expensesPlus.style.display = 'none';
    }
};

// AppData.prototype.addIncomeBlock = function () {
//     let cloneIncomeItems = incomeItems[0].cloneNode(true);
//     cloneIncomeItems.querySelectorAll('input').forEach(function (item) {    // убираем value
//         item.value = '';
//     });
//     incomeItems[0].parentNode.insertBefore(cloneIncomeItems, incomePlus);
//     incomeItems = document.querySelectorAll('.income-items');

//     if (incomeItems.length >= 3) {
//         incomePlus.style.display = 'none';
//     }
// };

AppData.prototype.getExpenses = function () {
    expensesItems.forEach((item) => {
        let itemExpenses = item.querySelector('.expenses-title').value,
            cashExpenses = item.querySelector('.expenses-amount').value;
        if (itemExpenses !== '' && cashExpenses !== '') {
            this.expenses[itemExpenses] = +cashExpenses;
        }
    });
};

AppData.prototype.getIncome = function () {
    incomeItems.forEach((item) => {
        let itemIncome = item.querySelector('.income-title').value,
            cashIncome = item.querySelector('.income-amount').value;

        if (itemIncome !== '' && cashIncome !== '') {
            this.income[itemIncome] = +cashIncome;
        }
    });
};

AppData.prototype.getAddExpenses = function () {
    let addExpenses = additionalExpensesItem.value.split(',');
    addExpenses.forEach(function (item) {
        item = item.trim();
        if (item !== '') {
            appData.addExpenses.push(item);
        }
    });
};

AppData.prototype.getAddIncome = function () {
    additionalIncomeItem.forEach((item) => {
        let itemValue = item.value.trim();
        if (itemValue !== '') {
            this.addIncome.push(itemValue);
        }
    });
};

//депозит
AppData.prototype.getInfoDeposit = function () {
    if (this.deposit) {
        this.percentDeposit = depositPercent.value;
        this.moneyDeposit = depositAmount.value;
    }
};

AppData.prototype.getExpensesMonth = function () {
    for (let key in this.expenses) {
        this.expensesMonth += +this.expenses[key];
    }
};

AppData.prototype.getIncomeMonth = function () {
    for (let key in this.income) {
        this.incomeMonth += +this.income[key];
    }
};

AppData.prototype.getBudget = function () {
    this.budgetMonth = this.budget + this.incomeMonth - 
        this.expensesMonth + (this.moneyDeposit * this.percentDeposit) / 12;
    this.budgetDay = Math.floor(this.budgetMonth / 30);
};

AppData.prototype.getTargetMonth = function () {
    return targetAmount.value / this.budgetMonth;
};

AppData.prototype.getStatusIncome = function () {
    if (this.budgetDay >= 800) {
        return ('Высокий уровень дохода');
    } else if (this.budgetDay >= 300 && this.budgetDay < 800) {
        return ('Средний уровень дохода');
    } else if (this.budgetDay >= 0 && this.budgetDay < 300) {
        return ('Низкий уровень дохода');
    } else {
        return ('Что-то пошло не так');
    }
};

AppData.prototype.getTargetGoal = function () {
    if (this.getTargetMonth() >= 0) {
        console.log('Ваша цель будет достигнута через ' + this.getTargetMonth() +
            ' месяцев.');
    } else {
        console.log('Цель не будет достигнута');
    }
};

AppData.prototype.calcPeriod = function () {
    return this.budgetMonth * periodSelect.value;
};

AppData.prototype.blockInput = function () {
    let elem = document.querySelectorAll('input[type=text]');
    elem.forEach(function (item) {
        item.setAttribute('disabled', 'true');
    });

    start.style.display = 'none';
    reset.style.display = 'inline-block';
    
    depositeCheck.setAttribute('disabled', 'true');
    depositBank.setAttribute('disabled', 'true');
};

AppData.prototype.reset = function () {
    this.income = {};
    this.incomeMonth = 0;
    this.addIncome = [];
    this.expenses = {};
    this.addExpenses = [];
    this.deposit = false;
    this.budget = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.expensesMonth = 0;

    let delIncomeBtns = document.querySelectorAll('.income-items');
    for (let i = 1; i <= delIncomeBtns.length - 1; i++) {
        delIncomeBtns[i].remove();
    }

    let delExpensesBtns = document.querySelectorAll('.expenses-items');
    for (let i = 1; i <= delExpensesBtns.length - 1; i++) {
        delExpensesBtns[i].remove();
    }

    let elem = document.querySelectorAll('input[type=text]');
    elem.forEach(function (item) {
        item.removeAttribute('disabled');
    });

    incomePlus.style.display = 'inline-block';
    expensesPlus.style.display = 'inline-block';

    reset.style.display = 'none';
    start.style.display = 'inline-block';

    let delData = document.querySelectorAll('input[type=text]');
    delData.forEach(function (item) {
        item.value = '';
    });
    periodSelect.value = 0;
    periodAmount.innerHTML = periodSelect.value;
    
    depositBank.removeAttribute('disabled');
    depositeCheck.removeAttribute('disabled');
    depositeCheck.checked = false; //попытка убрать галку
};

AppData.prototype.eventListeners = function () {    
    salaryAmount.addEventListener('input', this.blockStart);


    expensesPlus.addEventListener('click', this.addExpensesBlock);
    
    incomePlus.onclick = (event) => {
        console.log((event.target));
        console.log(event.target.parentNode.children[1]);
        this.addBlock(event.target, event.target.parentNode.children[1]);      
        };

    
    start.addEventListener('click', this.start.bind(this));
    reset.addEventListener('click', this.reset.bind(this));
    
    reset.addEventListener('click', this.reset);
    
    periodSelect.addEventListener('input', function () {
        periodAmount.innerHTML = event.target.value;
    });

    depositeCheck.addEventListener('change', function () {
        if (depositeCheck.checked) {
            depositBank.style.display = 'inline-block';
            depositAmount.style.display = 'inline-block';
            appData.deposit = 'true';
            depositBank.addEventListener('change', function () {
                let selectedIndex = this.options[this.selectedIndex].value;
                if (selectedIndex === 'other') {
                    depositPercent.style.display = 'inline-block';
                    depositPercent.removeAttribute('disabled');
                    depositPercent.value = '';
                } else {
                    depositPercent.style.display = 'none';
                    depositPercent.value = selectedIndex;
                }
            });
        } else {
            depositBank.style.display = 'none';
            depositAmount.style.display = 'none';
            depositAmount.value = '';
            appData.deposit = 'false';
        }
    });
};    



const appData = new AppData();
appData.eventListeners();

