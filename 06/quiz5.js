const $box = document.querySelector('box');

let offset = {x:0, y:0};
let isClick = false;
let dragDom = null;

function startDragDom(el) {
    el.addEventListener('mousedown', (event)=> {
        isClick = true;
        dragDom = el;


        offset.x = el.offsetLeft - event.clientX;
        offset.y = el.offsetTop - event.clientY;
    }) ;

}


function addEvent() {
    
    document.addEventListener('mouseup', () => {
        isClick = false;

    });

    document.addEventListener('mousemove', (event) => {

        if(!isClick) return;
        console.log(event.clientX, event.clientY);

        dragDom.style.left = event.clientX + offset.x + 'px';
        dragDom.style.top = event.clientY + offset.y + 'px';
    });

}

addEvent();

startDragDom(document.querySelector('.box'))
startDragDom(document.querySelector('.box1'))