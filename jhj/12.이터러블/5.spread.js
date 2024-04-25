// Spread 연산자, 전개구문
// 모든 Iterable은 Spread 될 수 있다
// 순회가 가능한 모든 것을은 촤르륵 펼쳐질 수 있다.
// func(...iterable)
// [...iterable]
// {...obj}
// ES2018 도입
function add(a, b, c) {
  return a + b + c;
}
const nums = [1, 2, 3];
console.log(add(...nums)); // 1, 2, 3 전달

// Rest parameters
function sum(first, second, ...nums) {
  console.log(nums);
}
sum(1, 2, 0, 1, 2, 3);

// Array Concat
const fruits1 = ['🥝', '🍎'];
const fruits2 = ['🍇', '🍑'];
// 방법1
let arr = fruits1.concat(fruits2);
console.log(arr); // [ '🥝', '🍎', '🍇', '🍑' ]
// 방법2
let arr2 = [...fruits1, ...fruits2];
console.log(arr2); // [ '🥝', '🍎', '🍇', '🍑' ]

// Object
const ellie = { name: 'Ellie', age: 20 };
const updated = {
  ...ellie,
  job: 'FE',
};
console.log(updated); // { name: 'Ellie', age: 20, job: 'FE' }
console.log(ellie); // { name: 'Ellie', age: 20 } // 기존 배열은 변경되지 않음

const ellie2 = { name: 'Ellie', age: 20, home: { address: 'Korea' } };
const updated2 = {
  ...ellie,
  job: 'FE',
};
console.log(updated2);
console.log(ellie2);
