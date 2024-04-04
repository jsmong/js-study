# 10. 유용한 객체들

## 10.1 빌트인 객체란?

- 자바스크립트의 내장 객체 (Built-in Objects)
- 런타임 환경에서 제공해주는 호스트 객체 (Host Objects)
  - 브라우저 런타임 환경 : 브라우저에서 제공하는 Browser APIs
  - 노드 런타임 환경 : 노드에서 제공하는 Node APIs
- 사용자 정의 객체

## 10.2 래퍼 객체

자바스크립트의 래퍼 객체 (Wrapper Object)  
원시 값을 필요에 따라 관련된 빌트인 객체로 변환한다.

- number 원시 타입 -> Number 타입 객체
- string 원시 타입 -> String 타입 객체
- boolean 원시 타입 -> Boolean 타입 객체

```javascript
const number = 123; // number 원시 타입
// number 원시타입을 감싸고 있는 Number 타입 객체(클래스)로 감싸진다.
console.log(number.toString());
console.log(number); // number 원시 타입

const text = 'text'; // string 문자열 원시 타입
console.log(text);
text.length; // String 타입 객체
text.trim();
```

## 10.3 글로벌 객체

- 자바스크립트의 this : 전역 객체
  - 브라우저의 this(globalThis) : Window 객체
  - 노드의 this : 현재 모듈에 있는 정보를 출력

```javascript
// 자바스크립트의 this : 전역 객체
console.log(globalThis);
console.log(this); // {}

console.log(Infinity);
console.log(NaN);
console.log(undefined);

// 자바스크립트 전역 함수
eval('const num = 2; console.log(num);'); // 자바스크립트 코드로 평가
console.log(isFinite(1));
console.log(isFinite(Infinity));
console.log(parseFloat('12.43'));
console.log(parseInt('12.43'));
console.log(parseInt('11'));

// URL (URI : Uniform Resource Identifier 하위 개념)
// 리소스를 나타낼 수 있는 고유한 주소, 아이디
// 아스키 문자로만 구성되어야 한다.
// 한글, 특수문자는 이스케이프 처리를 해야 한다.
const URL = 'https://드림코딩.com';
const encoded = encodeURI(URL);
console.log(encoded);
const decoded = decodeURI(encoded);
console.log(decoded);

// 부분적인 것은 Component 이용
const part = '드림코딩.com';
console.log(encodeURIComponent(part));
```

## 10.4 불리언 함수들

```javascript
// Boolean Object
const isTrue = true;
// const isTrue = new Boolean(true); // 메모리의 과한 소비
console.log(isTrue.valueOf());
```

## 10.5 숫자 함수들

```javascript
const num1 = 123;
const num2 = new Number(123);
console.log(typeof num1);
console.log(typeof num2); // object
```

### Static Properties, Method

```javascript
console.log(Number.MAX_VALUE);
// 정수에서 사용할 수 있는 최고의 값
// e+308 : 10의 308승
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.NaN);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);
```

- 지수 표기법 : 매우 크거나 작은 숫자를 표기할 때 사용, 10의 n승으로 표기

```javascript
const num3 = 102;
console.log(num3.toExponential());
```

- 반올림하여 문자열로 반환

```javascript
const num4 = 123.12;
console.log(num4.toFixed());
console.log(num4.toString());
console.log(num4.toLocaleString('ar-EG')); // 나라별 지역언어로 변환
```

- 원하는 자릿수까지 유효하도록 반올림

```javascript
console.log(num4.toPrecision(4));
console.log(num4.toPrecision(2)); // 전체 자릿수 표기가 안될 때 -> 지수 표기법
```

- 0과 1 사이에서 나타낼 수 있는 가장 작은 숫자

```javascript
if (Number.EPSILON > 0 && Number.EPSILON < 1) {
	console.log(Number.EPSILON);
}
```

### Number.EPSILON의 사용

자바스크립트에서 실수와 실수를 계산할 때 예상치 못한 오차가 발생할 수 있다.

```javascript
// 자바스크립트에서는 정확하게 부동소수점까지 계산되지 않는다.
// -> 작은 오차 발생
const num = 0.1 + 0.2 - 0.2; // 0.1 예상
console.log(num);

function isEqual(original, expected) {
	return original === expected;
}
console.log(isEqual(0.1, 0.1)); // true
console.log(isEqual(num, 0.1)); // false

// -> 절대값 함수를 사용
function isEqual2(original, expected) {
	return Math.abs(original - expected) < Number.EPSILON;
}
console.log(isEqual2(0.1, 0.1)); // true
console.log(isEqual2(num, 0.1)); // true
```

## 10.6 수학 관련 함수들

### Static Properties, Method

```javascript
console.log(Math.E); // 오일러의 상수, 자연로그의 밑
console.log(Math.PI); // 원주율 PI값
```

- 실수 관련

```javascript
console.log(Math.abs(-10)); // 절대값
console.log(Math.ceil(1.4)); // 소수점 이하 올림
console.log(Math.floor(1.4)); // 소수점 이하 내림
console.log(Math.round(1.7)); // 소수점 이하 반올림
console.log(Math.trunc(1.5432)); // 정수만 반환 (소수점 이하 버림)
```

- 최대, 최소값 찾기

```javascript
console.log(Math.max(1, 3, 4));
console.log(Math.min(1, 3, 4));
```

- 거듭제곱, 제곱근

```javascript
// 거듭제곱
console.log(3 ** 2);
console.log(Math.pow(3, 2));

// 제곱근
console.log(Math.sqrt(9));
```

- 랜덤 값 반환

```javascript
console.log(Math.random()); // 0 ~ 1
console.log(Math.floor(Math.random() * 10 + 1)); // 1 ~ 10
```

## 10.7 문자열 함수들

```javascript
const textObj = new String('Hello World!');
const text = 'Hello World!';
console.log(textObj);
console.log(text);

console.log(text.length); // 12
console.log(text[0]); // H
console.log(text.charAt(0)); // H

// 문자열의 index
console.log(text.indexOf('l')); // 2
console.log(text.lastIndexOf('l')); // 9

console.log(text.includes('tx')); // false
console.log(text.startsWith('h')); // false
console.log(text.endsWith('!')); // true

console.log(text.toUpperCase()); // HELLO WORLD!
console.log(text.toLowerCase()); // hello world!

console.log(text.substring(0, 2)); // He
console.log(text.slice(2)); // llo World!
console.log(text.slice(-2)); // d!

const space = '         space         ';
console.log(space.trim()); // space

const longText = 'Get to the point';
console.log(longText.split(' ')); // [ 'Get', 'to', 'the', 'point' ]
console.log(longText.split(' ', 2)); // [ 'Get', 'to' ]
```

## 10.8 날짜 관련 함수들

```javascript
// UTC 기준
// (협정 세계시간, 1970년 1월 1일 UTC 자정과의 시간 차이를 밀리초 단위로 표기)

console.log(new Date()); // 현재 시간 설정
console.log(new Date('Jun 5, 2022'));
console.log(new Date('2022-12-17T03:24:00'));

console.log(Date.now());
console.log(Date.parse('2022-12-17T03:24:00')); // 밀리초 단위 표기

const now = new Date();
now.setFullYear(2023);
now.setMonth(0); // 0 -> 1월

console.log(now.getFullYear());
console.log(now.getMonth()); // 0 -> 1월
console.log(now.getDate());
console.log(now.getDay()); // 0 -> 일요일

console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getTime());

console.log(now.toString());
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toISOString()); // ISO 8601형식
console.log(now.toLocaleString('en-US'));
console.log(now.toLocaleString('ko-KR'));
```

## Quiz 01

문자열의 모든 캐릭터를 하나씩 출력하기

```javascript
const text = 'Hello World!';
for (let i = 0; i < text.length; i++) {
	console.log(text.charAt(i));
}
```

## Quiz 02

사용자들의 id를 잘라내어 각각의 id를 배열로 보관

```javascript
const ids = 'user1, user2, user3, user4';
const arrayId = ids.split(',');
console.log(arrayId);
```

## Quiz 03

1초에 한번씩 시계를 (날짜포함) 출력하기 - setInterval 사용

```javascript
function getDay(day) {
	switch (day) {
		case 0:
			return '일요일';
		case 1:
			return '월요일';
		case 2:
			return '화요일';
		case 3:
			return '수요일';
		case 4:
			return '목요일';
		case 5:
			return '금요일';
		case 6:
			return '토요일';
	}
}
setInterval(() => {
	const now = new Date();
	console.log(
		`
    ${now.getFullYear()}년 ${now.getMonth() + 1}월 ${now.getDate()}일 ${getDay(now.getDay())} 
    ${now.getHours()}시 ${now.getMinutes()}분 ${now.getSeconds()}초
    `
	);
}, 1000);
```

## 회고

- 래퍼 객체가 있어 원시타입의 데이터에서도 다양한 속성들과 메서드를 사용할 수 있음을 이해했습니다.
- 사용할 수 있는 속성들과 메서드를 잘 알고 있을수록 또는 잘 찾을수록 더 효율적이고 가독성 좋은 코드 작성에 도움이 될 것 같습니다.
- MDN Web Docs 문서의 활용도 높이기!
- _"아는 만큼 보인다"_ - 미술사학자 유홍준 교수의 명언
