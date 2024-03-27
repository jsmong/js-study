# CONTENT

1. [basic.js](#1-basicjs)
2. [statics.js](#2-staticsjs)
3. [filed.js](#3-fieldjs)
4. [getter.js](#4-getterjs)
5. [extends.js](#5-extendsjs)

<br /><br />

# 1. basic.js

- 객체를 손쉽게 만들 수 있는 템플릿: `생성자 함수`, `클래스`

- class를 만들 때는 class라는 키워드를 이용해 만들 수 있다.

- 각각의 class에는 생성자 함수가 있다.

- new 키워드로 객체를 생성할 때 생성자가 호출된다.

- 생성자에는 우리가 객체를 만드는데 필요한 데이터를 인자로 받아올 수 있도록
  함수형태와 비슷한 모양을 띄고 있다.

- 그 내부에서 this를 사용해 링크해주는 작업을 하면 된다.

- 객체 안에서 사용하는 멤버함수가 있다면, 이름만 작성해서 일반함수나 arrow function으로 작성해주면 된다.

<br />

```javascript
/** [용어정리]
 * 아래에서의 apple은 Fruit이라는 클래스의 인스턴스이다.
 * (Fruit이라는 클래스를 통해 만들어진 객체이기 때문에)
 * greenApple도 Fruit 클래스의 인스턴스이다.
 * 아래에서의 obj는 그냥 객체이고, 어떤 클래스의 인스턴스도 아니다.
 */
const apple = new Fruit('apple', '🍎');
const greenApple = new Fruit('greenApple', '🍏');
const obj = { name: 'ellie' };
```

<br /><br />

# 2. statics.js

- statics: 정적 프로퍼티, 메서드

```javascript
// static 정적 프로퍼티, 메서드
class Fruit {
  // 속성 앞에 메서드를 붙일 수 있다
  static MAX_FRUIT = 4;
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  // 클래식 레벨의 메서드
  static makeRandomFruit() {
    // static이 붙어있는 클래식 레벨의 메서드에서는
    // 주어진 데이터가 채워져있지 않는 템플릿 상태이기 때문에
    // this를 사용할 수 없다.
    return new Fruit('banana', '🍌');
  }

  // 인스턴스 레벨의 메서드
  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

// 인스턴스레벨의 프로퍼티와 메서드는
// 꼭 생성된 인스턴스와 메서드를 통해서 접근 가능하다.
// (아래 두 호출은 실행되지 않음)
// console.log(Fruit.name);
// Fruit.display();
const banana = Fruit.makeRandomFruit();
console.log(banana);
console.log(Fruit.MAX_FRUIT);

// apple은 Fruit 클래스의 인스턴스이다.
const apple = new Fruit('apple', '🍎');
const greenApple = new Fruit('greenApple', '🍏');
const obj = { name: 'ellie' };

console.log(apple);
console.log(greenApple);
console.log(apple.name);
console.log(apple.display);

// 추가 예제
Math.pow();
Number.isFinite(1);
```

<br /><br />

# 3. field.js

- 접근제어자 - 캡슐화

- 내부상으로 필요한 데이터를 외부에서 보이게 하거나 수정할 수 없도록 감춰두는 것

- 다른 언어에서는 private, public, protected 키워드 사용

- js에서는 #(=private, public은 기본값)을 붙여서 제어(control)가 가능하다.

<br />

```javascript
class Fruit {
  // 클래스 Fruit에는 세가지 변수(프로퍼티)가 있는데
  // 두 개는 외부로부터 전달받은 데이터로 할당해줄 것이고,
  // type은 클래스가 만들어지자마자 과일로 초기화가 되어 있다.

  // 보통은 js에서에서 컨스트럭터에서 주어지는 데이터라면 생략 가능하다.
  #name;
  #emoji;
  // 인스턴스를 만들 때 초기화가 되어야 한다면 윗부분(생성자 밖)에다 설정할 수 있다.
  #type = '과일';

  constructor(name, emoji) {
    this.#name = name;
    this.#emoji = emoji;
  }

  display = () => {
    console.log(`${this.#name}: ${this.#emoji}`);
  };
}

const apple = new Fruit('apple', '🍎');
// apple.#name = '오렌지';     // 에러난다. #field는 외부에서 접근이 불가능함!
console.log(apple);
```

<br /><br />

# 4. getter.js

- 접근자 프로퍼티 (Accessor Property)

```javascript
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    // this.fullName 으로 하지 않는 이유?
    // -> 생성자가 호출되고 난 후 인자를 바꼈을 경우, 생성자가 만들어진 이후는 업데이트 되지 않기 때문에
  }
  // 내가 원하는 함수 앞에 get을 붙이면, 함수지만 호출하는 시점에 데이터를 만들어서 리턴을 하는데
  // 속성에 가깝기 때문에 함수 호출하는 것처럼 호출하지 않고 속성에 접근하는 것처럼 만들 수 있다!
  get fullName() {
    return `${this.lastName} ${this.firstName}`;
  }

  // set은 할당할 때!
  set fullName(value) {
    console.log('set :', value);
  }
}

const student = new Student('수지', '김');
console.log(student.firstName);
student.fullName = '김철수';
```

<br /><br />

# 5. extends.js

```javascript
// 공통된 부분을 빼고 상속으로 쓰기

class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log('먹자!');
  }
  sleep() {
    console.log('잔다.');
  }
}

class Tiger extends Animal {
  // 상속만 하고 클래스 안에 아무것도 만들지 않아도 가능
}
const tiger = new Tiger('노랑이');
console.log(tiger);
tiger.eat();
tiger.sleep();

class Cat extends Animal {
  // 자식에 새로 constructor를 만들려면 부모 요소에 있는 것 똑같이 받아오고(color)
  // 그 이후에 만들려는 것(ownerName)을 추가해야 함
  constructor(color, ownerName) {
    // [super] 상속하고 있는 부모클래스를 가르킴
    super(color);
    this.ownerName = ownerName;
  }
  play() {
    console.log('놀자~');
  }
  // 부모의 행동을 내 행동으로 덮어 씌우기
  // 이를 '오버라이딩(overriding)' 이라고 함
  eat() {
    // 부모의 eat을 호출하고 그 이후 내가 바꿀 개념으로 변경할 수 있음
    super.eat();
    console.log('야옹이가 먹는다옹');
  }
}

const cat = new Cat('까망이', '올리비아');
console.log(cat);
cat.eat();
cat.sleep();
cat.play();
```
