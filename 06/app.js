
//let, const의 활용
// let a = 'aa'; // 블록 유효 범위를 갖는 지역 변수
// const b = 'bb'; // 상수
// var c ='11';
// c = 33;

// console.log(a, b, c);


//탬플릿 표현식
// // str += '<img src="' + todayPhoto[i].img + '"> ';
// // str = `<img src="${todayPhoto[i].img}">`;

// var str = 'aaaaa \
// sdsds';
// const s = `aaaaa
// ccccc`;
// console.log(str, s);



//기본 매개변수
// function sum(x, y = 1) {
//     return x + y;
// }

// console.log(sum(1));



//화살표 함수
// const arr = [1, 2, 3];

// const newArr = arr.map(function(item){
//     return item + 1;
// });

// const newArr = arr.map((item) => {
//     return item + 1;
// });

// const newArr = arr.map((item) => item + 1);

// console.log(newArr);


// document.getElementById('box').addEventListener('click', (event) => console.log(1));


// //전개 구문
// function sum(x,y,z){
//     return x+y+z;
// }
// const numbers = [1,2,3];
// console.log(sum(...numbers));
// console.log(sum(1,2,3));

// const words = ['a', 'b'];
// const newWords = [...words];
// console.log(newWords);



// //원시, 참조타입
// var a = 1;
// var b = a;
// b= 2;
// console.log(a, b);

// var a = [1];
// var b = a;
// b[0] = [2];
// console.log(a, b);


// //Rest 파라미터
// function func(...param) {
//     console.log(param);
// }
// func(1, 2, 3);

// // es5
// function func() {
//     console.log(arguments);
// }
// func(1, 2, 3);


//향상된 객체 리터럴
// const number = 1234;

// const student = {
//     number, 
// };

// console.log(student);

