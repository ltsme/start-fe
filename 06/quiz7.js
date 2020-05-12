const $point = document.getElementById('point');
const $life = document.getElementById('life');
const $bug = document.getElementById('bug');
const $box = document.querySelector('.box');
const refresh = 1500;


let point = 0;
let life = 10;
let max = 400;
let timerId = 0;
function showBug() {
    $bug.style.display = 'block';
}
function hideBug() {
    $bug.style.display = 'none';
}


function move() {
    showBug();
    const x = getRandom($box.offsetWidth - $bug.offsetWidth);
    const y = getRandom($box.offsetHeight - $bug.offsetHeight);

    $bug.style.left = `${x}px`;
    $bug.style.top = `${y}px`;
}

function getRandom(max) {
    return Math.floor(Math.random() * max);
}



const btnHitFail = () => {
    life -= 1;
    $life.innerHTML = life;
    setTimeout(() => {
        if (life == 0) {
            alert('gameover!');
            clearInterval(timerId);
        }
    }, 0);
};


function btnHit(event) {    
    point += 1;
    $point.innerHTML = point;
    hideBug();
    start();
    event.stopPropagation();
    
}

function start() {
    clearInterval(timerId);    
    timerId = setInterval(move, refresh);
}

start();

$bug.addEventListener('click', btnHit);
$box.addEventListener('click', btnHitFail);