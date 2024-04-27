# 12. 이터러블, 제너레이터

## 12.1 이터러블이란?

- Iteration : 반복, 순회
- Protocol : 규격, 약속, 인터페이스

### Iteration Protocol

- 순회가 가능하게 하기 위해 따라야 하는 규칙
- 이 규칙을 따르는 객체에서 for...of, spread (순회가 가능한 연산자)의 사용이 가능
- 이 규칙을 따르는 자료구조는 Array, String, Map, Set

**자바스크립트에서 순회가 가능한 객체가 되기 위해서 두 가지 프로토콜을 따라야 한다.**

1. Iterable 프로토콜

- 객체의 &#91;Symbol.iterator&#93;() 함수를 호출했을 때 Iterable 프로토콜을 따르는 객체(Iterator 프로토콜)를 리턴

2. Iterator 프로토콜

- Iterable 프로토콜에서 반환된 객체
- 객체의 next() 함수를 호출했을 때 순차적으로 다음값을 리턴

## 12.2 이터러블 살펴보기

```javascript
// Iterable 하다. -> 순회가 가능하다.
// [Symbol.iterator](): IterableIterator;
// 심볼 정의를 가진 객체나, 특정한 함수가 Iterator를 리턴 -> 순회 가능한 객체
// 순회가 가능하면 -> for..of, spread 사용 가능

const array = [1, 2, 3];
for (const item of array) {
	console.log(item);
}

// Iterator를 리턴하는 함수
for (const item of array.values()) {
	console.log(item);
}
for (const item of array.keys()) {
	console.log(item);
}
for (const item of array.entries()) {
	console.log(item);
}
```

## 12.3 이터러블 자세히 뜯어보기

```javascript
const array = [11, 22, 33];
const iterator = array.values();

// next()는 결과 객체를 리턴
// value : 값, done : 반복이 끝났는지 여부
console.log(iterator.next()); // { value: 11, done: false }
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value); // undefined
console.log(iterator.next().done); // true

while (true) {
	const item = iterator.next();
	if (item.done) break;
	console.log(item.value);
}
```

## 12.5 제너레이터란?

- iterator 간단하게 작성

```javascript
iterator(): {
	next(): 다음값
}
```

- Generator
  - Iteration Protocol을 준수하면서 **더 간편한 방식으로 Iterator 작성** 가능
  - 생성기 (값을 생성할 수 있는...의 의미)
  - 작성법 : function 뒤에 \* 키워드 작성

```javascript
function* multipleGenerator() {
	try {
		for (let i = 0; i < 10; i++) {
			console.log(i);
			yield i ** 2;
			// [ yield ]
			// 사용자가 원할 때까지 기다린 후 하나씩 리턴
			// next 함수가 호출되어야 다음 코드 실행
		}
	} catch (error) {
		console.log(error);
	}
}

const multiple = multipleGenerator();
let next = multiple.next();
console.log(next.value, next.done);

// multiple.return(); // generator 종료
multiple.throw('Error ~~'); // multiple 내부에 error 던지기

next = multiple.next();
console.log(next.value, next.done);
```

## 12.6 스프레드 연산자

Spread 연산자(전개구문)

- 모든 Iterable은 Spread 될 수 있다.
- 순회가 가능한 모든것들은 펼쳐질 수 있다.
- EcmaScript 2018 (최신문법)

### 사용

- func(...iterable)
- &#91;...iterable&#93;
- {...obj}

```javascript
function add(a, b, c) {
	return a + b + c;
}
const nums = [1, 2, 3];
console.log(add(...nums));
```

- Rest parameters

```javascript
function sum(first, second, ...nums) {
	console.log(nums);
}
sum(1, 2, 0, 1, 2, 3, 4, 5);
```

- Array Concat

```javascript
const fruits1 = ['사과', '키위'];
const fruits2 = ['딸기', '바나나'];

// let arr = fruits1.concat(fruits2);
let arr = [...fruits1, '딸기', ...fruits2];
console.log(arr);
```

- Object

```javascript
const ellie = { name: 'Ellie', age: 20, home: { address: 'home' } };
const updated = {
	...ellie,
	job: 's/w engineer',
};
console.log(ellie); // 기존의 object는 변경되지 않는다.
console.log(updated);

// ellie object의 home object는 얕은 복사가 된다.
updated.home.address = 'my home';
console.log(ellie.home);
console.log(updated.home);
```

## 12.7 구조분해 할당

구조분해할당(Destructuring Assignment)

- 데이터의 그룹화를 쉽게 만들 수 있다.

```javascript
const fruits = ['사과', '키위', '딸기', '바나나'];

// 배열의 요소를 의미있는 이름으로 전달
const [first, second, ...others] = fruits;
console.log(first);
console.log(second);
console.log(others);

const point = [1, 2];
const [y, x, z = 0] = point;
console.log(x, y, z);

function createEmoji() {
	return ['apple', '사과'];
}
const [title, emoji] = createEmoji();
console.log(title);
console.log(emoji);

const ellie = { name: 'Ellie', age: 20, job: 's/w engineer' };
function display({ name, age, job }) {
	// console.log('이름', person.name);
	console.log('이름', name);
	console.log('나이', age);
	console.log('직업', job);
}
display(ellie);

const { name, age, job: occupation, pet = '강아지' } = ellie;
console.log(name);
console.log(age);
console.log(occupation); // key를 다른 이름으로 변경
console.log(pet);
```

## Quiz 01

iterable quiz

```javascript
// [Symbol.iterator](): Iterator{ next(): {value, done} };
// 0부터 10이하까지 숫자의 2배를 순회하는 이터레이터(반복자) 만들기
// 0, 1, 2, 3 ..., 9
// 0, 2, 4, 6 ..., 18

const multiple = {
	[Symbol.iterator]() {
		let i = 0;

		return {
			next() {
				if (i < 10) {
					const result = { value: i * 2, done: false };
					i++;
					return result;
				}
				return { value: undefined, done: true };
			},
		};
	},
};

for (const num of multiple) {
	console.log(num);
}
```

## Quiz 02

destructure quiz

```javascript
// Quiz
// 인자 만들기

const prop = {
	name: 'Button',
	styles: {
		size: 20,
		color: 'black',
	},
};

function changeColor({ name, styles: { size, color } }) {
	console.log(color);
}
changeColor(prop);

// [ 중첩된 구조분해할당 ]
// 참고 : https://ko.javascript.info/destructuring-assignment
// styles는 접근 불가능 (변수 X)
```
