# Class

##

### 1. basic.js

1. 클래스란?

- 객체를 손쉽게 만들 수 있는 탬플릿
  .. 참고로 객체를 손쉽게 생성할수 있는 방법에는 두가지가 있는데, 클래스가 대세라고함

1. 생성자 함수 (오래된 고전적인 방법)
2. 클래스 (대세임 이거 쓰셈)

2) 클래스 사용법

```js
// 1. 클래스 정의
class Fruit {
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  // 함수는 constructor 바깥에 정의
  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

// 2. 인스턴스 생성하기
let apple = new Friut('apple', '🍎');
console.log(apple.name); // apple
console.log(apple.emoji); // 🍎
apple.display(); // apple: 🍎

// ** 참고 ** 인스턴스 레벨에서 생성된 함수
// 이 자체만으로는 접근이 불가능하다 -> 인스턴스로 만든 뒤, 접근가능
console.log(Fruit.name);
console.log(Fruit.display());
```

### 2. static.js

1. static 정적 프로퍼티, 메서드

- 클래스 레벨 메서드(static 으로 만들어진 메서드)는 인스턴스 레벨에선 보이지 않고, 클래스 이름을 통해서만 접근 가능
- 클래스 레벨에서 공통적으로 사용할 녀석들에 정의해주기
- class - static 예시

```js
Math.pow(); // Math 인스턴스를 사용하지 않아도, 바로 메서드 실행가능
Number.isFinite(1);
```

- static 함수 쓰는법

```js
class Fruit {
  // 인스턴스 레벨에서 접근 불가, 클래스 레벨에서만 접근 가능
  // static 키워드 붙이면 생성가능
  static MAX_FRUIT = 4;

  // 생성자: new 키워드로 객체를 생성할때 호출되는 함수
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  // 클래스 레벨의 메서드 : static 키워드 붙이면 생성가능
  static makeRandomFruit() {
    // 클래스 레벨의 메서드에서는 this를 참조할수 없음
    return new Fruit('banana', '🍌');
  }

  // 인스턴스 레벨의 메서드
  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

// 인스턴스 레벨의 함수와 프로퍼티 : 인스턴스를 생성 후 접근 가능
const apple = new Fruit('apple', '🍎');
const orange = new Fruit('orange', '🍊');

// 인스턴스 레벨에서 생성된 함수
// 이 자체만으로는 접근이 불가능하다 -> 인스턴스로 만든 뒤, 접근가능
// console.log(Fruit.name);
// console.log(Fruit.display())

console.log(apple.name);
console.log(apple.emoji);
apple.display();
```

### 3. field.js

- 클래스 내부에서만 사용할 프라이빗한 field 가 있다면 #을 붙여서 사용하자

```js
class Fruit {
  #name;
  constructor(name, emoji) {
    this.#name = name;
    this.emoji = emoji;
  }
  #display = () => {
    console.log(`${this.#name}: ${this.emoji}`);
  };
}

const apple = new Fruit('apple', '🍎');
// apple.#name = '오렌지'; // #field 클래스 외부에서 접근 불가
console.log(apple);
```

### 4. getter.js (접근자 프로퍼티)

1. get

- 함수지만, 속성이라고 간주되는 유형의 함수를 속성처럼 접근하고 싶을때 -> get 사용

2. set

-

```js
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // 그냥 이름을 리턴하는 함수. 속성같은 풀네임을 함수라고 쓰는게 이상함
  // --> get 써서 속성같이 호출하자
  // fullName() {
  //   return `${this.lastName} ${this.firstName}`;
  // }

  // 함수지만, 속성이라 간주되는 유형의 함수를 속성처럼 접근 -> get
  get fullName() {
    return `${this.lastName} ${this.firstName}`;
  }

  set fullName(value) {
    console.log('set', value);
  }
}

const student = new Student('수지', '김');
// console.log(student.fullName()); // 이렇게 접근하기가 싫다 -> getter!
console.log(student.fullName); // 김 수지
student.fullName = '김철수'; // set 김철수
```

### 5. extends.js

1. extends

- 특정 클래스를 부모로 설정하면, class 도 부모의 속성과 메서드를 상속받을수 있다. 이때 사용하는 키워드가 extends 이다.
- 쓰는 방법

```js
class 자식 extends 부모 {}
```

// super - super(부모프로퍼티), super.부모메서드

```js
// 1. 공통의 양식(부모 클래스) 생성
class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log('먹자');
  }
  sleep() {
    console.log('자자');
  }
}

class Tiger extends Animal {}
const tiger = new Tiger('노랑');
console.log(tiger); // Tiger { color: '노랑' }
tiger.eat(); // 먹자 - 따로 정의하지 않아도, 부모의 메서드를 상속 받는다.
tiger.sleep(); // 자자
```

2. super

- 특정 class 를 extends 한 후, 부모의 속성이나 메서드는 그대로 사용하고, 추가되는 정의하고 싶다면, super 키워드를 사용하자. -> 그렇지 않고 그냥 정의하면 클래스가 재정의 되어버림

```js
class Dog extends Animal {
  // Animal 에서 받아오는거 먼저 받아와야해! 리셋되니까
  constructor(color, ownerName) {
    super(color); // 부모 class 들렸다옴
    this.ownerName = ownerName;
  }
  play() {
    console.log('놀자');
  }
  // 부모내용 덮어씌움 -> 오버라이딩
  eat() {
    // super - 부모를 가리킴
    super.eat(); // 부모의 eat()을 호출함
    console.log('강아지가 먹자');
  }
}
const dog = new Dog('파랑', '현정');
console.log(dog); // { color: '파랑', ownerName: '현정' }
dog.eat(); // 먹자  // 강아지가 먹자
dog.sleep(); // 자자
dog.play(); // 놀자
```

## Quiz

### 1. 초기값에서 1씩 증가하는 카운터 클래스

```js
class Counter {
  constructor(num) {
    this.num = num;
  }
  count() {
    return this.num++;
  }
}
const counterIns = new Counter(1);
counterIns.count();
counterIns.count();
counterIns.count();
console.log(counterIns.num);
```

- 후회포인트
- 1. 늘어나는거면 함수명 increase 이런식으로 더 구체적으로 해줄걸
- 2. 여러가지 경우의 수 생각 못함 (숫자가 아닌 값을 초기값으로 넣을 때, 음수 넣을때.. 등등)

### 2. 정직원, 파트타임 타입에 따른 직원정보 계산 클래스

1. 풀이 1. (상속 안쓰고 분기처리함)

```js
class Staff {
  #wage;
  constructor(name, part, workTime, staffType) {
    this.name = name;
    this.part = part;
    this.workTime = workTime;
    if (staffType === '정직원') {
      this.#wage = 10000;
    } else {
      this.#wage = 8000;
    }
  }
  get salary() {
    // ㅎㅎ.. 천단위로 잘라주게 toLocalString()도 넣어줌 ^^
    return (this.#wage * this.workTime).toLocaleString();
  }
}

// 테스트 코드
const staff1 = new Staff('장현정', '개발부', 40, '정직원');
console.log(staff1.salary);
console.log(staff1.wage);
```

2. 풀이2. 상속 써봄

```js
class Staff {
  constructor(name, part, workTime) {
    this.name = name;
    this.part = part;
    this.workTime = workTime;
  }
  get salary() {
    // 함수 실행 시점에만 undefined 아니면 되는건가..?
    return (this.wage * this.workTime).toLocaleString();
  }
}

class FulltimeStaff extends Staff {
  constructor(name, part, workTime) {
    // super 따로 호출했다 자꾸 에러나길래 열거했더니... 원래 이렇게 쓰는거구나..!
    super(name, part, workTime);
    this.wage = 10000;
  }
}

class PartTimeStaff extends Staff {
  constructor(name, part, workTime) {
    super(name, part, workTime);
    this.wage = 8000;
  }
}
// 테스트 코드
const 현정 = new FulltimeStaff('장현정', '개발부', 40);
console.log(현정.salary);
console.log(현정.wage);

const 은우 = new PartTimeStaff('차은우', '개발부', '40');
console.log(은우.salary);
console.log(은우.wage);
```

## 회고

- 강의들으면서 'ㅇㅋㅇㅋ 이해했음..' 하면서 대충 넘어갔는데, 막상 문제 풀라니까 '클래스 어떻게 써야했었지..' 부터 시작해서 현타왔음. 그래도 덕뿐에 다시보고 언젠간 쓸수 있게 됨.. ^^
- 두번째 퀴즈 같은 경우는 시급을 프라이빗값으로 넣어주고 싶었는데, (아무래도 시급은 비밀로 하고 싶으니까..) 프라이빗 값은 클래스 바디에서만 유효한 값이라, 부모의 함수가 참고하지 못한다는 사실.. 다시한번 깨닫습니다.
- 부모 extends 할때 오버라이딩 방지하려고 constructor 랑 메서드 super 써서 다시 한번씩 불러오는거 귀찮음.(자바스크립트 선생님의 깊은 뜻이 있어 이렇게 하는거겠지만.. ) 그냥 한번에 가져오는 방법이 없나?
