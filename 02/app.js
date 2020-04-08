console.log('app.js');

// create
var todos = ['운동']
var todo = '게임';
todos.push(todo);
console.log(todos);

//read
todos.forEach(function(todo){
    console.log(todo)
});

//update
// var todos = ['운동', '게임'];
// var updateTodo = '게임';
// var updateIndex = todos.findIndex(function(todo) {
// return todo === updateTodo;
// });
// todos[updateIndex] = '공부';
// console.log(todos);

//delete
// var todos = ['운동', '공부', '목욕'];
// var deleteTodo = '공부';
// var deleteIndex = todos.findIndex(function(todo) {
//   return todo === deleteTodo;
// });
// todos.splice(deleteIndex, 1);
// console.log(todos);

//if
// var isMan = false;
// if (isMan) {
//     console.log('1');
// } else {
//     console.log('2');
// }

/*
var result = 0;
console.log('평균 값 구하기')
var count = [10,20,30,40,50,60,70,100];
for (var i = 0; i < count.length; i++){
    result += count[i]
}
console.log('평균 값은', result / count.length, '입니다.');
*/

/*
console.log('구구단 출력')
for(var num = 2; num < 10; num++){
    for (var i = 1; i < 10; i++){
        console.log(num, 'x', i, '=', num*i)
    }
}*/

/*
function gugudan() {
    var text = "";
    for(var num = 2; num < 10; num++){
        for (var i = 1; i < 10; i++){
            text += num +'x' + i + '=' + num*i + " ";
        }
        text += "<br />"
    }
    return text
}
*/

/*
var date = new Date();
var day = date.getDay();
var week = ['월','화','수','목','금','토','일']

console.log('오늘은 ', week[day-1], '요일');
*/

/*
var result = 0;
var count = window.prompt('덧셈을 할 횟수를 입력하세요', '');

for (var i=0; i < count; i++){
    var getnum = window.prompt('더할 숫자를 입력해 주세요', '');
    getnum = parseInt(getnum); //문자열을 숫자로 바꿈
    var result = result + getnum;
}
window.alert('숫자의 총 합은 :', result);
*/

/*
var result = 0;
var num = window.prompt('더할 숫자를 입력해 주세요', '');

while(num){    
    num = parseInt(num); //문자열을 숫자로 바꿈
    var result = result + num;
    var num = window.prompt('더할 숫자를 입력해 주세요', '');    
}

window.alert('숫자의 총 합은 : ' + result + ' 입니다.' );
*/