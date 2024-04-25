# 이터러블

## 이터레이션 프로토콜

ES6에서 도입된 `순회 가능한` 데이터 컬렉션(자료구조)을 만들기 위해 미리 약속한 규칙

#### 1. 이터러블 프로토콜

프로토타입 체인을 통해 상속 받거나 프로퍼티 키로 직접 구현된 `Symbol.iterator` 메서드를 호출 => `이터레이터`를 반환하는 규약

#### 2. 이터레이터 프로토콜

이터레이터는 next 메서드를 소유. `next` 메서드를 호출 => 이터러블을 순회하며 value와 done 프로퍼티를 갖는 `이터레이터 리절트 객체`를 반환하는 규약

#### 이터러블

이터레이터를 반환하는 Symbol.iterator()라는 메서드를 가진 객체

#### 이터레이터

{ value, done ...} 객체를 반환하는 next 메서드를 가진 객체

<br/>
<br/>

## 빌트인 이터러블

| 빌트인 이터러블 | Symbol.iterator 메서드                                                             |
| --------------- | ---------------------------------------------------------------------------------- |
| Array           | Array.prototype[Symbol.iterator]                                                   |
| String          | String.prototype[Symbol.iterator]                                                  |
| Map             | Map.prototype[Symbol.iterator]                                                     |
| Set             | Set.prototype[Symbol.iterator]                                                     |
| TypedArray      | TypedArray.prototype[Symbol.iterator]                                              |
| arguments       | arguments.prototype[Symbol.iterator]                                               |
| DOM 컬렉션      | NodeList.prototype[Symbol.iterator] <br/>HTMLCollection.prototype[Symbol.iterator] |

이터러블인지 확인하는 함수

```javascript
const isIterable = (v) =>
  v !== null && typeof v[Symbol.iterator] === 'function';
```

String

```javascript
// for ... of 순회 가능
for (const char of 'Hello') {
  console.log(char); // H, e, l, l, o 가 차례로 출력
}
```

```javascript
'hello'.__proto__;
// {
//     ...,
//     ["Symbol(Symbol.iterator)"] : f Symbol.iterator()
// }
```

<br/>
<br/>

## 유사배열 객체와 이터러블 객체

유사 배열객체 또는 이터러블 객체를 배열로 변환하여 반환

`유사배열 객체`: 배열처럼 인덱스로 프로퍼티 값에 접근할 수 있고 length 프로퍼티를 갖는 객체  
마치 배열처럼 for문으로 순회 가능

```javascript
const arrayLike = {
  0: 'apple',
  1: 'banana',
  2: 'orange',
  length: 3,
};
```

```javascript
// length 프로퍼티를 갖기 때문에 for문으로 순회 가능
for (let i = 0; i < arrayLike.length; i++) {
  console.log(arrayLike[i]); // apple, banana, orange
}
```

```javascript
// 유사배열 객체는 이터러블이 아니기 때문에 for ... of 문으로 순회 불가
for (const item of arrayLike) {
  console.log(item); // Uncaught TypeError: arrayLike is not iterable
}
```

`이터러블 객체`: 스프레드 문법과 배열 구조분해 할당 대상으로 사용할 수 있는 객체  
for...of 문으로 순회 가능

Array, String, Map, Set, DOM 컬렉션(NodeList,HTMLCollection), arguments 등

> 단, arguments, NodeList, HTMLCollection은 유사 배열 객체이면서 이터러블
>
> ES6에서 이터러블이 도입 되면서 유사 배열 객체 arguments, NodeList, HTMLCollection에 Symbol.iterator 메서드 구현하여 이터러블이 됨

<br/>
<br/>

## 이터레이션 프로토콜의 필요성

ES6 이전의 순회 가능한 데이터 컬렉션(배열, 문자열, 유사 배열 객체, DOM 컬렉션 등)은 통일된 규약 없이 각자 나름의 구조를 가지고 for 문, for ... in 문, forEach 메서드 등 다양한 방법으로 순회할 수 있었음

=> ES6에서는 순회 가능한 데이터 컬렉션을 이터레이터 프로토콜을 준수하는 이터러블로 통일!  
=> for ... of문, 스프레드 문법, 배열 구조분해 할당의 대상으로 사용하도록 일원화
