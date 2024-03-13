// 함수 선언문 function name ()  {}
// 함수 표현식 const name = function () {}
// : 함수도 객체이기 때문에, 다른 변수에 할당하거나 재할당 할 수 있다.

// 무명함수 : 함수에 이름이 없는것
let add = function (a, b) {
  return a + b;
};

// function 이름을 추가할수 도 있지만, 외부에서 호출 할 수 없다
// let add = function sum (a, b) {
//   return a + b;
// };
console.log(add(1, 2));

// 화살표 함수 const name = () => {}
// 바로 리턴하면 {}, return 생략 가능
add = (a, b) => a + b;
console.log(add(1, 2));

// 생성자 함수 const object - new Function(); // 뒤 객체편에서 다룸

// IIF (Immedicately-Invoked Function Expression, 즉각호출함수)
(function run() {
  console.log('👋');
})();
