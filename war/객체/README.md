# 8. 객체, 복합 데이터

## 8.1 객체란?

객체(object) - 복합 데이터

- 순수 데이터 객체
- 상태와 행동 객체

서로 연관있는 속성(상태)과 행동을 묶어 주기 위해 사용

- 속성 : 데이터(프로퍼티)
- 행동 : 함수(메소드)

## 8.2 객체 리터럴

객체를 만드는 방법

- { key: value } : Object Literal
- new Object() : 클래스
- Object.create() : 클래스의 create 함수

```javascript
// key - 문자, 숫자, 문자열, 심볼
// value - 원시값, 객체(함수)
let apple = {
	'name': 'apple',
	'0': 1,
	'hello-bye': 'hello bye',
	['hello-bye2']: 'hello bye 2',
};

// 속성, 데이터에 접근
console.log(apple.name); // 마침표 표기법 - dot notation
console.log(apple['hello-bye2']); // 대괄호 표기법 - bracket notation
apple.name;
apple['name'];

// 속성 추가
apple.emoji = '이모지';
console.log(apple.emoji);
console.log(apple['emoji']);

// 속성 삭제
delete apple.emoji;
console.log(apple);
```

## 8.3 객체 동적으로 접근하기

MDN 참고 : 객체로 작업하기 / 속성 접근자

```javascript
const obj = {
	name: '엘리',
	age: 20,
};

// 코딩하는 시점에, 정적으로 접근이 확정된다.
obj.name;
obj.age;

// 코딩하는 시점에, 정해지지 않았지만
// 동적으로 속성에 접근하고 싶을 때 - 대괄호 표기법 사용!
function getValue(obj, key) {
	return obj[key];
}
console.log(getValue(obj, 'name'));

function addKey(obj, key, value) {
	obj[key] = value;
}
addKey(obj, 'job', 'engineer');
console.log(obj);

function deleteKey(obj, key) {
	delete obj[key];
}
```

## 8.4 객체 축약 버전

키의 이름과 값을 참조하는 변수의 이름이 동일할 경우 축약이 가능하다.

```javascript
const x = 0;
const y = 0;

// const coordinate = { x: x, y: y };
// 축약 버전
const coordinate = { x, y };
console.log(coordinate);

function makeObj(name, age) {
	// return {
	//   name: name,
	//   age: age,
	// };

	// 축약 버전
	return {
		name,
		age,
	};
}
```

## 8.6 생성자 함수

상태와 행동 객체

```javascript
const apple = {
	name: 'apple',
	display: function () {
		console.log(`${this.name}은 사과`);
	},
};
const orange = {
	name: 'orange',
	display: function () {
		console.log(`${this.name}은 오렌지`);
	},
};
console.log(apple);
console.log(orange);

console.clear();

// 생성자함수 - 정해진 틀 안에서 원하는 객체 생성이 가능하다. (템플릿)
// 대문자로 시작
// this - 객체 자기자신
function Fruit(name, emoji) {
	this.name = name;
	this.emoji = emoji;
	this.display = () => {
		console.log(`${this.name}은 ${this.emoji}`);
	};
	// return this; // 생략 가능 - 생성자 함수에서는 this가 자동으로 리턴된다.
}

const apple2 = new Fruit('apple', '사과');
const orange2 = new Fruit('orange', '오렌지');

console.log(apple2);
console.log(orange2);
console.log(apple2.name);
console.log(apple2.emoji);
apple2.display();
```

## 회고

- 강의를 듣고 느낀점 작성하기
