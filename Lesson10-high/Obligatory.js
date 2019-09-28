'use strict';

document.addEventListener('DOMContentLoaded', () => {

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

let elem = new DomElement('#Hello', '100', '100', 'red', '24');
elem.addSel();

let cssElem = document.getElementsByClassName((`${elem.selector}`).slice(1, (`${elem.selector}`).length))[0];

cssElem.style.cssText = `height: ${elem.height}px; width: ${elem.width}px; 
 background-color: ${elem.bg}; font-size: ${elem.fontSize}px; position: absolute`;


 let top = 0, 
    left = 0;
 document.addEventListener('keydown', (event) => {
     if (event.key === 'ArrowUp') {
         top -= 10;
        cssElem.style.top = top + 'px';
     }
     if (event.key === 'ArrowDown') {
        top += 10;
       cssElem.style.top = top + 'px';
    }
    if (event.key === 'ArrowLeft') {
        left -= 10;
       cssElem.style.left = left + 'px';
    }
    if (event.key === 'ArrowRight') {
        left += 10;
       cssElem.style.left = left + 'px';
    }
    });
});
