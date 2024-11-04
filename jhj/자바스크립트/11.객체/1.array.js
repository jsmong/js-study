// 배열 생성 방법 & 배열 특징
// 1. 사이즈만 정해서 배열 만들기
let array = new Array(3);
console.log(array);
// 2. 엘리먼트 넣어서 만들기
array = new Array(1, 2, 3);
console.log(array);
// 3. Array.of
array = Array.of(1, 2, 3, 4, 5);
console.log(array);
// 4. 배열 리터럴
const anotherArray = [1, 2, 3, 4];
// 5. Array.from 다른 어레이로부터 이어지는 배열
array = Array.from(anotherArray);
console.log(array);

// 일반적으로 배열은 동일한 메모리 크기를 가지며, 연속적으로 이어져 있어야함.
// but 자스에서는 배열이 연속적으로 이어져있고
// 오브젝트와 유사함!
// 자바스크립트의 배열은 일반적인 배열의 동작을 흉내낸 특수한 객체다
// 이걸 보완하기 위해 타입이 정해져있는 타입 배열이 있음 (Typed Colletions)

array = Array.from({
  0: '안',
  1: '녕',
  length: 2,
});
console.log(array); // [ '안', '녕' ]

// 3-1 array.of 왜 생겨났는지?
let arr1 = new Array(2);
let arr2 = new Array('2');
console.log(arr1);
console.log(arr2);

let arr3 = Array.of(2);
let arr4 = Array.of('2');
console.log(arr3);
console.log(arr4);
