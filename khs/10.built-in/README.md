# CONTENT

1. [basic.js](#1-basicjs)
2. [wrapper.js](#2-wrapperjs)
3. [global.js](#3-globaljs)
4. [boolean.js](#4-booleanjs)
5. [number.js](#5-numberjs)

<br /><br />

# 1. basic.js

### 빌트인 객체와 호스트 객체

- JS에서 객체의 두가지 주요 카테고리를 나타냄

<br />

### 빌트인 객체 Built-in Objects

| 개념

- JS 언어 자체에 내장된 객체로, 모든 JS 환경에서 사용 가능

- JS의 핵심 기능을 제공하며 개발자가 자유롭게 활용 가능

| 종류

- Object(객체): 모든 객체 기반의 객체

- Array(배열): 순서가 있는 데이터를 저장하는 객체

- String(문자열): 문자열을 나타내는 객체

- Function(함수): 함수를 생성하는 객체

- Number(숫자): 숫자를 나타내는 객체

- Boolean(불리언): 참 또는 거짓을 나타내는 객체

<br />

### 호스트 객체 Host Objects

| 개념

- JS가 실행되는 특정 환경(ex. 브라우저, Node.js)에서 제공하는 객체

- 해당 환경에 따라 다르며, 주로 해당 환경의 기능을 활요하기 위해 사용됨

| Browser APIs

- Document 객체: 현재 웹 페이지를 나타내는 객체로, DOM 조작에 사용됨

- Window 객체: 브라우저 창을 나타내며, 브라우저 창과 관련된 속성 및 메서드 제공

- XMLHttpRequest 객체: 서버와 상호작용하여 데이터를 비동기적으로 가져오간 전송하는데 사용

| Node APIs

- Process 객체: 현재 실행 중인 Node.js 프로세스에 대한 정보를 제공하는 객체로, 환경변수 등을 확인 가능

- require 함수: 다른 모듈을 가져오기 위해 사용되는 함수로, 외부 모듈을 현재 스크립트에서 사용할 수 있게 함

- fs(file systen) 모듈: 파일 시스템과 관련된 작업을 수행하는 객체와 함수들 제공

<br /><br />

# 2. wrapper.js

- 래퍼 개체는 원시값을 필요에 따라 관련된 빌트인 객체로 변환

- JS에서 쓰이는 각각의 원시 타입이 그에 해당하는 Wrapper Object가 있음

- 평소에는 원시타입을 그대로 쓰다가 유용한 관련된 함수를 이용하려고 하는 순간 원시타입이 자동으로 Wrapper 객체로 감싸져서 필요한 함수를 쓰다가 다시 원시타입의 값을 쓰거나 할 때는 다시 원시타입으로 되돌아옴

- 객체는 다양한 값, 함수를 가지고 있기 때문에 원시타입보다 무겁고 메모리를 많이 생성하므로 값을 만들 때마다 객체를 생성하면 메모리를 많이 차지

- 그래서 가능하면 원시타입을 쓰다가 필요할 때만 객체로 변환하고 다시 원시타입으로 변환해서 객체는 많이 사용하지 않도록 (메모리가 낭비되지 않도록) 설정되는 것

<br /><br />

# 3. global.js

### this

- 브라우저에서의 전역 this: window 객체

- 노드에서의 전역 this: 현재 모듈에 있는 정보

<br /><br />

# 4. boolean.js

### falsy

- 0, -0 / null / NaN / undefined / ''

### truthy

- 1, -1 / '0' / 'false' / [], {} (arr, obj 자체가 값이기 때문)

<br /><br />

# 5. number.js

### EPSILON

- 2.220446049250313e-16, 0과 1 사이에서 나타낼 수 있는 가장 작은 숫자

```javascript
if (Number.EPSILON > 0 && Number.EPSILON < 1) {
  console.log('0과 1 사이에서 나타낼 수 있는 가장 작은 숫자');
}
```

### 부동소수점

- JS 내부에서는 10진수를 2진수로 연산한 다음 다시 10진수로 반환함

```javascript
const num = 0.1 + 0.2 - 0.2;
console.log(num); // 0.10000000000000003
```

### 숫자의 미세한 오차가 동일하게 간주되도록 설정하는 방법

```javascript
const isEqual = (original, expected) => original === expected;
console.log(isEqual(1, 1)); // true
console.log(isEqual(0.1, 0.1)); // true
console.log(isEqual(num, 0.1)); // false
```

만약 위처럼 작은 차이를 동일하다고 간주되도록 하고 싶다면

1. 둘의 오차가 EPSILON 보다 작은지 확인

   ```javascript
   const isEqual2 = (original, expected) => original - expected < Number.EPSILON;
   console.log(isEqual2(num, 0.1)); // true
   ```

2. 둘의 차이값이 마이너스 값이 되지 않도록 하려면 절대값으로 감싸고 EPSILON보다 작은지 확인

   ```javascript
   const isEqual3 = (original, expected) => Math.abs(original - expected) < Number.EPSILON;
   console.log(isEqual3(num, 0.1)); // true
   ```
