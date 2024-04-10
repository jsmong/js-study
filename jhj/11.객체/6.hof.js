const fruits = ['🍌', '🍑', '🍇', '🍑'];

// 배열을 돌면서 원하는것(콜백함수)을 할때
fruits.forEach((value, index, array) => console.log(value));

// 조건에 맞는(콜백함수) 아이템을 찾을때
// find : 제일 먼저 조건에 맞는 아이템을 반환
const item1 = { name: '🍕', price: 2 };
const item2 = { name: '🍜', price: 3 };
const item3 = { name: '🐔', price: 1 };
const products = [item1, item2, item3, item2];
let result = products.find((value) => value.name === '🍜');
console.log(result);

// findIndex : 제일 먼저 조건에 맞는 아이템의 인덱스를 반환
result = products.findIndex((value) => value.name === '🍜');
console.log(result);

// 배열의 아이템들이 부분적으로 조건(콜백함수)에 맞는지 확인
result = products.some((item) => item.name === '🍜');
console.log(result);

// 배열의 아이템들이 전부다 조건(콜백함수)에 맞는지 확인
result = products.every((item) => item.name === '🍜');
console.log(result);

// 조건에 맞는 모든 아이템을 새로운 배열로
result = products.filter((item) => item.name === '🍜');
console.log(result);

console.clear();

// map 배열의 아이템들을 각각 다른 아이템으로 매핑할 수 있는, 변환해서 새로운 배열 생성
const nums = [1, 2, 3, 4, 5];
result = nums.map((item) => item * 2);
console.log(result);
result = nums.map((item) => {
  if (item % 2 === 0) {
    return item * 2;
  } else {
    return item;
  }
});
console.log(result);

// Faltmap : 중첩된 배열을 모두 펼쳐줌
result = nums.map((item) => [1, 2]);
console.log(result);
result = nums.flatMap((item) => [1, 2]);
console.log(result);

result = ['dream', 'coding'].map((text) => text.split(''));
console.log(result); // [ [ 'd', 'r', 'e', 'a', 'm' ], [ 'c', 'o', 'd', 'i', 'n', 'g' ] ]
result = ['dream', 'coding'].flatMap((text) => text.split(''));
console.log(result); // ['d', 'r', 'e', 'a', 'm', 'c', 'o', 'd','i', 'n', 'g']

// sort 배열의 아이템들을 정렬
// 문자열 형태의 오름차순으로 요소를 정렬하고, 기존의 배열을 변경
const texts = ['hi', 'abc'];
texts.sort();
console.log(texts);

const numbers = [0, 5, 4, 2, 1, 10];
numbers.sort();
console.log(numbers); // [ 0, 1, 10, 2, 4, 5 ] // 문자열로 변형한 후 sort 되기 때문
// < 0 a가 앞으로 정렬, 오름차순
// > 0 b가 앞으로 정렬, 내림차순
numbers.sort((a, b) => a - b);
console.log(numbers);

// reduce : 배열의 요소들을 접어서 값을 하나로
// result = [1, 2, 3, 4, 5].reduce((sum, value) => {
//   sum += value;
//   return sum;
// }, 0); // 0: 초기화 값
result = [1, 2, 3, 4, 5].reduce((sum, value) => (sum += value), 0);
console.log(result);
