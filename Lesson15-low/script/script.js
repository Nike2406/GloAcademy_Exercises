document.addEventListener('DOMContentLoaded', () => {

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

    countTimer('11 16 2019 00:08:40');

    //Menu
    const toggleMenu = () => {
        const menu = document.querySelector('menu'),
            body = document.querySelector('body');

        body.addEventListener('click', (event) => {
            let target = event.target;

            if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {

                if (target.classList.contains('menu') || target.closest('.menu')) {
                    menu.classList.toggle('active-menu');
                } else if (menu.classList.contains('active-menu') && !(target.closest('.active-menu'))) {
                    menu.classList.toggle('active-menu');
                } else if (target.closest('.active-menu') && !(target.classList.contains('active-menu'))) {
                    menu.classList.toggle('active-menu');
                }

            } else {
                if (target.classList.contains('menu') || target.closest('.menu')) {
                    menu.style.transform = `translate(0)`;
                } else if (target.closest('menu') && !(target.classList.contains('menu'))) {
                    menu.style.transform = `translate(-100%)`;
                }

            }

        });

    };
    toggleMenu();

    //popup
    const togglePopUp = () => {
        let popUp = document.querySelector('.popup'),
            popUpTab = document.querySelector('.popup-content'),
            service = document.querySelector('.service');


        if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {


            service.addEventListener('click', (event) => {
                let target = event.target;
                if (target.classList.contains('popup-btn')) {
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
                }
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
            service.addEventListener('click', (event) => {
                let target = event.target;
                if (target.classList.contains('popup-btn')) {
                    popUp.style.display = 'block';
                }
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

    //Slider
    const slider = () => {
        const slide = document.querySelectorAll('.portfolio-item'),
            slider = document.querySelector('.portfolio-content'),
            parentDot = document.querySelector('.portfolio-dots');

        const getNewDot = () => {
            for (let i = 0; i < slide.length; i++) {
                let newDot = document.createElement('li');
                newDot.classList.add('dot');
                parentDot.appendChild(newDot);
            }
        };
        getNewDot();

        let dot = document.querySelectorAll('.dot');
        dot[0].classList.add('dot-active');

        let currentSlide = 0,
            interval;

        const prevSlide = (elem, index, strClass) => {
            elem[index].classList.remove(strClass);
        };

        const nextSlide = (elem, index, strClass) => {
            elem[index].classList.add(strClass);
        };

        const autoPlaySlide = () => {
            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');
            currentSlide++;
            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        };

        const startSlide = (time = 3000) => {
            interval = setInterval(autoPlaySlide, time);
        };
        const stopSlide = () => {
            clearInterval(interval);
        };

        slider.addEventListener('click', (event) => {
            event.preventDefault();
            let target = event.target;

            if (!target.matches('.portfolio-btn, .dot')) {
                return;
            }

            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');

            if (target.matches('#arrow-right')) {
                currentSlide++;
            } else if (target.matches('#arrow-left')) {
                currentSlide--;
            } else if (target.matches('.dot')) {
                dot.forEach((elem, index) => {
                    if (elem === target) {
                        currentSlide = index;
                    }
                });
            }

            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }

            if (currentSlide < 0) {
                currentSlide = slide.length - 1;
            }

            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');

        });

        slider.addEventListener('mouseover', (event) => {
            if (event.target.matches('.portfolio-btn') ||
                event.target.matches('.dot')) {
                stopSlide();
            }
        });

        slider.addEventListener('mouseout', (event) => {
            if (event.target.matches('.portfolio-btn') ||
                event.target.matches('.dot')) {
                startSlide();
            }
        });

        startSlide(2000);
    };
    slider();

    //Team 
    const hoverCommand = () => {
        let commandBlock = document.querySelector('.command');
        let imgBack;
        commandBlock.addEventListener('mouseover', (event) => {
            imgBack = event.target.src;
            event.target.src = event.target.dataset.img;
        });
        commandBlock.addEventListener('mouseout', (event) => {
            event.target.src = imgBack;
        });
    };
    hoverCommand();

    //Numeral calculate
    const numeralCalculate = () => {
        const calcBlock = document.querySelector('.calc-block');

        calcBlock.addEventListener('input', (event) => {
            let target = event.target;

            if (target.matches('input')) {
                target.value = target.value.replace(/\D/g, '');
            }
        });

    };
    numeralCalculate();

    //Проверка
    // document.addEventListener('click', (elem) => {
    //     console.log(elem.target);
    // });

});