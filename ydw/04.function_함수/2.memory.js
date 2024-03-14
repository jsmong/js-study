function add(a, b) {
  console.log(a);
  console.log(b);
  return a + b;
}

const sum = add;
// 함수이름 자체는 함수를 가르키고 있는 변수와 동일하다

// console.log(sum(1, 2));
// console.log(add(1, 2));

console.log(add());
// ❌ 인자를 전달하지 않으면
// a = undefined
// b = undefined
// add() = NaN
