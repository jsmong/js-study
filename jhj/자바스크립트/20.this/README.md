# 비동기

## 정리

### 1. this 란?

#### 전체적으로 정리해보자면 ...

| 종류                          | this                                                                                                                 |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| 브라우저                      | windows                                                                                                              |
| node                          | this : modules / globalThis : 글로벌객체                                                                             |
| 일반 함수                     | 1. 느슨한 모드 : 전역객체                                                                                            |
|                               | 2. 엄격한 모드 : undefined                                                                                           |
| 생성자 함수 / object안의 함수 | 1. 기본적으로 누가 호출하느냐에 따라 동적으로 결정                                                                   |
|                               | - 기본적으로 호출시점에 앞에 있는 object                                                                             |
|                               | 2. [this 를 정적으로 고정하기 위한 방법] bind 매서드 사용시, this값을 임의로 지정 가능                               |
|                               | 3. [this 를 정적으로 고정하기 위한 방법] arrow 함수를 사용 시, 화살표 함수 밖에서 제일 근접한 스코프의 this를 가리킴 |

#### 1. 브라우저에서 this

| this    | globalThis |
| ------- | ---------- |
| windows | windows    |

#### 2. node에서 this

| this | globalThis |
| ---- | ---------- |
| 모듈 | 글로벌객체 |

##### 1) this

```js
const x = 0;
module.exports.x = x; // 모듈에 특정 값을 지정해두면
console.log(this); // this는 exports된 x 가 됨.
// 결과값 : { x: 0 }
```

##### 2) globalThis

```js
console.log(globalThis); // setTimeout등.. node에서 제공해주는 api
// globalThis.setTimeout(); // globalThis.명령어 형태로 사용하거나
// setTimeout(); // globalThis는 생략가능
```

#### 3. 함수 내부에서의 this

| 느슨한 모드('use strict' 미사용) | 엄격 모드('use strict' 사용) |
| -------------------------------- | ---------------------------- |
| globalThis                       | undefined                    |

###### 1) 느슨한 모드

```js
function fun() {
  console.log(this); // globalThis(느슨한모드)
}
fun();
```

###### 2) 엄격 모드

```js
'use strict';

function fun() {
  console.log(this); // undefined(엄격모드)
}
fun();
```

#### 3. 생성자 함수 내부에서의 this

###### 1) 호출시점에 앞에 있는 object

```js
function Cat(name) {
  this.name = name;
  this.printName = function () {
    console.log(`이 고양이 이름은 ${this.name}입니다`);
  };
}
function Dog(name) {
  this.name = name;
  this.printName = function () {
    console.log(`이 강아지 이름은 ${this.name}입니다`);
  };
}
const cat = new Cat('냥냥이');
const dog = new Dog('강강쥐');
cat.printName(); // 이 고양이 이름은 냥냥이입니다
dog.printName(); // 이 강아지 이름은 강강쥐입니다

dog.printName = cat.printName;
dog.printName(); // 이 고양이 이름은 강강쥐입니다 -> !!! dog의 this.name 받아옴
cat.printName(); // 이 고양이 이름은 냥냥이입니다

function printOnMonitor(printName) {
  console.log('모니터를 준비하고, 전달된 콜백 실행');
  printName();
  // 모니터를 준비하고, 전달된 콜백 실행
  // 이 고양이 이름은 undefined입니다
  // -> !!! object.printName처럼 printName을 호출하는 이가 없어서 undefined 출력
}
printOnMonitor(cat.printName);
```

##### 2) 동적으로 변경되는 this를 고정하기 위한 방법

1.  bind 함수 사용
2.  화살표 함수 사용

###### 1) bind 함수 사용

```js
function Cat(name) {
  this.name = name;
  this.printName = function () {
    console.log(`이 고양이 이름은 ${this.name}입니다`);
  };
  this.printName = this.printName.bind(this); // bind 사용하여 bind
}

function Dog(name) {
  this.name = name;
  this.printName = function () {
    console.log(`이 강아지 이름은 ${this.name}입니다`);
  };
}

dog.printName = cat.printName;
dog.printName(); // 이 고양이 이름은 냥냥이입니다 -> 고양이 이름 bind되어, 무조건 냥냥이 출력

function printOnMonitor(printName) {
  console.log('모니터를 준비하고, 전달된 콜백 실행');
  printName();
  // 모니터를 준비하고, 전달된 콜백 실행
  // 이 고양이 이름은 냥냥이입니다
}
printOnMonitor(cat.printName);
```

###### 2) 화살표 함수 사용

- arrow 함수는 렉시컬 환경에서의 this를 기억함!
- 화살표 함수 밖에서 제일 근접한 스코프의 this를 가리킴

```js
function Cat(name) {
  this.name = name;
  this.printName = () => {
    console.log(`이 고양이 이름은 ${this.name}입니다`);
  };
}

function Dog(name) {
  this.name = name;
  this.printName = function () {
    console.log(`이 강아지 이름은 ${this.name}입니다`);
  };
}

dog.printName = cat.printName;
dog.printName(); // 이 고양이 이름은 냥냥이입니다 -> 고양이 이름은 화살표 함수 밖에서 제일 근접한 스코프의 this를 가리킴

function printOnMonitor(printName) {
  console.log('모니터를 준비하고, 전달된 콜백 실행');
  printName();
  // 모니터를 준비하고, 전달된 콜백 실행
  // 이 고양이 이름은 냥냥이입니다
}
printOnMonitor(cat.printName);
```

### 2. arrow 함수

| 화살표 함수 특징                                              |
| ------------------------------------------------------------- |
| 1. 문법이 깔끔함                                              |
| 2. 생성자 함수로 사용이 불가능(무거운 프로토타입을 만들지 X)  |
| 3. 함수 자체 arguments 가지고 있지 않음                       |
| 4. this에 대한 바인딩이 정적으로 결정됨                       |
| - 함수에서 제일 근접한 상위 스코프의 this에 정적으로 바인딩됨 |

#### 1) 생성자 함수로 사용 불가능

```js
const dog = {
  name: '멍멍이',
  // play: function () {
  //   console.log('논다 멍멍'); // X !! 이렇게 쓰지 마셈 !!
  // },
  play: () => console.log('논다 멍멍'), // 화살표 함수로 사용하면 생성자 함수로 사용되는 걸 방지할 수 있음.
};
dog.play(); // 논다 멍멍
// const obj = new dog.play();
// 화살표함수로 미작성시: 이렇게 이상하게 생성자 함수로 만들수도있음
// 화살표 함수로 작성시:  에러남 dog.play is not a constructor
// console.log(obj); // 화살표함수로 미작성시 : play {}
```

#### 2) 이런식으로 매서드 형태로 작성도 가능

```js
// ES6
const cat = {
  name: 'cat',
  play() {
    // 객체의 메서드(오브젝트에 속한 함수)
    console.log('냐옹');
  },
};
cat.play(); // 냐옹
// const obj2 = new cat.play(); // 에러남 cat.play is not a constructor
```

#### 3) 함수 자체 arguments 가지고 있지 않음

- 화살표 함수를 사용안했을땐 -> 함수 자체의 arguments 소유

```js
function sum(a, b) {
  console.log(arguments);
}
sum(1, 2); // { '0': 1, '1': 2 }
```

- 화살표 함수 사용시 -> 함수 자체의 arguments X !!

```js
const add = (a, b) => console.log(arguments); // arrow함수 외부의 arguments를 참조만함
add(1, 2); // 전역객체의 arguments 출력
```

#### 4) this에 대한 바인딩이 정적으로 결정됨

- 함수에서 제일 근접한 상위 스코프의 this에 정적으로 바인딩됨

```js
const cat = {
  name: 'cat',
  play() {
    console.log('냐옹');
  },
};

const printArrow = () => {
  console.log(this); // globalThis
};
printArrow();

cat.printArrow = printArrow;
cat.printArrow(); // cat의 this인 globalThis 출력
```

## 느낀점
