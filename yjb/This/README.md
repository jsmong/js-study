# JavaScript에서의 `this`

## 다른 프로그래밍 언어와의 차이

- **JavaScript**: `this`는 함수 호출 방식에 따라 결정 (동적 바인딩)
- **Java**: `this`는 항상 해당 메서드가 속한 객체를 가리킴 (정적 바인딩)

## JavaScript에서 `this`를 결정하는 5가지

### 1. Global

전역 스코프에서 `this`는 전역 객체를 가리킴

- 브라우저에서는 `this`가 `window` 객체 참조
- Node.js에서는 `this`가 `global` 객체 참조

```js
console.log(this); // 브라우저에서는 window 객체를 출력
```

### 2. 함수

일반 함수 호출에서는 this는 전역 객체를 가리킴.
하지만 strict mode에서 this는 undefined

```js
// 'use strict'
function print() {
  console.log(this);
}

print(); // window 또는 undefined (strict mode)
```

### 3. 메서드 호출

객체의 메서드 내에서 호출된 경우, this는 그 메서드가 속한 객체를 가리킴

```js
const obj = {
  name: 'Jeongbin',
  print() {
    console.log(this);
  },
};

obj.print(); // obj 객체 출력
```

### 4. 생성자 함수

생성자 함수에서 this는 인스턴스 객체를 가리킴

```js
function Person(name) {
  this.name = name;
}

const person1 = new Person('Jeongbin');
console.log(person1.name); // Jeongbin
```

### 5. 명시적 바인딩 (call, apply, bind)

this는 call, apply, bind 메서드를 통해 명시적으로 설정 가능

```js
function print() {
  console.log(this.name);
}

const user = { name: 'Jeongbin' };
print.call(user); // Jeongbin
```

## 화살표 함수에서의 this

화살표 함수에서는 this가 렉시컬 스코프를 따름. 즉, 화살표 함수는 자신을 포함하는 외부 함수나 컨텍스트의 this를 상속받음

```js
const obj = {
  name: 'Object',
  print: function () {
    const arrowFunc = () => {
      console.log(this);
    };
    arrowFunc();
  },
};

obj.print(); // obj 객체를 출력
```

## 다른 언어와 비교 (Java와 C++)

| 특성             | JavaScript                         | Java/C++                             |
| ---------------- | ---------------------------------- | ------------------------------------ |
| this의 동작 방식 | 호출 방식에 따라 결정              | 항상 해당 클래스 인스턴스를 가리킴   |
| 함수 호출        | 전역 객체 참조 또는 undefined      | 항상 this가 클래스 인스턴스를 가리킴 |
| 메서드 호출      | 메서드를 호출한 객체 참조 메서드가 | 정의된 클래스의 인스턴스 참조        |
