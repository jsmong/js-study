// Iterable 하다 = 순회가 가능하다
// [Symbol.iteratoer](): Iterator
// 심볼 정의를 가진 객체나, 특정 함수가 Iterator를 리턴한다는 것은
// 순회 가능한 객체이다 라는 것을 알 수 있다
// 순회가 가능하면 뭐를 할수 있는지?
// >> for..of , spread 연산자 사용가능
// 일반 객체는 for...of 사용 불가, for..in 사용 가능

const array = [1, 2, 3];
for (const item of array) {
  console.log(item);
}
console.log('============================');
for (const item of array.values()) {
  console.log(item);
}
console.log('============================');
for (const item of array.entries()) {
  console.log(item);
}
console.log('============================');
// 배열은 순회가 가능하여, for...of사용하면 배열 안 아이템을 하나하나 순회하며 리턴 가능

const obj = { 0: 1, 1: 2 };
// for (const item of obj) {
//   console.log(obj);
//   // 에러남 - obj is not iterable
// }
for (const item in obj) {
  // key 출력
  console.log(obj);
}

console.clear();

// iterator를 수동적으로 사용하는 방법!
const iterator = array.values();
// for (const item of iterator) {
//   console.log(item);
// }

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// for...of 대신 iterator.next()를 활용할 수 도 있다
while (true) {
  const item = iterator.next();
  if (item.done) break;
  console.log(item.value);
}
