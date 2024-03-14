# 함수(Function)

함수는 자바스크립트에서 재사용 가능한 코드 블록으로, 특정 작업을 수행하고 결과를 반환할 수 있음

- 재사용성: 동일한 작업을 반복하지 않고 재사용할 수 있습니다.
- 모듈화: 프로그램을 구성하는 모듈의 단위로 사용될 수 있습니다.
- 가독성: 코드의 가독성을 향상시킵니다.
- 유지보수: 코드를 쉽게 유지보수할 수 있도록 합니다.

## 7-2 함수의 기본

```jsx
function sum(num1, num2, num3) {
  return num1 + num2 + num3;
}
const result = sum(1, 2, 3);
console.log(result);
```

## 7-3 함수와 메모리

```jsx
function add(a, b) {
  return a + b;
}

const sum = add;
console.log(sum(1, 2));
console.log(add());
```

## 7-4 반환이란

```jsx
function add(a, b) {
  return;
}

const result = add(1, 2);
console.log(result);
```

## 7-5 함수의 인자

```jsx
function add(a = 1, b = 1) {
  console.log(arguments);
  console.log(arguments[1]);
  return a + b;
}

add();
```

## 7-6 함수의 표현식

```jsx
let add = function (a, b) {
  return a + b;
};
console.log(add(1, 2));

add = (a, b) => a + b;
console.log(add(1, 2));
```

## 7-7 콜백함수

```jsx
let add = function (a, b) {
  return a + b;
};
console.log(add(1, 2));

add = (a, b) => a + b;
console.log(add(1, 2));
```
