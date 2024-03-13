# 4. 변수에 대한 모든 것

## 4.1 컴퓨터의 구성요소 (메모리)

하드디스크(저장장치), CPU(연산), 메모리(데이터를 보관하고 읽고 쓰기)

- 메모리 구성
  - Code
  - Data(변수와 데이터 보관)
  - Stack(실행 순서 보관)
  - Heap(객체 보관)

## 데이터 타입

- 원시 (primitive) : 단일 데이터
  - number, string, boolean, null, undefined, Symbol
- 객체 (object) : 복합 데이터
  - object(array), function

### 유의사항 정리

- 숫자 타입

```javascript
console.log(0 / 123); // 0
console.log(123 / 0); // Infinity
console.log(123 / -0); // -Infinity
console.log(123 / 'text'); // NaN (Not a Number)
```

- 불리언 타입

```javascript
// Falshy 거짓인 값
console.log(!!0);
console.log(!!-0);
console.log(!!'');
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);

// Truthy 참인 값
console.log(!!1);
console.log(!!-1);
console.log(!!'text');
console.log(!!{});
console.log(!![]);
console.log(!!Infinity);
```

- null, undefined

```javascript
// typeof
console.log(typeof null); // object
console.log(typeof undefined); // undefined
```

## 4.8 객체 타입 (object)

- 원시 타입의 메모리 보관
  - 메모리 셀에 값 자체가 저장된다.
  - 변수는 값이 저장된 메모리 셀의 주소를 가리킨다.
  - 원시 타입은 Data(global 선언) 또는 Stack(local 선언)에 보관된다.
- 객체 타입의 메모리 보관
  - 객체 자체는 Heap 메모리 공간에 할당된다.
  - 변수는 실제 객체가 들어있는 메모리 주소를 가지는 메모리 주소를 가리킨다.
  - 객체 타입은 Heap 메모리 공간에 보관된다.

## 4.9 값과 참조의 차이

- 원시
  - 메모리 셀에 값 자체가 들어있다.
  - 값 자체가 복사되어 할당된다. (Copy by Value)
- 객체
  - 메모리 셀에 참조값(객체의 메모리 주소)이 들어있다.
  - 메모리 주소값이 복사되어 할당된다. (Copy by Reference)
    - 같은 객체를 바라보게 된다.

## 4.10 상수 변수 const

- let
  - 재할당이 가능하다.
- const
  - 재할당이 불가능하다.
  - 변수가 가리키는 메모리 주소에 있는 객체 값의 변경은 가능하다.
    - 메모리 셀(참조값)의 데이터 변경이 아니기 때문

## 4.11 타입 확인 법 (typeof)

자바스크립트는 동적인 언어이다. (Dynamic Language)

- 컴파일러 : 정적타입 (Static Type)
- 인터프리터 : 동적타입 (Dynamic Type, Weakly Type)
  - 실행할 때 할당된 값에 따라 타입이 결정된다.
