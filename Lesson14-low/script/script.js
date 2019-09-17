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
            body = document.querySelector('body'),
            // handlerMenu = () => {

            //     if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {

            //         menu.classList.toggle('active-menu');
            //     } else {
            //         if (!menu.style.transform || menu.style.transform === `translate(-100%)`) {
            //             menu.style.transform = `translate(0)`;
            //         } else {
            //             menu.style.transform = `translate(-100%)`;
            //         }
            //     }

            // };
            handlerMenu = () => {
                menu.classList.toggle('active-menu');
            };

            body.addEventListener('click', (event) => {
                let target = event.target;
                console.log('target: ', target);


                if (target.classList.contains('menu') || target.closest('.menu') ||
                target.classList.contains('close-btn')) {
                    menu.classList.toggle('active-menu');
                } else if (menu.classList.contains('active-menu') && !(target.closest('.active-menu'))) {
                    menu.classList.toggle('active-menu');
                } else if (target.closest('.active-menu') && !(target.classList.contains('active-menu'))) {
                    menu.classList.toggle('active-menu');
                }
                // else {
                //     target = target.closest('.active-menu');

                //     if (!target) {
                //         menu.classList.toggle('active-menu');
                //     }
                // }
            });

        // btnMenu.addEventListener('click', handlerMenu);
        // closeBtn.addEventListener('click', handlerMenu);
        // menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu));

    };
    toggleMenu();

    //popup
    const togglePopUp = () => {
        let popUp = document.querySelector('.popup'),
            popupBtn = document.querySelectorAll('.popup-btn'),
            popUpTab = document.querySelector('.popup-content');


        if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) &&
            window.innerWidth >= 1000) {

            popupBtn.forEach((elem) => {
                elem.addEventListener('click', () => {
                    popUp.style.display = 'block';
                    popUpTab.style.top = `-${popUpTab.offsetHeight}px`;
                    let i = -popUpTab.offsetHeight,
                        showUpTab,

                        tabAnimate = () => {
                            showUpTab = requestAnimationFrame(tabAnimate);
                            i += 10;
                            if (i < 60) {
                                popUpTab.style.top = i + 'px';
                            } else {
                                cancelAnimationFrame(showUpTab);
                            }
                        };
                    requestAnimationFrame(tabAnimate);

                });
            });

            popUp.addEventListener('click', () => {
                const tabBelow = popUpTab.offsetHeight + popUpTab.offsetTop;
                let j = popUpTab.offsetTop,
                    closeUpTab,
                    target = event.target,
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
                

                if (target.classList.contains('popup-close')) {
                    requestAnimationFrame(tabAnimate);
                } else {
                    target = target.closest('.popup-content');

                    if (!target) {
                        requestAnimationFrame(tabAnimate);
                    }
                }

                
            });

        } else {
            popupBtn.forEach((elem) => {
                elem.addEventListener('click', () => {
                    popUp.style.display = 'block';
                });
            });

            //Добавляем общее
            popUp.addEventListener('click', (event) => {
                let target = event.target;

                if (target.classList.contains('popup-close')) {
                    popUp.style.display = 'none';
                } else {
                    target = target.closest('.popup-content');

                    if (!target) {
                        popUp.style.display = 'none';
                    }
                }
            });

        }


    };
    togglePopUp();

    //Tabs
    const tabs = () => {

        const tabHeader = document.querySelector('.service-header'),
            tab = document.querySelectorAll('.service-header-tab'),
            tabContent = document.querySelectorAll('.service-tab');

        const toggleTabContent = (index) => {
            for (let i = 0; i < tabContent.length; i++) {
                if (index === i) {
                    tab[i].classList.add('active');
                    tabContent[i].classList.remove('d-none');
                } else {
                    tab[i].classList.remove('active');
                    tabContent[i].classList.add('d-none');
                }
            }
        };

        tabHeader.addEventListener('click', (event) => {
            let target = event.target;
            target = target.closest('.service-header-tab');

            if (target) {
                tab.forEach((item, i) => {
                    if (item === target) {
                        toggleTabContent(i);
                    }
                });
            }

        });
    };
    tabs();

    //Проверка
    // document.addEventListener('click', (elem) => {
    //     console.log(elem.target);
    // });

});