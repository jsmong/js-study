# JavaScript 함수 정의 방식과 `this` 바인딩 차이

## 1. 세 가지 정의 방식

### 1.1 ES6 메서드 구문 (`key() {}`)

`ES6`에서 도입된 간결한 메서드 정의 방식.  
객체의 메서드로 정의되며, this는 메서드를 `호출한 객체`를 가리킴

```js
const obj = {
  greet() {
    console.log(this); // 호출한 객체를 참조
  },
};
obj.greet(); // obj 객체를 출력
```

### 1.2 함수 표현식 (`key: function() {}`)

`ES5`에서 사용된 방식.  
객체의 속성에 익명 함수를 할당하는 방식. 이 경우에도 this는 해당 메서드를 `호출한 객체`를 가리킴

```js
const obj = {
  greet: function () {
    console.log(this); // 호출한 객체를 참조
  },
};
obj.greet(); // obj 객체를 출력
```

### 1.3 화살표 함수 (`key: () => {}`)

화살표 함수는 `ES6`에서 도입된 간결한 함수 정의 방식.  
중요한 차이점은 this가 `함수가 선언된 문맥에서 상속`된다는 것.  
즉, 화살표 함수 내에서는 자신의 this가 고정되어 외부 환경의 this를 가리킴

```js
const obj = {
  name: 'obj',
  greet: () => {
    console.log(this); // 외부의 this를 참조 (전역 객체 또는 undefined)
  },
};
obj.greet(); // 전역 객체 (브라우저에서는 window)를 출력
```

## 2. this 바인딩 차이

- 메서드 방식: `호출한 객체를 this로 바인딩`
- 함수 표현식: `호출한 객체를 this로 바인딩`
- 화살표 함수: 화살표 함수는 렉시컬 스코프를 따르므로, 정의된 위치의 this를 그대로 상속받음. 따라서 객체의 메서드로 사용할 때 화살표 함수를 사용하면, 의도한 객체가 아닌 외부 컨텍스트의 this가 사용될 수 있음

```js
const obj = {
  name: 'JavaScript',
  method1() {
    console.log(this.name); // obj 객체를 참조
  },
  method2: function () {
    console.log(this.name); // obj 객체를 참조
  },
  method3: () => {
    console.log(this.name); // 전역 객체 (브라우저에서는 window, undefined)
  },
};

obj.method1(); // "JavaScript"
obj.method2(); // "JavaScript"
obj.method3(); // undefined (전역 객체의 name 속성)
```

## 3. 프로토타입과의 차이

- 메서드 방식: 메서드는 프로토타입에 정의. 이로 인해 상속 시 메모리 측면에서 효율적 (모든 인스턴스가 이 메서드를 공유)
- 함수 표현식: 함수는 객체의 속성으로 정의. 객체를 생성할 때마다 함수가 개별적으로 생성
- 화살표 함수: 화살표 함수도 객체의 속성으로 정의되며, 마찬가지로 함수가 객체마다 개별적으로 생성

## 4. super 키워드 지원 여부

- 메서드 방식: super 키워드를 사용해 상위 객체의 메서드를 호출할 수 있음
- 함수 표현식: super 키워드를 사용할 수 없음
- 화살표 함수: super를 사용할 수 없음. 이는 this 바인딩이 외부 컨텍스트로 고정되기 때문에, 상위 객체를 참조하는 메커니즘이 없음

```js
const parent = {
  greet() {
    console.log('Hello from parent');
  },
};

const child = {
  greet() {
    super.greet(); // 부모의 메서드를 호출
  },
};

Object.setPrototypeOf(child, parent);
child.greet(); // "Hello from parent"
```

## 5. 주의사항

- 메서드 방식: 일반적인 메서드 정의에 적합하며, this가 호출된 객체를 참조.
- 함수 표현식: 기존 함수 정의와 유사한 방식으로 this를 사용할 수 있음.
- 화살표 함수: 화살표 함수는 메서드로 사용하기에는 적합하지 않으며, 콜백 함수나 고정된 this 바인딩이 필요한 상황에서 주로 사용됨. 특히 객체의 메서드로 정의할 경우 예상치 못한 this 참조 문제가 발생할 수 있음.

| 정의 방식       | 구문               | this 바인딩 방식                            | super 지원 | 프로토타입        |
| --------------- | ------------------ | ------------------------------------------- | ---------- | ----------------- |
| ES6 메서드 구문 | key() {}           | 호출된 객체를 참조                          | 지원       | 프로토타입에 정의 |
| 기존 함수 구문  | key: function() {} | 호출된 객체를 참조                          | 미지원     | 객체의 속성       |
| 화살표 함수     | key: () => {}      | 외부 컨텍스트의 this를 참조 (렉시컬 바인딩) | 미지원     | 객체의 속성       |
