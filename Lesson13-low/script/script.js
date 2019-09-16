window.addEventListener('DOMContentLoaded', function () {

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
                    timeRemaining,
                    houres,
                    minutes,
                    seconds
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

    //Menu
    const toggleMenu = () => {
        const btnMenu = document.querySelector('.menu'),
            menu = document.querySelector('menu'),
            closeBtn = document.querySelector('.close-btn'),
            menuItems = menu.querySelectorAll('ul>li'),
          handlerMenu = () => {

        if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) && 
            window.innerWidth >= 1000) {
            
                menu.classList.toggle('active-menu');
            }  else {
                if(!menu.style.transform || menu.style.transform === `translate(-100%)`) {
                    menu.style.transform = `translate(0)`;
                } else {
                    if (menu.style.transform === `translate(0px)`) {
                        menu.style.transform = `translate(-100%)`;
                        menu.removeAttribute('style');
                    } else {
                        menu.classList.remove('active-menu');
                    }                  
                    
                }
            }
        };

        btnMenu.addEventListener('click', handlerMenu);
        closeBtn.addEventListener('click', handlerMenu);
        menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu));

    };
    toggleMenu();

    //popup
    const togglePopUp = () => {
        let popUp = document.querySelector('.popup'),
            popupBtn = document.querySelectorAll('.popup-btn'),
            popUpClose = document.querySelector('.popup-close'),
            popUpTab = document.querySelector('.popup-content');


    if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) && 
    window.innerWidth >= 1000) {
         console.log('window.innerWidth: ', window.innerWidth);
         

        popupBtn.forEach((elem) => {
            elem.addEventListener('click', () => {
                popUp.style.display = 'block';
                popUpTab.style.top = `-${popUpTab.offsetHeight}px`;
                let i= -popUpTab.offsetHeight,
                
                showUpTab,
                tabAnimate = () => {
                    showUpTab = requestAnimationFrame(tabAnimate);
                    i += 10;
                    if (i <  60) {
                        popUpTab.style.top = i + 'px';
                    } else {
                        cancelAnimationFrame(showUpTab);
                    }
                };
                showUpTab = requestAnimationFrame(tabAnimate);
                
            });
        });

        popUpClose.addEventListener('click', () => {
            const tabBelow = popUpTab.offsetHeight + popUpTab.offsetTop;
            let j = popUpTab.offsetTop,
                closeUpTab,
            tabAnimate = () => {
                closeUpTab = requestAnimationFrame(tabAnimate);
                
                if (j > -(tabBelow)) {
                    popUpTab.style.top = j + 'px';
                    j -= 10;
                } else {
                    cancelAnimationFrame(closeUpTab);
                    popUp.style.display = 'none';
                }
            };
            closeUpTab = requestAnimationFrame(tabAnimate);
        });
    } else {
        popupBtn.forEach((elem) => {
            elem.addEventListener('click', () => {
                popUp.style.display = 'block';                
            });            
        });
        
        popUpClose.addEventListener('click', () => {
            popUp.style.display = 'none';
        });

    }

    };
    togglePopUp();

});

/* Черновик анимации через CSS
popupBtn.forEach((elem) => {
            elem.addEventListener('click', () => {
                popUp.style.display = 'block';
                popUpTab.style.cssText = `top: -100%`;
                //popUpTab.style.transform = `translateY(-120%);`;
                popUpTab.style.cssText = `                
                transition: all 0.5s ease-in;                
                transform: translateY(20%)`;
                console.log('popUpTab: ', popUpTab);
            });
        });
        console.dir(popUpTab);
        popUpClose.addEventListener('click', () => {
            popUpTab.style.cssText = `                
                transition: all 0.5s ease-in-out;                
                transform: translateY(-120%);`;
            setTimeout(() => {
                popUp.style.display = 'none';
            }, 510);
        });*/