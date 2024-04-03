// 1. 매개변수의 기본값은 무조건 undefined
// 2. 매개변수의 정보는 함수 내부에서 접근이 가능한 arguments 객체에 저장됨
// 3. 매개변수 기본값 Default Parameters a = 1, b = 1
function add(a = 1, b = 1) {
  console.log(a);
  console.log(b);

  console.log(arguments[0]);
  console.log(arguments[1]);
  return a + b;
}
add(1, 2, 3);
console.clear();

// Rest 매개변수 Rest Parameters
// 4. ...파라미터명 을 통해 여러개의 파라미터를 배열로 받아올수도 있음
function sum(a, b, ...numbers) {
  console.log(a);
  console.log(b);
  console.log(numbers);
}
sum(1, 2, 3, 4, 5, 6, 7);
