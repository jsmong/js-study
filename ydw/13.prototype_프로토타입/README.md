# Javascript Prototype

## 1. 프로토타입과 상속

### 프로토타입 개요

- 프로토타입: 자바스크립트의 모든 객체는 숨겨진 <code>[[Prototype]]</code>이라는 속성을 가지고 있으며, 이를 통해 상속 관계가 형성
- 객체의 프로토타입은 외부에서 직접 접근할 수 없지만, 생성자 함수에서는 <code>prototype</code> 속성을 통해 접근 가능

- 프로토타입 체인: 객체 간 상속은 프로토타입 체인을 통해 연결됩니다. 예를 들어, 배열 객체는 Array 객체를, Array는 다시 Object 객체를 상속받음

```jsx
const arr = [1];
console.log(arr.__proto__); // Array.prototype
console.log(arr.__proto__.__proto__); // Object.prototype
```

## 2. 프로퍼티 디스크립터

객체의 프로퍼티는 기본적으로

- 열거 가능(enumerable)
- 쓰기 가능(writable)
- 삭제 가능(configurable) <br/>

여부에 따라 정의, 이를 프로퍼티 디스크립터로 확인하고 수정할 수 있음.

```jsx
const dog = { name: '와우', emoji: '🐶' };
const descriptors = Object.getOwnPropertyDescriptors(dog);
console.log(descriptors);
```

- Object.defineProperty()를 사용하여 객체의 속성을 수정할 수 있음.

```jsx
Object.defineProperty(dog, 'name', {
  value: '멍멍',
  writable: false,
  enumerable: false,
  configurable: false,
});
console.log(dog.name); // 멍멍
```

## 3. 객체 불변성

### Object.freeze()와 Object.seal()

- <code>Object.freeze()</code>: 객체를 완전히 동결하여 값을 수정하거나 삭제할 수 없음
- <code>Object.seal()</code>: 새로운 속성 추가는 불가능하지만, 기존 속성은 수정할 수 있음

```jsx
const dog = { name: '와우', emoji: '🐶' };
Object.freeze(dog);
dog.name = '멍멍'; // 무시됨
console.log(dog.name); // 와우
```

### Object.preventExtensions()

객체에 새로운 속성을 추가하는 것을 방지하지만, 기존 속성의 삭제와 수정은 가능

```jsx
const tiger = { name: '어흥' };
Object.preventExtensions(tiger);
console.log(Object.isExtensible(tiger)); // false
```

## 4. 프로토타입 레벨 함수

생성자 함수를 통해 생성된 객체는 프로토타입 체인을 통해 공통 메서드를 상속받을 수 있음.

```jsx
function Dog(name, emoji) {
  this.name = name;
  this.emoji = emoji;
}

Dog.prototype.printName = function () {
  console.log(`${this.name} ${this.emoji}`);
};

const dog1 = new Dog('뭉치', '🐶');
dog1.printName(); // 뭉치 🐶
```

- <code>오버라이딩(Overriding)</code>: 자식 객체에서 부모 객체의 함수를 동일한 이름으로 재정의할 수 있습니다. 이를 통해 부모의 메서드를 가릴 수 있습니다.

```jsx
dog1.printName = function () {
  console.log('안녕!!');
};
dog1.printName(); // 안녕!!
```

## 5. 프로토타입 레벨 함수

프로토타입을 이용한 상속
프로토타입을 사용하여 객체 간 상속을 구현할 수 있습니다. Animal 객체를 상속받는 Dog와 Tiger 객체를 만듬

```jsx
function Animal(name, emoji) {
  this.name = name;
  this.emoji = emoji;
}

Animal.prototype.printName = function () {
  console.log(`${this.name} ${this.emoji}`);
};

function Dog(name, emoji, owner) {
  Animal.call(this, name, emoji);
  this.owner = owner;
}
Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.play = function () {
  console.log('같이 놀자용!');
};

const dog1 = new Dog('멍멍', '🐶', '엘리');
dog1.play(); // 같이 놀자용!
dog1.printName(); // 멍멍 🐶
```

## 6. 상속 확인 하는법

객체가 특정 생성자 함수에서 생성된 인스턴스인지 확인하려면 <code>instanceof</code> 연산자를 사용할 수 있습니다.

```jsx
console.log(dog1 instanceof Dog); // true
console.log(dog1 instanceof Animal); // true
console.log(dog1 instanceof Tiger); // false
```

## 7. Mixin

자바스크립트는 하나의 객체만 프로토타입 체인으로 상속받을 수 있지만, Mixin을 사용하여 여러 개의 기능을 객체에 추가할 수 있음

```jsx
const play = {
  play() {
    console.log(`${this.name} 놀아요!`);
  },
};

const sleep = {
  sleep() {
    console.log(`${this.name} 자요!`);
  },
};

Object.assign(Dog.prototype, play, sleep);

const dog = new Dog('멍멍');
dog.play(); // 멍멍 놀아요!
dog.sleep(); // 멍멍 자요!
```

## \* 게임 캐릭터 시스템 예시

```jsx
// 공통 캐릭터 생성자 함수
function Character(name, hp) {
  this.name = name;
  this.hp = hp;
}

Character.prototype.attack = function (target) {
  console.log(
    `${this.name}이(가) ${target.name}을(를) 공격합니다!`
  );
  target.hp -= 10;
};

Character.prototype.getStatus = function () {
  console.log(`${this.name}: 남은 체력 = ${this.hp}`);
};

// 전사 캐릭터
function Warrior(name, hp) {
  Character.call(this, name, hp);
}

// 프로토타입을 통해 상속 설정
Warrior.prototype = Object.create(Character.prototype);

// 전사의 방어 능력
Warrior.prototype.defend = function () {
  console.log(`${this.name}이(가) 방어 자세를 취합니다!`);
};

// 마법사 캐릭터
function Mage(name, hp) {
  Character.call(this, name, hp);
}

Mage.prototype = Object.create(Character.prototype);

// 마법사의 특수 능력 (마법 시전)
Mage.prototype.castSpell = function (target) {
  console.log(
    `${this.name}이(가) ${target.name}에게 마법을 시전합니다!`
  );
  target.hp -= 20; // 마법은 일반 공격보다 강함
};

// 캐릭터 생성
const warrior = new Warrior('전사', 100);
const mage = new Mage('마법사', 80);

// 전사와 마법사 상태 확인
warrior.getStatus(); // 전사: 남은 체력 = 100
mage.getStatus(); // 마법사: 남은 체력 = 80

// 전사와 마법사 간 공격
warrior.attack(mage); // 전사 -> 마법사 공격
mage.castSpell(warrior); // 마법사 -> 전사 마법 시전

// 전사가 방어
warrior.defend(); // 전사 방어

// 전투 후 상태 확인
warrior.getStatus(); // 전사: 남은 체력 = 업데이트된 체력
mage.getStatus(); // 마법사: 남은 체력 = 업데이트된 체력
```

### 요약 설명

- 공통 행동: Character 생성자 함수에서 캐릭터의 공통 속성(이름, 체력)과 행동(공격, 상태 확인)을 정의
- 상속: Warrior와 Mage는 Character를 상속받아 공통된 행동을 공유하면서, 자신만의 특수 능력(defend, castSpell)을 추가
- 간단한 상호작용: 전사가 마법사에게 일반 공격을 하고, 마법사는 전사에게 마법을 시전한 후, 전사는 방어하는 식으로 간단한 상호작용을 구현]
