var $addRed = document.querySelector('.add-red');
var $addBtn = document.querySelector('.add-btn');
var $deleteBtn = document.querySelector('.delete-btn');
var $textBtn = document.querySelector('.text-btn');
var $resetBtn = document.querySelector('.reset-btn');
var $toggleBtn = document.querySelector('.toggle-btn');
var $imageBtn = document.querySelector('.image-btn');

var $box = document.querySelector('.box');

var $body = document.querySelector('body');

var str = '';

$addRed.addEventListener('click', addRed);
$addBtn.addEventListener('click', addBtn);
$deleteBtn.addEventListener('click', deleteBtn);
$textBtn.addEventListener('click', textBtn);
$resetBtn.addEventListener('click', resetBtn);
$toggleBtn.addEventListener('click', toggleBtn);
$imageBtn.addEventListener('click', imageBtn);



function addRed() { // 문제 1 .add-red 클릭하면 .box class속성에 .red를 추가
    var $boxes = document.querySelectorAll('.box');
    for (var i=0; i< $boxes.length; i++) {
        $boxes[i].classList.add('red');
    }
    
}

function addBtn($box) { // 문제 2 .add-btn 클릭하면 .box 엘리먼트를 body 에 하나씩 추가    
    var newbox = document.createElement('div');
    newbox.classList.add('box');
    document.body.appendChild(newbox);
}

function deleteBtn() { // 문제 3 .delete-btn 클릭하면 모든 .box 엘리먼트를 하나씩 삭제
    var $box = document.querySelector('.box');
    $box.remove();  
}

function textBtn() { // 미완성
    str = document.querySelector('.txt').value;
      
    var $boxes = document.querySelectorAll('.box');
    for (var i=0; i< $boxes.length; i++) {
        $boxes[i].innerHTML = str;
    }
    
}

function resetBtn() { 
    var $boxes = document.querySelectorAll('.box');
    for (var i=0; i< $boxes.length; i++) {
        $boxes[i].remove();
    }
    
    //모든 box 제거 하는 메소드
}

function toggleBtn()
 { 
    var $boxes = document.querySelectorAll('.box');
    if ($boxes[0].style.display == "") 
    {
        for (var i=0; i< $boxes.length; i++) {
            $boxes[i].style.display = "none";
        }
        
    } else {
        for (var i=0; i< $boxes.length; i++) {
            $boxes[i].style.display = "";
        }
    }
}

function imageBtn() {
   var img = document.createElement('div');
   img.className = 'box';
   str = ' <img src="https://i.imgur.com/69NjYBH.png"> ';   
   img.innerHTML = str;
   $body.appendChild(img);
}




