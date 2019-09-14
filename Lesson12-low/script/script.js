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

        //mark
        
        function updateClock() {
            let timer = getTimeRemaining();
            
            timerHours.textContent = timer.houres;
            timerMinutes.textContent = timer.minutes;
            timerSeconds.textContent = timer.seconds;

            if (timer.timeRemaining > 0) {
                setTimeout(updateClock, 1000);
            } 
        }

        updateClock();
    }

    countTimer('9 14 2019 23:54:0');

});

setTimeout(() => {console.log(1);}, 5000);