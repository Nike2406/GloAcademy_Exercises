window.addEventListener('DOMContentLoaded',function () {

    'use strict';
    
    //Timer
    function countTimer (deadline) {
        let timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');

        function getTimeRemaining () {
            let dateStop = new Date(deadline).getTime(),
            dateNow = new Date().getTime(),
            timeRemaining = Math.floor((dateStop - dateNow) / 1000),
            seconds = Math.floor(timeRemaining % 60),
            minutes = Math.floor((timeRemaining / 60) % 60),
            houres = Math.floor((timeRemaining / 60) / 60);
            return {
                timeRemaining, houres, minutes, seconds
            };
        }

        function plusZero(num) {
            if (num > 0 && num < 10) { 
                return '0' + num;
            } else if (num == 0) {
                return '00';
            } else {
                return num;
            }
        }

        
        function updateClock() {
            let timer = getTimeRemaining();
            
            if (timer.timeRemaining >= 0) {
            timerHours.textContent = plusZero(timer.houres);
            timerMinutes.textContent = plusZero(timer.minutes);
            timerSeconds.textContent = plusZero(timer.seconds);
            } else {
                clearInterval(idInterval);
            }
            
        }
        let idInterval = setInterval(updateClock, 1000);
    }

    countTimer('9 15 2019 15:07:20');

});
