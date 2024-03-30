// 논리연산자 Logical Operator
// && 그리고
// || 또는
// 단축평가
const obj1 = { name: '🐶' };
const obj2 = { name: '😺', owner: '현정' };
const obj3 = {}; // 빈 객체도 true임

if (obj1 && obj2 && obj3) {
  console.log('셋다 true');
}

let result = obj1 && obj2;
// 1. obj1 은 true로 평가
// 2. obj2 은 true로 평가
// 3. result = obj2로 할당 --> 평가되지 않고 할당된다!!
console.log(result); // 출력값 : { name: '😺', owner: '현정' }

let result2 = obj1 || obj2;
// 1. obj1 은 true로 평가 --> 뒤에까지 볼 필요 없음
// 2. result2 = obj1 할당
console.log(result2); // 출력값 : { name: '🐶' }

console.clear();

// 활용예 1.
// && 조건이 truthy 일때 && 무언가를 해야 할 경우
// || 조건이 falshy 일때 || 무언가를 해야할 경우
// 1) 주인이 있는 경우, 주인을 바꿈
function changeOwner(animal) {
  if (!animal.owner) {
    throw new Error('주인이 없음');
  }
  animal.owner = '바뀐주인';
}
// 2) 주인이 없는 경우, 새로운 주인 배정
function makeNewOwner(animal) {
  if (animal.owner) {
    throw new Error('주인이 있음');
  }
  animal.owner = '새로운주인';
}

// obj1.owner true 일때 함수 실행
obj1.owner && changeOwner(obj1); // { name: '🐶' }
obj2.owner && changeOwner(obj2); // { name: '😺', owner: '바뀐주인' }
console.log(obj1);
console.log(obj2);

// obj1.owner false 일때 함수 실행
obj1.owner || makeNewOwner(obj1); // { name: '🐶', owner: '새로운주인' }
obj2.owner || makeNewOwner(obj2); // { name: '😺', owner: '바뀐주인' }
console.log(obj1);
console.log(obj2);

// 활용예 2.
// null 또는 undefined 인 경우를 확인할 때
let item;
const price = item && item.price; // item이 있고, true 라면 할당해줘
console.log(price); // undefined

let item2 = { price: 1 };
const price2 = item2 && item2.price; // item이 있고, true 라면 할당해줘
console.log('???', price2); // 1

// 활용예 3.
// 기본값을 설정
// || 값이 falshy한 경우 설정(할당): 0, -0, null, undefined, ''
function print(message) {
  const text = message || 'Hello'; // message 가 falshy값일때 'Hello'를 할당해줘
  console.log(text);
}
print(); // Hello
print(undefined); // Hello
print(0); // Hello
print(''); // Hello

// cf) default  parameter
// 전달하지 않거나, undefined 인 경우만 먹힘 --> null, 0 은 그대로 출력
function print2(message = 'Hi') {
  console.log(message);
}
print2(); // Hi
print2(undefined); // Hi
print2(0); // 0
print2(''); //
