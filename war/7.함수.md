# 7. 함수, 프로그래밍의 시작

## 7.1 함수란?

함수의 이름은 함수를 참조하고 있다.

## 7.4 반환이란?

- return을 명지하지 않을 경우

```javascript
// return을 명시하지 않으면 자동으로 undefined가 반환된다.
function add(a, b) {
	// return a + b;
	return undefined;
}
const result = add(1, 2);
console.log(result);
```

- 함수 즉시 종료

```javascript
// return을 함수 중간에 작성하면 함수가 즉시 종료된다.
// 사용예: 조건이 맞지 않는 경우 함수의 도입부분에서 함수를 종료할 수 있다.
function print2(num) {
	if (num < 0) {
		return; // return undefined; 함수 즉시종료
	}
	console.log(num);
}
print2(12);
print2(-12);
```

## 7.5 함수의 인자

- 매개변수의 기본값과 arguments

```javascript
// 매개변수의 기본값은 undefined
// 매개변수의 정보는 함수 내부에서 접근이 가능한 arguments 객체에 저장된다.
// 매개변수 기본값 설정 Default Parameters (a = 1, b = 1)
function add(a, b) {
	console.log(a);
	console.log(b);
	console.log(arguments); // { '0': 1, '1': 2, '2': 3 }
	console.log(arguments[0]);
	return a + b;
}
add(); // (undefined, undefined)
add(1, 2, 3);
```

- Rest 매개변수

```javascript
// Rest 매개변수 (Rest Parameters)
// 인자의 개수가 정확하지 않을 경우 배열로 받을 수 있다.
function sum(a, b, ...numbers) {
	console.log(a);
	console.log(b);
	console.log(numbers);
}
sum(1, 2, 3, 4, 5, 6, 7);
```

## 7.6 함수 표현식

```javascript
// 함수 선언문 function name() { }
// 함수 표현식 const name = function () { } -> 값으로 평가될 수 있는 표현식
// 함수는 객체이므로 변수에 할당, 재할당이 가능하다.
let add = function (a, b) {
	return a + b;
};
console.log(add(1, 2));

// 화살표 함수 const name = () => { }
add = (a, b) => {
	return a + b;
};
// add = (a, b) => a + b; // return 키워드 생략
console.log(add(1, 2));

// 생성자 함수 const object = new Function(); // 객체편에서 다룸

// 함수는 값으로 평가될 수 있는 표현식이다.
// IIFE (Immediately-Invoked Function Expressions) - 즉각 실행
(function run() {
	console.log('안녕');
})();
```

## 7.7 콜백함수

- 일급객체(first-class object) : 일반 객체처럼 모든 연산이 가능한 것

  - 함수의 매개변수로 전달
  - 함수의 반환값
  - 할당 명령문
  - 동일 비교 대상

- 일급함수(first-class function) : 함수가 일반 객체처럼 모든 연산이 가능한 것

  - 함수의 매개변수로 전달
  - 함수의 반환값
  - 할당 명령문 (함수 표현식 할당)
  - 동일 비교 대상

- 고차함수(Higher-order function)
  - 인자로 함수를 받거나 (콜백함수)
  - 함수를 반환하는 함수를 고차함수

```javascript
// 콜백함수
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

// 전달된 action은 콜백함수이다.
// 전달될 당시에 함수를 바로 호출해서 반환된 값을 전달하는 것이 아닌
// 함수를 가리키고 있는 함수의 레퍼런스(참조값)가 전달된다.
// 함수는 고차함수 안에서 필요한 순간에 호출된다.

// 고차함수
function calculator(a, b, action) {
	if (a < 0 || b < 0) return;

	let result = action(a, b);
	console.log(result);
	return result;
}

calculator(1, 2, add); // add 함수의 참조값 전달 (호출X)
calculator(1, 2, multiply);
```

## 7.10 불변성

```javascript
// 함수 내부에서 외부로부터 주어진 인자의 값을 변경하는 것은 X
// 상태 변경이 필요한 경우, 새로운 상태를(object, 값) 만들어서 반환해야 한다.
// 원시값 - 값에 의한 복사
// 객체값 - 참조에 의한 복사 (메모리 주소 전달) -> 동일한 object를 가리킨다.

// 원시값 변경
function display(num) {
	num = 5; // X
	console.log(num);
}
const value = 4;
display(value);
console.log(value);

// 객체값 변경 (심각한 문제 발생)
function displayObj(obj) {
	obj.name = 'Bob'; // 외부로부터 주어진 인자(object)를 내부에서 변경하지 말아야 한다.
	console.log(obj);
}
const ellie = { name: 'Ellie' };
displayObj(ellie);
console.log(ellie);

// 반환할 때는 새로운 object 만들기
function changeName(obj) {
	return { ...obj, name: 'New' };
}
```
