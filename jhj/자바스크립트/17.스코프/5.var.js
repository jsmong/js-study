// var의 특징
// -> 일반 코딩 방식과 어긋나서 개발시 멘붕..
// -> 코드의 가독성과 유지보수성에 좋지 않음

// 1.변수 선언하는 키워드 없이 선언 및 할당 가능
// -> 선언? 재할당? 구분 어려움
something = 'var';
console.log(something);

// 2. 중복 선언 가능
// -> 실수 발생 높음..
var poo = 'poo';
var poo = 'poo';
console.log(poo); // poo

// 3.블록레벨 스코프 X
var apple = '사과';
{
  var apple = '🍎';
  {
    var apple = '🍏';
  }
}
console.log(apple); // 🍏

// 4. 함수 레벨 스코프는 지원 됨
function exam() {
  var dog = 'dog';
}
// console.log(dog); // 에러 : dog is not defined
