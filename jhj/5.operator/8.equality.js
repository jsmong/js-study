// 동등 비교 관계 연산자 (Equality Operators)
// == 값이 같음
// != 값이 다름
// === 값 && 타입이 같음
// !==  값 && 타입 다름
console.log(2 == 2);
console.log(2 != 2);
console.log(2 != 2);
console.log(2 == 3);
console.log(2 == '2'); // true
console.log(2 === '2'); // false  // 이게 좋아용
console.log(true == 1); // true
console.log(true === 1); // false
console.log(false == 0); // true
console.log(false === 0); // false
console.clear();

// obeject 비교하기
const obj1 = {
  name: 'js',
};
const obj2 = {
  name: 'js',
};
console.log(obj1 == obj2); // false : 메모리 주소값이 다르자네~
console.log(obj1 === obj2); // false
console.log(obj1.name == obj2.name); // true
console.log(obj1.name === obj2.name); // true

let obj3 = obj2; // 동일한 메모리 주소를 가지고 있어~
console.log(obj2 == obj3); // true
console.log(obj2 === obj3); // true
