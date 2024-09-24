# Prototype

> - 객체간 상속을 위해 모든 객체는 내부에 숨겨진 `[[Prototype]]`을 가지고 있음
> - 외부에서 직접 접근 불가
> - Object.getPrototypeOf()  
>   Object.setPrototypeOf()  
>   생성자 함수에서는 prototype으로 접근 가능

## Object의 불변성

```javascript
const person = { name: 'jb', age: 27 };
console.log(Object.keys(person)); // ['name', 'age']

Object.defineProperty(person, 'name', {
  value: 'Jeongbin',
  writable: false,
  enumerable: false,
  configurable: false,
});

console.log(Object.keys(person)); // ['age']
```

### Object.freeze

추가 X, 삭제 X, 쓰기X, 속성 재정의 X

- 객체를 완전히 불변하게 만들고, 상태 관리나 중요한 데이터 보호에 사용

### Object.seal

값의 수정 O 추가 X, 삭제 X, 속성 재정의 X

- 객체의 구조는 보호하면서도 기존 값의 수정을 허용할 때 유용

### Object.preventExtensions

추가 X

<br/>
<br/>

### 사용 목적

    주로 코드 안정성을 높이고, 의도하지 않은 객체 변경을 방지하는 데에 사용

### 사용 예시

```javascript
// 상수 객체 정의
// 설정값, 환경 변수, 고정된 값을 가지는 객체 등을 정의할 때 사용하여 값이 의도치 않게 변경되는 것을 방지
const config = Object.freeze({
  apiUrl: 'https://api.example.com',
  timeout: 5000,
});

config.apiUrl = 'https://newApi.example.com'; // 수정 불가
```

<br/>
<br/>
<br/>

> 최신 Jㄴ, Ts에서는 prototype을 직접적으로 사용하지 않음

### Mixin

오브젝트는 단 하나의 prototype을 가리킬 수 있다 (부모는 단 하나!)  
하지만 여러개의 함수들을 사용하고 싶다면 -> Mixin

```javascript
const play = {
  play: function () {
    console.log(`${this.name} 놀아요!`);
  },
};

const sleep = {
  sleep: function () {
    console.log(`${this.name} 자요!`);
  },
};

function Dog(name) {
  this.name = name;
}

Object.assign(Dog.prototype, play, sleep);
const dog = new Dog('멍멍');

// dog : {
//     "name": "멍멍"
//     [[Prototype]]: Object
//         play: f ()
//         sleep: f ()
// }

dog.play(); // 멍멍 놀아요!
dog.sleep(); // 멍멍 자요!
```

```javascript
// JS에서 클래스를 사용할 수 있지만 내부적으로는 결국 Prototype을 사용하는 것
class Animal {}
class Tiger extends Animal {
  constructor(name) {
    super();
    this.name = name;
  }
}

Object.assign(Tiger.prototype, play, sleep);
const tiger = new Tiger('어흥!');
tiger.play();
tiger.sleep();
```

### Quiz

프로토타입을 베이스로한 객체지향프로그래밍 -> 클래스를 베이스로

```javascript
// Prototype Base

function Animal(name, emoji) {
  this.name = name;
  this.emoji = emoji;
}

Animal.prototype.printName = function () {
  console.log(`${this.name} ${this.emoji}`);
};

function Dog(name, emoji) {
  // super(name, emoji)
  Animal.call(this, name, emoji);
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.play = () => {
  console.log('같이 놀자옹!');
};
const dog1 = new Dog('뭉치', '🐶');
console.log(dog1);
dog1.printName();
dog1.play();

function Tiger(name, emoji) {
  Animal.call(this, name, emoji);
}

Tiger.prototype = Object.create(Animal.prototype);
Tiger.prototype.hunt = () => {
  console.log('사냥!');
};
const tiger1 = new Tiger('호랑이', '🐯');
console.log(tiger1);
tiger1.printName();
tiger1.hunt();
```

```javascript
// Class Base

class Animal {
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  printName() {
    console.log(`${this.name} ${this.emoji}`);
  }
}

class Dog extends Animal {
  play() {
    console.log('같이 놀자옹!');
  }
}
class Tiger extends Animal {
  hunt() {
    console.log('사냥!');
  }
}

const dog = new Dog('멍멍이', '🐶');
const tiger = new Tiger('호랑이', '🐯');

dog.printName(); // 멍멍이 🐶
tiger.printName(); // 호랑이 🐯
dog.play(); // 같이 놀자옹!
tiger.hunt(); // 사냥!
```
