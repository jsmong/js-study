# 변수와 데이터 타입

## 1. 변수 (Variable)

변수는 값을 저장하는 공간으로, 값을 참조하기 위해 사용됩니다.

### 변수 선언과 할당

변수를 선언하고 값을 할당하는 방법:

```jsx
let variableName = value;
```

### 변수 재할당

값을 변경할 때:

```jsx
var iableName = newValue;
```

### Naming (이름 짓기)

변수 이름은 저장된 값을 잘 나타낼 수 있도록 구체적이고 의미 있는 이름을 사용해야 합니다.

- 라틴 문자(0-9, a-z, A-Z) 사용
- 대소문자 구분
- camelCase 권장
- 예약어 사용 불가
- 한국어, 숫자로 시작, 특수문자 사용 불가
- 의미 있는 이름 사용 권장

```jsx
// 좋은 예
let userAge = 25;

// 나쁜 예
let num = 25; 2. 데이터 타입 (Data Type)
```

## 데이터 타입 (Data Type)

JavaScript의 데이터는 다음 두 유형으로 나뉩니다:

### 1. 원시(primitive) 데이터 타입

- number: 숫자
- string: 문자열
- boolean: 참/거짓
- null: 값이 없음을 나타냄
- undefined: 할당되지 않은 변수
- symbol: 고유한 식별자

### 2. 복합(composite) 데이터 타입

- object: 여러 값을 그룹화한 복합 데이터 타입
- array: 배열
- function: 함수 등

### 변수 할당 방식

- 변수에 원시 값 할당 시, 값이 복사됨
- 변수에 객체를 할당할 때는 참조 값이 복사됨

```jsx
// Copy by Value
let a = 1;
let b = a;
b = 2;
console.log(a); // 1

// Copy by Reference
let obj1 = { name: '🍎apple' };
let obj2 = obj1;
obj2.name = 'orange';
console.log(obj1); // { name: '🍊orange' }
```

## 3. 상수 (Const)

상수는 한 번 할당되면 변경할 수 없는 변수입니다.

```jsx
const PI = 3.14;
```

- let은 재할당 가능하지만, const는 재할당이 불가능합니다.
- 객체의 내용은 변경할 수 있지만, 새로운 객체로 재할당할 수는 없습니다. 4. 데이터

## 타입 확인 (Type Checking)

typeof 연산자를 사용하여 변수의 데이터 타입을 확인할 수 있습니다.

```jsx
let variable;
console.log(typeof variable); // undefined

variable = '';
console.log(typeof variable); // string

variable = 123;
console.log(typeof variable); // number

variable = {};
console.log(typeof variable); // object
```
