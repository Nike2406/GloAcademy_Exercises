window.addEventListener('DOMContentLoaded',function () {

    'use strict';
    
    //Timer
    let countTimer = (deadline) => {
        let timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds'),

        getTimeRemaining = () => {
            let dateStop = new Date(deadline).getTime(),
            dateNow = new Date().getTime(),
            timeRemaining = Math.floor((dateStop - dateNow) / 1000),
            seconds = Math.floor(timeRemaining % 60),
            minutes = Math.floor((timeRemaining / 60) % 60),
            houres = Math.floor((timeRemaining / 60) / 60);
            return {
                timeRemaining, houres, minutes, seconds
            };
        },

        plusZero = (num) => {
            if (num > 0 && num < 10) { 
                return '0' + num;
            } else if (num == 0) {
                return '00';
            } else {
                return num;
            }
        },

        updateClock = () => {
            let timer = getTimeRemaining();
            
            if (timer.timeRemaining >= 0) {
            timerHours.textContent = plusZero(timer.houres);
            timerMinutes.textContent = plusZero(timer.minutes);
            timerSeconds.textContent = plusZero(timer.seconds);
            } else {
                clearInterval(idInterval);
            }
            
        },

        idInterval = setInterval(updateClock, 1000);
    };

    countTimer('9 16 2019 00:08:40');

});
