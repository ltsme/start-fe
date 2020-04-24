var $addred = document.querySelector('.add-red');
var $addbtn = document.querySelector('.add-btn');
var $box = document.querySelector('.box');
var $body = document.querySelector('body');
var str = '';

$addred.addEventListener('click', addRed);
$addbtn.addEventListener('click', addBtn);

function addRed(){
    $box.className += ' red';
    console.log('addred');
}

function addBtn($box){   

    //str += '<span class="'+ className +'"></span>';
    //str += '<div class="box red"></div>';
    
       
    document.body.appendChild(createbox($box));
    console.log('addbtn');
}

function createbox($box) {
    var $createBox = document.createElement('div');
    $createBox.className = 'box';
    console.log('box');
    return $createBox;
}