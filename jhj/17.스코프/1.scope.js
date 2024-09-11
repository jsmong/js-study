// 코드블럭 : {}, if() {}, for() {}, function() {} ,

// 블럭 외부에서는 블럭 내무의 변수 참조 X
{
  const a = 'a';
  console.log(a); // a
}
const b = 'b';
console.log(b); //b
// console.log(a); // 에러

// 함수 외부에서는 함수 내부의 변수 참조 X
function print() {
  const msg = 'Hi';
  console.log(msg);
}
// console.log(msg); // 에러

// 함수 외부에서는 함수의 매개변수 참조X
function sum(a, b) {
  console.log(a, b);
}
console.log(a, b);
