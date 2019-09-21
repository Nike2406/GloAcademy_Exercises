'use strict';

let div = document.querySelectorAll('div');
div[0].innerHTML =  div[0].innerHTML.replace(/(функц)([а-яё]+)/gi, '<strong>$1$2</strong>' );
div[1].innerHTML =  div[1].innerHTML.replace(/(\d{2}):(\d{2})/gi, '<strong>$1:$2</strong>' );
div[1].innerHTML =  div[1].innerHTML.replace(/"(.+\n?.+?)"/mgi, '<mark>$1</mark>');
div[0].innerHTML =  div[0].innerHTML.replace(/("|«)(.+)("|»)/gi, '<mark>$2</mark>');
div[1].innerHTML =  div[1].innerHTML.replace(/(\w{4,5}):\/\/(www)?\.?(\w+\.\w{2,3})(.+\/+)?/mgi,
     '<a href="$1://$3$4">$3</a>'); //Также является ответом на 6-е задание

div.forEach((item) => {
    let color = item.getAttribute('style').match(/#\w+/gi);
    console.log('color: ', color);
});
