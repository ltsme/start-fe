const $max = document.getElementById('max');
const $min = document.getElementById('min');
const $box = document.getElementById('box');
const $btn = document.getElementById('btn');

let randomNum = 0; // 임의로 생성되는 난수
let boxNum = 0; // 애니메이션 도중, 박스에 표시되는 수
let timerId = null;

function getrandomNum() {
    const max = $max.value;
    const min = $min.value;
    randomNum = Math.floor(Math.random() * (max - min + 1) + min);

    animation();       
}

function animation() {
    boxNum = randomNum - 50; //애니메이션 시작 값
    $btn.disabled = true;

    timerId = setInterval(()=>{ // 애니메이션 시작

        $box.innerHTML = boxNum;
        boxNum += 1;

        if(boxNum == randomNum){
            $btn.disabled = false;
            clearInterval(timerId); // 끝                             
        }
    }, 20);
}

$btn.addEventListener('click', getrandomNum);
