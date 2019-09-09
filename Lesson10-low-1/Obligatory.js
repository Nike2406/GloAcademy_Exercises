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
        div.className = this.selector;
        div.innerHTML = this.selector;
        document.body.append(div);
    }
    if (this.selector[0] == '#') {
        let p = document.createElement('p');
        p.className = this.selector;
        p.innerHTML = this.selector;
        document.body.append(p);
    }
};
let elem = new DomElement('#Hello', '100', '100', 'red', '24px');
elem.addSel();
let cssElem = document.getElementsByClassName(`${elem.selector}`);
// cssElem.style.cssText = `height: ${elem.height}; width: ${elem.width}; 
// background: ${elem.bg}; font-size: ${elem.fontSize}`;
console.log(elem);
console.log(cssElem);
console.log(`${elem.selector}`);