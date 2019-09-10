'use strict';

function DomElement(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
}

DomElement.prototype.addSel = function () {
    if (this.selector[0] == '.') {
        let div = document.createElement('div');
        div.className = this.selector.slice(1, (this.selector).length);
        div.innerHTML = this.selector;//любой текст
        document.body.append(div);
    }
    if (this.selector[0] == '#') {
        let p = document.createElement('p');
        p.className = this.selector.slice(1, (this.selector).length);
        p.innerHTML = this.selector; //любой текст
        document.body.append(p);
    }
};

let elem = new DomElement('#Hello', '100', '100', 'red', '24px');
elem.addSel();

let cssElem = document.getElementsByClassName((`${elem.selector}`).slice(1, (`${elem.selector}`).length))[0];

cssElem.style.cssText = `height: ${elem.height}; width: ${elem.width}; 
 background-color: ${elem.bg}; font-size: ${elem.fontSize}`;
 
 let newElem = new DomElement('.Bye', '200', '200', 'green', '36px'); //новый элемент
 console.log('newElem: ', newElem); 
 newElem.addSel(); //вызывем метод класса