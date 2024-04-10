# 배열에 관한 기타 정보들

### `목차`

1. [특수 언어가 있는 문자열 배열 정렬하기](#특수-언어가-있는-문자열-배열-정렬하기)
2. [String.prototype.localeCompare()](#참고-stringprototypelocalecompare)
3. [순차 배열을 만드는 세 가지 방법](#순차-배열을-만드는-세-가지-방법)
4. [세 가지 방법 시간 측정해보기](#세-가지-방법-시간-측정해보기)
5. [배열의 길이를 강제로 조정하면?](#배열의-길이를-강제로-조정하면)

<br />

## 특수 언어가 있는 문자열 배열 정렬하기

- `sort()` 메서드는 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환

- 이때 배열 안 모든 요소는 문자형으로 변환된 후, 유니코드 단위의 값을 비교한뒤 재정렬

- 숫자의 경우도 문자열로 변환한 뒤 해당 문자열의 유니코드 값을 비교해 정렬

```javascript
const kors = ['대한민국', '호주', '독일', '가나'];
const nums = ['100', '1', '3', '0', '000', '99'];

// 일반적인 sort
console.log(kors.sort((a, b) => a - b)); // [ '대한민국', '호주', '독일', '가나' ]
console.log(nums.sort((a, b) => a - b)); // [ '0', '000', '1', '3', '99', '100' ]

console.log(kors.sort((a, b) => a.localeCompare(b))); // [ '가나', '대한민국', '독일', '호주' ]
```

<br />

| **한국어도 문자열인데 왜 sort했을 때 제대로 정렬되지 않을까?**

- sort()는 비교 함수의 반환값이 0보다 작으면 a를 b보다 앞으로 정렬, 0보다 크면 b를 a보다 앞으로 정렬함

- 문자열끼리의 비교는 정수가 아닌 true, false로 반환되기 때문에 sort() 에서 제대로 동작하지 않는 것!

```javascript
console.log('대한민국' < '가나'); // false
console.log('대한민국'.localeCompare('가나')); // 1
```

<br />

### [참고] String.prototype.localeCompare()

| **localeCompare(compareString, locales, options)**

- compareString: referenceStr가 비교되는 문자열

- referenceStr가 compareString 전 혹은 뒤에 오는지 또는 동등한지를 나타내는 정수를 반환

- 음수, 0, 양수로 값을 반환하기에 sort가 이를 기반으로 문자열을 정렬할 수 있는 것!

```javascript
const a = 'réservé'; // 액센트 O, 소문자
const b = 'RESERVE'; // 액센트 X, 대문자
const c = 'ReSerVe';
const d = 'zebra';

console.log(a.localeCompare(b)); // 양수: b가 a보다 앞에 위치
console.log(a.localeCompare(b, 'en', { sensitivity: 'base' })); // 0: 동일
console.log(a.localeCompare(c, 'en', { sensitivity: 'base' })); // 0: 동일
console.log(a.localeCompare(d, 'en', { sensitivity: 'base' })); // -1: a가 d보다 앞에 위치
```

- 참조 문자열이 정렬 순으로 지정된 문자열 앞 혹은 뒤에 오는지, 또는 동일한 문자열인지 나타내는 수치를 반환

<br /><br />

## 순차 배열을 만드는 세 가지 방법

### 1~20으로 이루어진 배열을 만드는 방법

```javascript
// 반복문
const forArr = [];
for (let i = 1; i <= 10; i++) {
  forArr.push(i);
}
console.log(forArr);

// from() 메서드
const fromArr = Array.from({ length: 10 }, (_, idx) => idx + 1);
console.log(fromArr);

// Array 생성자 + fill() 메서드
const fillArr = Array(10)
  .fill()
  .map((_, idx) => idx + 1);
console.log(fillArr);
```

### 세 가지 방법 시간 측정해보기

```javascript
// 반복문
console.time('for');
const forArr = [];
for (let i = 1; i <= 10000000; i++) {
  forArr.push(i);
}
console.timeEnd('for');

// from() 메서드
console.time('from');
const fromArr = Array.from({ length: 10000000 }, (_, idx) => idx + 1);
console.timeEnd('from');

// Array 생성자 + fill() 메서드
console.time('fill');
const fillArr = Array(10000000)
  .fill()
  .map((_, idx) => idx + 1);
console.timeEnd('fill');
```

- for: 212.314ms

- from: 565.091ms

- fill: 179.852ms

- 실행 환경에 따라 시간의 차이는 있지만 항상 for가 제일 빠르고 from이 제일 느렸음!

<br />

### [참고] empty, undefined, null

```javascript
const arr = Array.from(3); // [empty × 10]
arr.fill(); // [undefined, undefined, undefined]
```

| `empty`

```javascript
let empty;
```

- 빈 값

- _[참고의 참고] 예시 코드의 변수 키워드를 let으로 한 이유? const는 선언 + 초기화가 필수라서!_

| `undefined`

- 변수가 선언되었지만 초기화되지 않거나 값을 할당받지 않은 상태

- 변수가 아예 선언되지 않은 것과 다르며, 변수 선언 시 초기화하지 않으면 자동으로 undefined값이 할당

| `null`

- **명시적, 의도적**으로 값이 없음을 나타내는 특별한 값

<br /><br />

## 배열의 길이를 강제로 조정하면?

```javascript
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr.length); // 10

arr.length = 5;
console.log(arr); // [ 1, 2, 3, 4, 5 ]
console.log(arr.length); // 5
```

- length의 값을 현재보다 작게 변경하면 변경된 length 프로퍼티의 값보다 크거나 같은 인덱스에 해당하는 요소는 모두 삭제됨!
