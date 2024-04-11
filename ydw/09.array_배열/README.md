# 배열(Array)

## 1. 배열 생성

- 일반적으로 배열을 동일한 메모리 크기를 가지며, 연속적으로 이어져 있어야함
- 하지만 자바스크립트에서의 배열은 연속적으로 이어져 있지 않고 오브젝트와 유사
- 자바스크립트의 배열은 일반적인 배열의 동작을 흉내낸 특수한 객체다!
- 이걸 보완하기 위해서 타입이 정해져 있는 타입 배열이 있음 (Typed Collections)

```jsx
// static 함수
array = Array.of(1, 2, 3, 4, 5);
console.log(array);

const anotherArray = [1, 2, 3, 4];
console.log(anotherArray);

array = Array.from(anotherArray);
console.log(array);

array = Array.from({
  0: '안',
  1: '녕',
  length: 2,
});
console.log(array);
```

## 2. 하면 안되는것

```jsx
// const fruits = ['🍌', '🍎', '🍇', '🍑'];
// 추가, 삭제 - 좋지 않은 방식
fruits[fruits.length] = '🍓';
console.log(fruits);

delete fruits[1];
console.log(fruits);
```

## 3. 사용가능한 함수

### indexOf()

기능: 배열에서 지정된 값이 처음 나타나는 인덱스를 찾음

```jsx
const fruits = ['🍌', '🍎', '🍇', '🍑'];
console.log(fruits.indexOf('🍎')); // Output: 1
```

### includes()

기능: 배열의 요소 중 특정 값이 포함되어 있는지 여부를 결정하고 적절하게 true 또는 false를 반환

```jsx
const fruits = ['🍌', '🍎', '🍇', '🍑'];
console.log(fruits.includes('🍎')); // Output: true
```

### push()

기능: 배열 끝에 하나 이상의 요소를 추가하고 배열의 새 길이를 반환

```jsx
const fruits = ['🍌', '🍎', '🍇'];
fruits.push('🍑');
console.log(fruits); // Output: ['🍌', '🍎', '🍇', '🍑']
```

### pop()

기능: 배열에서 마지막 요소를 제거하고 해당 요소를 반환

```jsx
const fruits = ['🍌', '🍎', '🍇', '🍑'];
const lastItem = fruits.pop();
console.log(fruits); // Output: ['🍌', '🍎', '🍇']
console.log(lastItem); // Output: '🍑'
```

### unshift()

기능: 배열의 시작 부분에 하나 이상의 요소를 추가하고 배열의 새 길이를 반환

```jsx
const fruits = ['🍌', '🍎', '🍇'];
fruits.unshift('🍓');
console.log(fruits); // Output: ['🍓', '🍌', '🍎', '🍇']
```

### shift()

기능: 배열에서 첫 번째 요소를 제거하고 해당 요소를 반환

```jsx
const fruits = ['🍌', '🍎', '🍇'];
const firstItem = fruits.shift();
console.log(fruits); // Output: ['🍎', '🍇']
console.log(firstItem); // Output: '🍌'
```

### splice()

기능: 기존 요소를 제거 또는 교체하거나 새 요소를 제자리에 추가하여 배열의 내용을 변경

```jsx
const fruits = ['🍌', '🍎', '🍇', '🍑'];

const deleted = fruits.splice(1, 2, '🍓', '🍊');

console.log(fruits); // Output: ['🍌', '🍓', '🍊', '🍑']
console.log(deleted); // Output: ['🍎', '🍇']
```

### slice()

기능: 배열 일부의 얕은 복사본을 처음부터 끝까지(끝은 포함되지 않음) 선택된 새 배열 객체로 반환

```jsx
const fruits = ['🍌', '🍎', '🍇', '🍑'];

const newFruits = fruits.slice(1, 3);

console.log(newFruits); // Output: ['🍎', '🍇']
console.log(fruits); // Output: ['🍌', '🍎', '🍇', '🍑']
```

### concat()

기능: 여러 개의 배열을 결합

```jsx
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2); // 새로운 배열을 생성하고 기존 배열을 건드리지 않음
console.log(arr1); // [1, 2, 3]
console.log(arr2); // [4, 5, 6]
console.log(arr3); // [1, 2, 3, 4, 5, 6]
```

### reverse()

기능: 배열 요소의 순서를 뒤집기

```jsx
const fruits = ['🍌', '🍎', '🍇', '🍑'];
const arr4 = arr3.reverse(); // 원본 배열을 수정하여 뒤집은 결과를 반환
console.log(arr4); // [6, 5, 4, 3, 2, 1]
console.clear();
```

### flat()

기능: 중첩 배열을 평평하게 만들기

```jsx
let arr = [
  [1, 2, 3],
  [4, [5, 6, [3, 4]]],
];
console.log(arr); // [[1, 2, 3], [4, [5, 6, [3, 4]]]]
console.log(arr.flat()); // [1, 2, 3, 4, 5, 6, [3, 4]]
console.log(arr.flat(2)); // [1, 2, 3, 4, 5, 6, 3, 4]
console.log(arr.flat(3)); // [1, 2, 3, 4, 5, 6, 3, 4]
arr = arr.flat(3); // arr를 3단계 평탄화한 배열로 할당
```

### fill()

기능: 배열의 요소를 지정된 값으로 채우기

```jsx
arr.fill(0); // 배열을 0으로 채움 (원본 배열을 수정함)
console.log(arr); // [0, 0, 0, 0, 0, 0, 0, 0]
arr.fill('s', 1, 3); // 인덱스 1부터 3까지 's'로 채움
console.log(arr); // [0, 's', 's', 0, 0, 0, 0, 0]
arr.fill('a', 1); // 인덱스 1부터 끝까지 'a'로 채움
console.log(arr); // [0, 'a', 'a', 'a', 'a', 'a', 'a', 'a']
```

### join()

기능: 배열을 문자열로 합치기

```jsx
let text = arr.join(); // 배열 요소를 문자열로 연결 (기본 구분자는 쉼표)
console.log(text); // "0,a,a,a,a,a,a,a"
text = arr.join(' | '); // 구분자를 '|'로 지정하여 문자열로 연결
console.log(text); // "0 | a | a | a | a | a | a | a"
```

## 4. 메모리 중요한 포인트

- 얕은 복사(Shallow Copy)
- 객체의 얕은 복사는 메모리 주소를 전달한다.
- 자바스크립트에서 복사할 때는 얕은 복사가 이루어진다.

```jsx
const pizza = {
  name: '🍕',
  price: 2,
  owner: { name: 'Ellie' },
};
const ramen = { name: '🍜', price: 3 };
const sushi = { name: '🍣', price: 1 };
const store1 = [pizza, ramen];
const store2 = Array.from(store1);
```

## 5. 고차함수

고차함수는 함수를 인자로 받거나 함수를 반환하는 함수이다.

```jsx
const fruits = ['🍌', '🍓', '🍇', '🍓'];

// forEach: 배열의 각 요소에 대해 콜백 함수를 실행
fruits.forEach((value, index, array) => {
  console.log(value);
});

// find: 배열에서 조건을 만족하는 첫 번째 요소 반환
const result = fruits.find((value) => value === '🍓');
console.log(result);

// some: 배열의 아이템 중 하나라도 조건을 만족하면 true 반환
const isSome = fruits.some((item) => item === '🍓');
console.log(isSome);

// every: 배열의 모든 아이템이 조건을 만족하면 true 반환
const isEvery = fruits.every((item) => item === '🍓');
console.log(isEvery);

// filter: 배열에서 조건을 만족하는 모든 요소를 배열로 반환
const filtered = fruits.filter((item) => item === '🍓');
console.log(filtered);
```

## Quiz

### 퀴즈2-1.

주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수 만들기

```jsx
function replace(array, from, to) {
  return array.map((item) => (item === from ? to : item));
}
const array = ['🍌', '🍎', '🍇', '🍓'];
const result = replace(array, '🍓', '🥝');
console.log(result);
```

### 퀴즈2-2.

배열과 특정한 요소를 전달받아, 배열 안에 그 요소가 몇 개나 있는지 카운트하는 함수 만들기

```jsx
function count(array, item) {
  return array.filter((value) => value === item).length;
}

console.log(count(['🍌', '🥝', '🍇', '🥝'], '🥝'));
```

### 퀴즈2-3.

두 개의 배열을 전달받아, 배열1의 아이템 중 배열2에 존재하는 아이템만 담은 배열 반환

```jsx
function match(input, search) {
  return input.filter((item) => search.includes(item));
}
console.log(
  match(['🍌', '🥝', '🍇'], ['🍌', '🍓', '🍇', '🍓'])
);
```

### 퀴즈2-4.

5 이상의 숫자들의 평균 구하기

```jsx
const nums = [3, 16, 5, 25, 4, 34, 21];

const result2 = nums
  .filter((num) => num > 5)
  .reduce(
    (avg, num, _, array) => avg + num / array.length,
    0
  );
console.log(result2);
```
