## 새로 알게된 것 & 잊고 있던것 정리

## 3. return.js

1. 리턴값을 명시적으로 적지 않으면 자동으로 undefined 반환

```jsx
function add(a, b) {
  return a + b;
  // reutrn undefined
  // 리턴값을 명시적으로 적지 않으면 자동으로 undefined 반환
}
const result = add(1, 2);
console.log(result);
```

2. return 을 함수 중간에 하게 되면 함수가 종료됨

- 사용예 : 조건이 맞지 않는 경우 함수 도입부분에서 함수를 일찍이 종료함

```js
function print(num) {
  if (num < 0) {
    return; // return undefined; 약자
    // 함수를 일찍 종료
  }
  console.log(num);
}
print(12); // 12
print(-12); // 아무것도 출력하지 않음
```

## 4. parameter.js

1. 매개변수의 기본값은 무조건 undefined

```js
function add(a, b) {
  console.log(a); // undefined
  console.log(b); // undefined
  return a + b;
}
add(); // NaN (undefined + undefined)
```

2. 매개변수의 정보는 함수 내부에서 접근이 가능한 arguments 객체에 저장됨

```js
function add(a, b) {
  console.log(arguments); // [1, 2, 3]
  console.log(arguments[0]); // 1
  console.log(arguments[1]); // 2
  return a + b; // 3
}
add(1, 2, 3);
```

3. 매개변수 기본값 작성법 : (a = 1, b = 1)

```js
function add(a = 1, b = 2) {
  return a + b;
}
add(1); // 3 (1 + 2)
```

4. Rest 매개변수 Rest Parameters

```js
// ...파라미터명 을 통해 여러개의 파라미터를 배열로 받아올수도 있음
function sum(a, b, ...numbers) {
  console.log(a); // 1
  console.log(b); // 2
  console.log(numbers); // [3, 4, 5, 6, 7]
}
sum(1, 2, 3, 4, 5, 6, 7);
```

## 5. expression.js

### 1. 함수의 다양한 표현들

1. 함수 선언문

```js
function name() {}
```

2. 함수 표현식

```js
const name = function () {};
```

3. 화살표 함수

```js
// 0. 기본형
const name = () => {};

// 1. 풀버전
add = (a, b) => {
  return a + b;
};

// 2. 축약버전
// 바로 리턴하면 {}, return 생략 가능
add = (a, b) => a + b;
```

4. IIF (Immedicately-Invoked Function Expression, 즉각호출함수)

```js
(function run() {
  console.log('👋');
})();
```

### 콜백함수를 향한 첫걸음

- 함수도 객체(object)이기 때문에, 다른 변수에 할당하거나 재할당 할 수 있다.

## 6. callback

### 1. 일급객체?

- 일반 객체처럼 모든 연산이 가능한것

1. 함수의 매개변수로 전달
2. 함수의 반환값
3. 할당 명령문
4. 동일비교 대상

### 2. 고차함수

- 인자로 함수를 받거나(콜백함수) 함수를 반환하는 함수

### 3. 콜백함수

- 인자로 다른 함수에 전달되는 함수

```js
// 1. 콜백함수
const add = (a, b) => a + b;
const mutiply = (a, b) => a * b;

// 2. 고차함수
// action : 콜백함수
// 전달될 당시에 함수를 바로 호출해서 호출해서 반환된 값을 전달하는 것이 아니라
// 함수를 가리키고 있는 함수의 레퍼런스(참조값)이 전달되다
// 그래서 콜백함수는 고차함수 안에서 필요한 순간에 호출이 나중에 됨
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
```

## 8. immutability.js

### 이 강에서 중요했던 점

- 함수 내부에서 외부로부터 주어진 인자의 값을 변경하는 것은 절대 안됌!!!!!!
- 상태 변경이 필요한 경우에는, 새로운 상태를(오브젝트, 값)을 만들어서 반환해야함
- (의문) 근데 vue나 React 사용하면 인자의 값을 변경하는게 일상인데... 안티패턴인가??

```js
// 원시값 - 값에 의한 복사
// 객체값 - 참조에 의한 복사 (메모리 주소)

// Bad!!
function displayObj(obj) {
  obj.name = 'Anna'; // 외부로부터 주어진 인자(오브젝트)를 내부에서 변경 절대 안돼!!
  console.log(obj);
}
const obj = { name: 'Jang' };
// displayObj(obj);

// Better
function changeName(obj) {
  // 이름부터 변경하는 느낌을 주도록!
  return { ...obj, name: 'Anna' };
  // 반환할때는 새로운 오브젝트 만들기!
}
```
