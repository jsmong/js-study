# ▪︎ 프로토타입(Prototype)

## ▫︎ 정의

- 원형, 시제품
- 어떤 형태를 복사해서 개발하기 전의 원래 버전
- 그룹의 공통 특징들을 나타내는 것
- 개발 초기 단계의 예제

JS는 프로토타입 기반의 객체 지향을 지원하는 다중 패러다임 언어이다.
ES6 이후 class 문법을 지원하지만, 이는 프로토타입의 문법적 설탕이다.

- 모든 객체들은 객체 간 상속을 위해 내부에 숨겨진 [[Prototype]]을 가진다.
- 프로토타입은 외부에서 직접 접근이 불가하다.
  - **proto** 프로퍼티
  - Object.getPrototypeOf() → ES5 표준
  - Object.setPrototypeOf()
  - 생성자 함수에서는 prototype 프로퍼티로 접근 가능
- 객체 간 상속의 연결 고리는 `프로토타입 체인`으로 연결되어 있다.

## ▫︎ 프로토타입 디스크립터

오브젝트의 각각의 프로퍼티는 프로퍼티 디스크립터라는 객체로 저장된다.

```js
const dog = { name: "강쥐", emoji: "🐶" };
const descriptors = Object.getOwnPropertyDescriptors(dog);
console.log(descriptors);
/*
{ 
	name: {
		configurable: true,
		enumerable: true,
		value: "강쥐",
		writable: true
	},
	emoji: {
		configurable: true,
		enumerable: true,
		value: "🐶",
		writable: true
	}
}
*/

Object.defineProperty(dog, "name", {
  configurable: false,
  enumerable: false,
  value: "강쥐",
  writable: false,
});

Object.freeze(dog); // 추가, 삭제, 쓰기, 속성 재정의 불가 (단, 1depth 만)
Object.seal(dog); // 값만 수정 가능
Object.preventExtensions(dog); // 추가(확장)만 안됨

Object.isFrozen(dog); // 동결 여부
Object.isSealed(dog); // 밀봉 여부
Object.isExtensible(dog); // 확장 여부
```

## ▫︎ 프로토타입 레벨 함수

```js
function Dog(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  // 인스턴스 레벨 함수 (1)
  /* this.printName = () => {
		console.log(`${this.name} ${this.emoji}`)
  } */
}

// 프로토타입 레벨 함수 (2)
Dog.prototype.printName = function () {
  console.log(`${this.name} ${this.emoji}`);
};

const dog1 = new Dog("강쥐", "🐶");
const dog2 = new Dog("멍멍이", "🐩");

// 오버라이딩 (3)
dog1.printName = function () {
  console.log("안녕~!");
};

// 동일한 Dog 프로토타입을 상속받아서 printName 사용가능
dog1.printName();
dog2.printName();
```

1. 생성자 함수 안에서 정의한 함수(인스턴스 레벨)는 객체를 생성할 때 마다 생성되므로 메모리 낭비가 심하다.
2. 프로토타입 레벨의 함수를 사용하면 메모리 절약 가능!
3. 자식(인스턴스) 레벨에서 함수를 재정의(오버라이딩) 하면 부모(프로토타입) 레벨의 함수의 프로퍼티는 가려진다.(섀도잉)

```js
function Animal(name, emoji) {
  this.name = name;
  this.emoji = emoji;
}

Animal.prototype.printName = function () {
  console.log(`${this.name} ${this.emoji}`);
};

function Dog(name, emoji, owner) {
  // Function.prototype.call(): 이미 할당되어있는 다른 객체의 함수/메소드를 호출하는 해당 객체에 재할당
  Animal.call(this, name, emoji); // class에선 super(name, emoji) 와 같음
}

// Object.create(): 지정된 프로토타입 객체 및 속성(property)을 갖는 새 객체를 생성
Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.play = function () {
  console.log("놀자!");
};

const dog1 = new Dog("강쥐", "🐶", "현주");

// instanceof: 상속도 확인 가능
dog1 instanceof Dog; // true
```

- Object는 단 하나의 prototype을 가리킬 수 있다. (부모는 하나)
- 여러 개의 함수를 상속받고 싶으면 → Mixin !

```js
const play = {
  play: function () {
    console.log(`${this.name} 놀자!`);
  },
};

const sleep = {
  sleep: function () {
    console.log(`${this.name} 자자!`);
  },
};

function Dog(name) {
  this.name = name;
}

Object.assign(Dog.prototype, play, sleep);
const dog = new Dog("멍멍!");

console.log(dog);

dog.play();
dog.sleep();

class Animal {}
class Tiger extends Animal {
  constructor(name) {
    super();
    this.name = name;
  }
}

Object.assign(Tiger.prototype, play, sleep);
const tiger = new Tiger("어흥!");

tiger.play();
tiger.sleep();
```
