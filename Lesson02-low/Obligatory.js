let money = 100000000,
    income = 'Channel',
    addExpenses = 'Налоги, еда, отдых',
    deposit = true,
    mission = Infinity,
    period = 12;

console.log(typeof(money), typeof(income), typeof(deposit));
console.log(income.length);
console.log('Период ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей');

console.log(addExpenses.toLowerCase().split(', '));

let budgetDay = money / 30;
console.log('Дневной бюджет: ' + budgetDay + 
' рублей, остаток от деления: ' + money % 30);
