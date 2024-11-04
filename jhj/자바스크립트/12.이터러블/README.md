# 이터러블

## 정리

### 1. 이터러블?

- Iterable(반복가능한)이란 순회가 가능한 것을 의미한다!
- 이터러블 개념을 활용하면 어떤 객체든 for..of반복문, spread연산자 적용 가능!
- 심볼 정의를 가진 객체나, 특정 함수가 Iterator를 리턴한다는 것은 순회 가능한 객체 라는 것!!
- 이터러블은 메서드 [Symbol.iteratoer] (특수내장심볼)가 구현된 객체
- 이터러블 데이터타입 : Array, String, Map, Set
- 참고) 일반 객체는 for...of 사용 불가, for..in 사용 가능

```
1. for...of가 시작되자마자 for...of는 Symbol.iterator를 호출함. (Symbol.iterator 없음 에러남)
2. 이후 for...of는 반환된 객체(이터레이터)만을 대상으로 동작함
3. for...of 다음값이 필요함, for...of는 이터레이터의 next()메서드를 호출함
4. next()의 반환값은 {done: Boolean, value: any}와 같은 형태여야함.
- done=true는 반복이 종료되었음을 의미
- done=false 일땐 value에 다음값이 저장됨
```

```js
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
```

- 참고하기
  https://ko.javascript.info/iterable

### 2. 제너레이터

### 0부터 10이하까지 숫자의 2배를 순회하는 이터레이터(반복자) 만들기

1. [Symbol.iterator](): Iteratoer {next() : {value, done}} 사용

```js
const multiple = {
  [Symbol.iterator]() {
    const max = 10;
    let num = 0;
    return {
      next() {
        return { value: num++ * 2, done: num > max };
      },
    };
  },
};

for (const num of multiple) {
  console.log(num);
}
```

2. 제너레이터 사용

- 제너레이터를 만들려면 '제너레이터 함수’라 불리는 특별한 문법 구조, function\* 필요
- 이터레이터보다 간단하게 이터러블 객체를 만들수 있다!

```js
function* multipleGenerator() {
  try {
    for (let i = 0; i < 10; i++) {
      console.log(i);
      yield i ** 2; // 사용자가 원할때까지 기다렸다 리턴
    }
  } catch (error) {
    console.log(error);
  }
}
const multiple = multipleGenerator();
let next = multiple.next();
console.log(next.value, next.done);
next = multiple.next();
console.log(next.value, next.done);
// multiple.return(); //  끝내
// multiple.throw('Error!'); //  에러던져
next = multiple.next();
console.log(next.value, next.done);
```

- 참고하기
  https://ko.javascript.info/generators

### 3. spread 연산자

- 모든 iterable 은 spread 될 수 있다.
- func(...iterable)
- [...iterable]
- {...obj}

```js
function add(a, b, c) {
  return a + b + c;
}
const nums = [1, 2, 3];
console.log(add(...nums)); // 1, 2, 3 전달

// Rest parameters
function sum(first, second, ...nums) {
  console.log(nums); // 0, 1, 2, 3
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
```

### 4. 구조 분해 할당 Desturcturing Assignment

```js
// 데이터 뭉치(그룹화)를 쉽게 만들수 있다
const fruits = ['🍑', '🍇', '🍎', '🥝'];
console.log(fruits[0]); // index가 아닌, 의미있는 변수 값을 통해 배열 값에 접근하고 싶다면.. 구조분해 할당으로 한번에 변수 명 할당 가능!
const [first, second, ...others] = fruits;
console.log(first); //🍑
console.log(second); // 🍇
console.log(...others); // 🍎 🥝

const point = [1, 2];
const [x, y, z = 0] = point;
console.log(x); // 1
console.log(y); // 2
console.log(z); // 0 (기본값)

// ** 함수로 생각해보기
function createEmoji() {
  return ['apple', '🍎'];
}
// const array = createEmoji();
// console.log(array);
const [titie, emoji] = createEmoji();
console.log(titie); // apple
console.log(emoji); // 🍎

// ** Object
const ellie = { name: 'Ellie', age: 20, job: 'FE' };
// function display(person) {
//   console.log('이름', person.name);
//   console.log('나이', person.age);
//   console.log('직업', person.job);
// }
// display(ellie);

// -> 리액트에서 이렇게 사용하쥬
function display({ name, age, job }) {
  console.log('이름', name); // 이름 Ellie
  console.log('나이', age); // 나이 20
  console.log('직업', job); // 직업 FE
}
display(ellie);

// ** obj 를 함수 안이 아니라, 변수에서도 이용 가능
const { name, age, job: occupation, pet = '강아지' } = ellie;
console.log(name); // Ellie
console.log(age); // 20
// console.log(job); // 에러남 , 이름 바꿔서
console.log(occupation); // FE
console.log(pet); // 강아지
```

## Quiz

```js
// Quiz
const prop = {
  name: 'Button',
  styles: {
    size: 20,
    color: 'balck',
  },
};
function changeColor({ name, styles: { color } }) {
  console.log(color);
}
changeColor(prop);
```

## 회고

- **이터러블**은 배열이 대표적인 **반복 가능한 객체**이며, **for...of**와 **spread연산자** 사용가능하다.
- 일반객체도 **[Symbol.iteratoer] (특수내장심볼)** 이 구현된 객체로 만들어주면 이터러블 데이터처럼(for...of, spread 연산자) 사용가능하다!
- **제너레이터**는 이터러블 객체를 보다 간단히 만들어주는 녀석이며, **function\*** 라는 독특한 구조로 사용한다..!
- 리액트에서 props를 사용하는 그 구조가 바로 구조분해할당이었다는 것..!
- 객체 안의 객체도 구조분해할당을 이용해서 할당 가능하다는 것 처음알았다..! 플젝 코드 읽는데도, 코드 짜는데도 잘 사용해볼것..!
