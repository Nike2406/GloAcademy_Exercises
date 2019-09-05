'use strict';

let date = new Date();
function plusZero(num) {
	if (num > 0 && num < 10) { 
		return '0' + num;
	} else if (num == 0) {
		return '00';
	} else {
		return num;
	}
}

let i = (plusZero(date.getHours()) + ':' + plusZero(date.getMinutes()) + 
':' + plusZero(date.getSeconds()) + ' ' + plusZero(date.getDate()) + 
'.' + plusZero(date.getMonth() + 1) + '.' + date.getFullYear());
console.log(i);
// let clock = document.querySelector('.clock');
// clock[0].innerHTML = 'i';

let div = document.createElement('div');
div.className = "clock";
div.innerHTML = i;

document.body.append(div);
