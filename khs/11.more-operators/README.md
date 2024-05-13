# CONTENT

1. [논리 연산자](#1-논리-연산자)
2. [논리곱 연산자](#2-논리곱-연산자)
3. [논리합 연산자](#3-논리합-연산자)
4. [단축평가](#4-단축-평가)
5. [옵셔널 체이닝](#5-옵셔널-체이닝-연산자)
6. [null 병합 연산자](#6-null-병합-연산자)

<br /><br />

# 1. 논리 연산자

- 논리합(||) 또는 논리곱(&&) 연산자 표현식의 평가 결과는 불리언 값이 아닐 수 있음

- 논리합 또는 논리곱 연산자 표현식은 언제나 2개의 피연산자 중 어느 한쪽으로 평가됨

<br /><br />

# 2. 논리곱(&&) 연산자

```javascript
'Cat' && 'Dog' // -> "Dog"
```

- 두 개의 피연산자가 모두 true로 평가될 때 true 반환

- 즉, 두 번째 피연산자가 위 논리곱 연산자의 표현식의 평가 결과를 결정

- 이때 논리곱 연산자는 논리 연산의 결과를 결정하는 두 번째 피연산자를 그대로 반환

<br /><br />

# 3. 논리합(||) 연산자

```javascript
'Cat' || 'Dog' // -> "Cat"
```

- 두 개의 피연산자 중 하나만 true로 평가되어도 true 반환

- 논리 연산의 결과를 결정한 첫 번째 피연산자를 그대로 반환

<br />

| **[참고] default parameter와 || 의 차이**

- default parameter: 전달하지 않거나, undefined일 때 해당 값으로 설정됨

- || : 전달된 값이 falshy한 경우 설정(할당) ex. 0, -0, null, undefined, ''

```javascript
const print = (message = 'Hi') => message || 'Hello';
console.log(print(undefined)); // Hi
console.log(print()); // Hi
console.log(print(null)); // Hello
console.log(print(0)); // Hello
console.log(print('')); // Hello
```

<br /><br />

# 4. 단축 평가

- 논리 연산의 결과를 결정하는 피연산자를 타입 변환하지 않고 그대로 반환하는 것을 단축 평가라고 함

- 즉, 표현식을 평가하는 도중에 평가 결과가 확정된 경우 나머지 평가 과정을 생략하는 것

- 아래(👇)와 같은 규칙을 따름

<br />

| 단축 평가 표현식 | 평가 결과 |
| :---: | :---: |
| true \|\| anything | true |
| false \|\| anything | anything |
| true && anything | anything |
| false && anything | false |

<br /><br />

# 5. 옵셔널 체이닝 연산자

```javascript
var elem = null;

// elem이 null 또는 undefined이면 undefined를 반환하고, 그렇지 않으면 우항의 프로퍼티 참조를 이어간다.
var value = elem?.value;
console.log(value); // undefined
```

- ES11(ECMAScript2020)에서 도입된 옵셔널 체이닝 연산자 ?. 는 좌항의 피연산자가 null 또는 undefined인 경우 undefined를 반환하고, 그렇지 않으면 우항의 프로퍼티 참조를 이어감 (Falsy값이더라도 우항의 프로퍼티 참조)

- 옵셔널 체이닝 연산자 도입 전에는 논리 연산자 &&를 사용한 단축 평가를 통해 변수의 null 또는 undefined 여부 확인

<br /><br />

# 6. null 병합 연산자

```javascript
// 좌항의 피연산자가 null 또는 undefined이면 우항의 피연산자를 반환하고, 그렇지 않으면 좌항의 피연산자를 반환한다.
var foo = null ?? 'default string';
console.log(foo); // "default string"
```

- ES11(ECMAScript2020)에서 도입된 null 병합 연산자 ?? 는 좌항의 피연산자가 null 또는 undefined인 경우 우항의 피연산자를 반환하고, 그렇지 않으면 좌항의 피연산자를 반환


- 변수에 기본 값을 설정할 때 유용


- null 병합 연산자 도입 전에는 논리 연산자 ||를 사용한 단축 평가를 통해 변수에 기본값 설정


- null 병합 연산자는 좌항의 피연산자가 Falsy값(false, undefined, null, 0, -0, NaN, '')이더라도 null 또는 undefined가 아니면 좌항의 피연산자를 그대로 반환