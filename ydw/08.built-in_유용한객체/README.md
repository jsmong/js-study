# 표준 내장 객체 (Built in object)

### 표준 내장 객체

표준 내장 객체는 JavaScript 언어 자체에 내장되어 있으며, 모든 JavaScript 환경에서 사용할 수 있는 객체들을 일컫습니다. 이러한 객체들은 전역 범위에서 직접 접근할 수 있음

<br>

## 1. Built in 객체란

- <code>래퍼 객체(Wrapper Object)</code>는 원시값을 필요에 따라서 관련된 빌트인 객체로 변환
- <code>number</code> 원시타입을 감싸고 있는 Number 객체로 감싸짐

```jsx
const number = 123; // 원시 타입
console.log(number.toString());
console.log(number); // number

const text = 'text'; // string 문자열 원시타입
console.log(text);
text.length; // String 객체
text.trim();
```

<br>

## 2. Global 객체

### 속성 특성

- Writable: 가능 (해당 속성의 값을 변경할 수 있는지 여부)
- Enumerable: 불가능 (해당 속성이 열거 가능한지 여부)
- Configurable: 가능 (해당 속성의 설정(configurations)을 변경할 수 있는지)

### 설명

- <code>globalThis</code> 속성은 일반적으로 전역 객체와 유사한 전역 <code>this</code> 값을 포함
- 환경에 관계없이 전역 객체에 접근하는 표준 방법을 제공
- 브라우저와 Node.js를 포함한 여러 JavaScript 환경에서 사용할 수 있으며, 전역 객체에 접근하는 코드를 간결하게 만들어줌

```jsx
// 일반적으로 전역 객체에 접근할 필요 없음
console.log(window.Math === Math); // true

// globalThis를 사용하여 전역 객체에 접근
console.log(globalThis.Math === Math); // true
```

globalThis를 사용하면 코드를 실행하는 환경을 모르더라도 일관된 방식으로 전역 객체에 접근할 수 있음

## 3. Boolean 객체

- 첫 번째 매개변수로 전달한 값은 필요한 경우 불리언 값으로 변환
- 값이 없거나 0, -0, null, false, NaN, undefined, 빈 문자열 ("")이라면 객체의 초기값은 false
- 문자열 "false"를 포함한 그 외 모든 다른 값은 초기값을 true로 설정

### 주의사항

- Boolean 객체의 true와 false 값을 원시 Boolean 값 true, false와 혼동x
- Boolean 아닌 값을 변환할 때 Boolean 객체를 사용해선 안됨 Boolean 함수사용

### 예제

```jsx
Copy code
var x = new Boolean(false);
if (x) {
  // 이 코드는 실행됨
}

var x = false;
if (x) {
  // 이 코드는 실행되지 않음
}
```

### 생성자

```jsx
Boolean();
// Boolean 객체를 생성합니다.
```

### 인스턴스 메서드

```jsx
Boolean.prototype.toString();
// 객체의 값에 따라 문자열 "true" 또는 "false"를 반환합니다.

Boolean.prototype.valueOf();
// Boolean 객체의 원시값을 반환합니다.
```

## 4. Number 객체

- 원시 래퍼 객체: Number는 JavaScript에서 숫자를 다루는 데 사용되는 원시 래퍼 객체

- IEEE 754 64비트 바이너리 배정 밀도 값: Number 타입은 Java나 C#의 double 타입과 유사하고 분수 값을 표현, 하지만 저장 가능한 값에는 제한이 있음

- Infinity: Number는 가장 큰 값으로 1.8E308을 가지며, 이보다 큰 값은 Infinity로 대체

- 부동 소수점 값: JavaScript의 숫자 리터럴은 부동 소수점 값으로 처리, 별도의 정수형은 없으며, BigInt 타입이 도입되기 전에는 Number가 정수형을 처리

- Number 함수: Number(value)를 사용하여 문자열이나 다른 값을 숫자로 변환할 수 있고 변환할 수 없는 경우에는 NaN을 반환

```jsx
const num4 = 1234.12;
// 반올림하여 문자열로 변환
console.log(num4.toFixed());
// 문자열로 변환
console.log(num4.toString());
console.log(num4.toLocaleString('ar-EG'));

// 원하는 자릿수까지 유효하도록 반올림
console.log(num4.toPrecision(5));
console.log(num4.toPrecision(4));
console.log(num4.toPrecision(2)); // 전체 자릿수 표기가 안될때는 지수표기법

if (Number.EPSILON > 0 || Number.EPSILON < 1) {
  console.log(Number.EPSILON); // 0과 1사이에서 나타낼 수 있는 가장 작은 숫자
}
const num = 0.1 + 0.2 - 0.2; // 0.1
console.log(num); // 0.10000000000000003

// 10진수 처럼 보이지면 js에서 2진수로 바꿔서 계산한뒤 다시 10진수로 변환

// 작은 차이를 잡을 때
function isEqual(original, expected) {
  return Math.abs(original - expected) < Number.EPSILON;
  // return original === expected; // 틀림
}
console.log(isEqual(1, 1));
console.log(isEqual(0.1, 0.1));
console.log(isEqual(num, 0.1));
```

## 5. String 객체

```jsx
// 문자열 생성
const str1 = 'Hello';
const str2 = 'World';
const str3 = `Template Literal`;

// 문자열 길이
console.log(str1.length); // 출력: 5

// 문자열 연결
const combinedString = str1 + ' ' + str2;
console.log(combinedString); // 출력: Hello World

// 템플릿 리터럴
const who = 'World';
const greeting = `Hello ${who}!`;
console.log(greeting); // 출력: Hello World!

// 이스케이프 문자 사용
const escapedString = 'Newline: \nTab: \t';
console.log(escapedString);

// 긴 문자열 리터럴
const longString =
  '여러 줄에 걸쳐 작성해야 할 정도로 ' +
  '긴 문자열인데 왜 한 줄에 다 적으면 안되냐면 ' +
  '코드를 읽기 힘들어지니까요.';

// 문자열 접근
const charAtIndex = str1.charAt(0);
console.log(charAtIndex); // 출력: H

// 문자열 비교
const a = 'a';
const b = 'b';
if (a < b) {
  console.log(a + ' is less than ' + b); // 출력: a is less than b
} else if (a > b) {
  console.log(a + ' is greater than ' + b);
} else {
  console.log(a + ' and ' + b + ' are equal.');
}

// 문자열 메서드 사용
const testString = 'JavaScript';
console.log(testString.indexOf('Script')); // 출력: 4
console.log(testString.substring(0, 4)); // 출력: Java
console.log(testString.toUpperCase()); // 출력: JAVASCRIPT
console.log(testString.includes('Java')); // 출력: true
```

## 5. Date 객체

- JavaScript Date 객체는 플랫폼에 독립적으로 시간을 나타
- Date 객체는 1970년 1월 1일 UTC(협정 세계시) 자정과의 시간 차이를 밀리초로 나타내는 정수 값을 가짐

### 생성자

- Date(): 함수로 호출할 경우 현재 날짜와 시간을 나타내는 문자열을 반환
- new Date(): 생성자로 호출할 경우 새로운 Date 객체를 반환
- Date.now(): 1970년 1월 1일 00:00:00 UTC로부터 경과한 시간을 밀리초로 반환
- Date.parse(): 날짜를 나타내는 문자열을 분석하여 해당 날짜와 1970년 1월 1일 00:00:00 UTC와의 시간 차이를 밀리초로 반환.
- Date.UTC(): 매개변수로 받은 구성요소를 이용하여 1970년 1월 1일 00:00:00 UTC와의 시간 차이를 밀리초로 반환

```jsx
// Date 객체 생성 예제
let today = new Date();
let birthday = new Date('December 17, 1995 03:24:00');
let birthday = new Date('1995-12-17T03:24:00');
let birthday = new Date(1995, 11, 17); // 월은 0부터 시작
let birthday = new Date(1995, 11, 17, 3, 24, 0);

// 경과시간 계산 예제
let start = Date.now();
doSomethingForALongTime();
let end = Date.now();
let elapsed = end - start;
```

### 참고

- Date 객체는 UNIX 시간과는 다르며, 일관적이고 정확한 사용을 위해 주의가 필요
- Date.parse()를 사용한 날짜 분석은 브라우저 간 차이와 일관성이 없으므로 피하는게 좋다
