# 유용한 객체들

##

### 1. wrapper.js - 래퍼객체

- 원시값은 필요에 따라서 관련된 빌트인 객체로 변환한다.
- 각각의 원시타입은 그에 해당하는 wrapper 오브젝트가 있다.
- .을 찍는 순간 원시타입 wrapper객체로 감싸짐

```js
const number = 123; // number 원시 타입
number.toString(); // wrapper객체의 매서드

const text = 'text'; // string 문자열 원시값
console.log(text.length); // String 객체
```

### 2. global.js

```js
eval('const num = 2; console.log(num)');
console.log(isFinite(1));
console.log(isFinite(Infinity));

console.log(parseFloat('12.43')); // 문자열 -> 수
console.log(parseInt('12.43')); // 문자열 & 숫자 -> 정수

// URL (URI, Uniform Resource Identifier 하위 개념)
// 아스키 문자로만 구성되어야함
// 한글이나 특수문자는 이스케이프 처리 해야함
const URL = 'https://드림코딩.com';
const encoded = encodeURI(URL);

// 디코딩
const decoded = decodeURI(encoded);

// 전체 URL 이 아니라 부분적인 것은 Component 이용
const part = '드림코딩.com';
console.log(encodeURIComponent(part));
```

### 3. boolean.js

#### 1.Falshy

```
0
-0
null
NaN
undefined
''
```

#### 2. Truthy

```
1
-1
'0'
'false'
[]
{}
```

### 4. number.js

#### 1. number정의

```js
const num1 = 123;
const num2 = new Number(123);
// 필요한 경우가 아니라면 굳이? 메모리 낭비임
```

#### 2. 유용한 number 관련 매서드

```js
console.log(Number.MAX_VALUE); // 최대값
console.log(Number.MIN_VALUE); // 최소값
console.log(Number.MAX_SAFE_INTEGER); // 안전하게 사용할 수 있는 최대값
console.log(Number.MIN_SAFE_INTEGER); // 안전하게 사용할수 있는 최소값
console.log(Number.NaN);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);
```

```js
// 예제 - num 1이 숫자값인지 판별
console.log(num1 === Number.NaN);
console.log(Number.isNaN(num1));
```

```js
// 지수표기법 (매우 크거나 작은 숫자를 표기할 때 사용, 10의 n승)
const num3 = 102;
console.log(num3.toExponential()); // 1.02e+2
// 1.02 * (10**2)
```

```js
// 반올림하여 문자열로 변환
const num4 = 1234.12;
console.log(num4.toFixed()); // 1234
console.log(num4.toString); // '1234'
console.log(num4.toLocaleString('ar-EG')); // 숫자를 그나라 지역에 맞춰 표시
```

```js
// 원하는 자릿수까지 유효하도록 반올림
console.log(num4.toPrecision(5)); // 1234.1 (5개만 표시)
console.log(num4.toPrecision(4)); // 1234
console.log(num4.toPrecision(2)); // 1.2e+3 (전체 자릿수 표기가 안될때는 지수 표기법)
console.log(Number.EPSILON); // 0과 1 사이에서 나타낼 수 있는 가장 작은 숫자
```

#### 3. 지수 표현법

```js
// 1e+10
// = 10000000000
// e+308 10의 10승 (0이 10개)
```

#### 4. EPSILON 쓰는 이유

```js
const num5 = 0.1 + 0.2 - 0.2;
console.log(num5); // 0.1이 아님 (0.10000000000000003)
// js 는 10진수를 2진수로 변환하여 계산 후, 10진수로 치환해줌 -> 정확하게 부동소수점까지 계산 못함

function isEqual(original, expected) {
  // return original === expected;
  return original - expected < Number.EPSILON;
}

console.log(isEqual(1, 1)); // true
console.log(isEqual(0.1, 0.1)); // true
console.log(isEqual(num5, 0.1)); // Number.EPSILON사용시 true
```

#### 5. math.js

```js
// static method
console.log(Math.abs(-10)); // 10 (절대값 반환, -떼줌)
// 소수점 이하 올림
console.log(Math.ceil(1.4)); // 2
// 소수점 이하 내림
console.log(Math.floor(1.4)); // 1
// 소수점 이하 반올림
console.log(Math.round(1.4)); // 1
// 정수만 반환
console.log(Math.trunc(1.123412)); // 1

// 최대, 최솟값 찾기
console.log(Math.max(1, 3, 4)); // 4
console.log(Math.min(1, 3, 4)); // 1

// 거듭제곱
console.log(3 ** 2); // 9
console.log(Math.pow(3, 2)); // 9

// 제곱근 - 어떤걸 두번 곱해야 9됨?
console.log(Math.sqrt(9)); // 3

// 랜덤한 값을 반환(0~1 사이 랜덤값 반환)
console.log(Math.random());
console.log(Math.floor(Math.random() * 10 + 1)); // 0 ~ 10 까지 랜덤한 숫자
```

#### 6. string.js

```js
const text = 'Hello World';

console.log(text.length); // 11
console.log(text[0]); // H
console.log(text.charAt(0)); // H

// 특정 문자열의 index
console.log(text.indexOf('l')); // 2 (처음 기준, 가장 처음 찾은 애만 출력)
console.log(text.lastIndexOf('l')); // 9 (마지막 기준, 가장 처음 찾은 애만 출력)

// 해당 문자열을 포함함는지
console.log(text.includes('tx')); // false
console.log(text.includes('h')); // false (대소문자 구분함)
console.log(text.includes('H')); // true

// 해당 문자열로 시작하는지
console.log(text.startsWith('He')); // true
console.log(text.endsWith('d')); // true

// 모두 대문자로
console.log(text.toUpperCase()); // HELLO WORLD
console.log(text.toLowerCase()); // hello world

// 특정 위치 문자열 삭제
console.log(text.substring(0, 2)); // He (0,1 출력)
console.log(text.slice(2)); // llo World (2번 인텍스부터 끝까지 잘라내기)
console.log(text.slice(-2)); // ld (뒤에서부터 2번째 부터 잘라내기)

// 공백 제거
const space = '     space      ';
console.log(space.trim()); // space

// 특정 문자 기준으로 문자열을 끊어주고 싶다면
const longText = 'Get to the point';
console.log(longText.split(' ')); // [ 'Get', 'to', 'the', 'point' ]
console.log(longText.split(' ', 2)); // [ 'Get', 'to' ] (끊어진것 중에 2덩어리만 반환)
```

#### 7. date.js

```js
// UTC 기준(협정 세계시, 1970년 1월 1일 UTC 자정과의 시간 차이를 밀리초 단위로 표시)
console.log(new Date());
console.log(new Date('Jun 5, 2022'));
console.log(new Date('2022-12-17T03:24:00'));

console.log(Date.now());
console.log(Date.parse('2022-12-17T03:24:00'));

const now = new Date();
now.setFullYear(2023);
now.setMonth(10); // 0이 1월
console.log(now.getFullYear());
console.log(now.getDate()); // 0 = 1
console.log(now.getDay()); // 0 일요일부터..
console.log(now.getTime());
console.log(now);

console.log(now.toString());
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toISOString());
console.log(now.toLocaleString('en-US'));
console.log(now.toLocaleString('ko-KR'));
```

## Quiz

### 1. 문자열의 모든 캐릭터를 하나씩 출력하라

#### 1. forEach 사용

```js
const text = 'Hello world!';
[...text].forEach((e) => {
  console.log(e);
});
```

- forEach 는 배열만 돈다 -> ... spread operator 사용-> [] 배열로 감싸주기

### 2. for 사용

```js
for (i = 0; i < text.length; i++) {
  console.log(i);
}
```

## 2. 사용자의 id를 잘라내어 각각의 id를 배열로 보관

```js
const ids = 'user1, user2, user3, user4';
console.log(ids.split(', '));
```

## 3. 1초에 한번씩 시계를 (날짜포함)출력해보자

### 1. toLocaleString 사용해서 간단하게!

```js
const clock = () => {
  const now = new Date();
  console.log(now.toLocaleString('ko-KR'));
};
setInterval(() => {
  clock();
}, 1000);
```

```js
const convertNumber = (number) => {
  return number.toString().padStart(2, '0');
};

const clock2 = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = convertNumber(now.getMonth());
  const day = convertNumber(now.getDay());
  const hours = convertNumber(now.getHours());
  const minutes = convertNumber(now.getMinutes());
  const seconds = convertNumber(now.getSeconds());
  console.log(`${year}년 ${month}월 ${day}일 ${hours}:${minutes}:${seconds}`);
};
setInterval(() => {
  clock2();
}, 1000);
```

- padStart(자릿수, 빈곳을채울문자); 사용하면, 손쉽게 01, 02, 10 과같이 두자릿수 형식을 얻어낼수 있다.
- padStart는 string만 취급하니 형변환 필수

## 회고

- 0많이 들어가는 숫자, 일일히 세어가면서 100000000000000 헷갈리게 작성하지 말고 **지수 표기법**으로 간단하게 숫자 표기해보자 1+e14
- 0.1 + 0.2 - 0.2 = 0.1 이 아니라는 것만 얼핏 들었지, 이에 대한 해결책은 몰랐었는데 **Number.EPSILON** 사용하면 되는구나!
- 작업하면서 로그인 키값을 url 로 넘겨야하는 작업을 했었는데, 키값에 특수문자가 포함되어있어서 오류가 났던 적이 있었다. 그땐 왜 이런 현상이 발생하는지, 이해가 되지 않았는데 **url 은 원래 특수문자 안넘기는구나..** encodeURI, decodeURI 기억해야겠다
