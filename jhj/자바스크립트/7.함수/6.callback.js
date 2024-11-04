// 콜백함수

// #1. 일급객체
// : 일반 객체처럼 모든 연산이 가능한것
// 1. 함수의 매개변수로 전달
// 2. 함수의 반환값
// 3. 할당 명령문
// 4. 동일비교 대상

// #2. 고차함수
// 인자로 함수를 받거나(콜백함수)
// 함수를 반환하는 함수

// 콜백함수
const add = (a, b) => a + b;
const mutiply = (a, b) => a * b;

// 전달된 action은 콜백함수다.
// 전달될 당시에 함수를 바로 호출해서 호출해서 반환된 값을 전달하는 것이 아니라
// 함수를 가리키고 있는 함수의 레퍼런스(참조값)이 전달되다
// 그래서 한수는 고차함수 안에서 필요한 순간에 호출이 나중에 됨
function calculator(a, b, action) {
  if (a < 0 || b < 0) {
    return;
  }
  let result = action(a, b);
  console.log(result);
  return result;
}
calculator(1, 2, add); // 호출하지 않고, 함수의 주소만 전달한다
calculator(1, 2, mutiply);
calculator(-1, -2, mutiply);
