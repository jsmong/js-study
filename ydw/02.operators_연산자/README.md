# 연산자(Operators)

## 5-1 연산자란

연산자(Operators)는 프로그래밍에서 값을 연산하거나 조작하기 위해 사용되는 기호

## 5-2 값으로 평가 될 수 있는 것들

값으로 평가될 수 있는 것들

1. 리터럴 (Literal) - 코드에서 값을 나타내는 표기법
2. 문 (Statement) - 최소 실행 단위
3. 표현식 (Expressions) - 값으로 평가 될 수 있는 문

## 5-3 산술 연산자

산술 연산자는 숫자를 다루는 데 사용

```jsx
console.log(5 + 2); // 7
console.log(5 - 2); // 3
console.log(5 * 2); // 10
console.log(5 / 2); // 2.5
console.log(5 % 2); // 1
console.log(5 ** 2); // 25
```

## 5-4 단항 연산자

단항 연산자는 하나의 피연산자에 대해 연산을 수행

```jsx
let a = 5;
console.log(-a); // -5
console.log(!true); // false
```

## 5-5 할당 연산자

할당 연산자는 변수에 값을 할당하는 데 사용

```jsx
let a = 1;
a += 2; // a = a + 2;
console.log(a); // 3
```

## 5-6 증감 연산자

증감 연산자는 변수의 값을 1씩 증가 또는 감소시킴

```jsx
let a = 0;
a++; // 1
console.log(a); // 1
```

## 5-7 비교 연산자

비교 연산자는 두 값을 비교하여 논리적 참(True) 또는 거짓(False)으로 평가

```jsx
console.log(2 > 3); // false
console.log(2 < 3); // true
```
