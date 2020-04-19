
var link  = document.querySelector('#link');
link.addEventListener('click', function() {
    console.log(111);
    //event.stopPropagation();
    event.preventDefault();
})

// var list = document.querySelector('#list');
// console.log(list.children);

// list.addEventListener('click', function(event) {
//     if (event.target.nodeName =='LI') {
//         // 한개의 event리스너로 모든 li에 click 이벤트 등록
//         console.log(2);
//     }
//     event.stopPropagation(); // 이벤트 전파 중지
// });

// //이벤트 전파 (위에서 부터)
// document.body.addEventListener('click', function() {
//     console.log('body');
// }); 

// for(var i=0; i<list.children.length; i++){
//     list.children[i].addEventListener('click', function(){
//         console.log(1);
//     })
// }

// var clickcount = 0;
// function popup(event) {
//     console.log(++clickcount);
//     console.log(arguments, this, event, event.type, event.currenTarget);
// }
// document.body.addEventListener('click', popup);

//document.body.addEventListener('click', function () {
//    console.log('click');
//});

// body 대신 querySelector('.box')로 치환
//function clickbody(){
//    console.log('check click');
//}

//document.querySelector('.box').addEventListener('click', clickbody); 

//console.log(window.outerWidth);
//console.log(window.name);
// window.open('http://www.daum.net');

// location.href='http://www.daum.net';
// location.reload();


// var debug = document.getElementById('debug');
// console.log(debug);
// 또는
//var box = document.querySelector('#debug');
//console.log(box);



//var box = document.querySelector('.box');
//var box2 = document.querySelectorAll('.box');
//console.log(box2);



//var div = document.createElement('div');
//console.log(div);
//div.style.border = "1px solid rgb(256,0,0)";
//div.innerHTML = "hello!";

//document.body.appendChild(div); 


//const span = document.createElement('span');
//const textNode = document.createTextNode('hello!'); 
//span.appendChild(textNode);
//document.querySelector('#debug').appendChild(span);

// var debug = document.getElementById('debug');
// //debug.remove();

// const list = document.getElementById('list'); 
// list.removeChild(list.children[0]);
