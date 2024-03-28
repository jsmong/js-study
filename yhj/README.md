# Class

## Class란?

- JS에서는 생성자 함수로 객체를 만들어 낼 수 있다. → 프로토타입 베이스 객체지향 프로그래밍 지원하기 때문에 가능.
- 대부분의 프로그래밍 언어는 프로토타입이 아닌 클래스 기반으로 OOP 지원함.
- ES6에서 클래스 도입 → 내부적으로는 프로토타입을 쓰고 문법적으로 class 지원 (syntax sugar)
- 클래스 : 객체를 생성할 수 있는 템플릿
- 현업에서 대부분 생성자 함수 사용 X → 클래스 사용함.
- 인스턴스 : 클래스를 통해 만들어진 객체

객체를 만드는 방법

1. 생성자 함수

   ```jsx
   function Fruit(name, emoji) { // 생성자 함수명은 대문자로
   	this.name = name
   	this.emoji = emoji
   	this.display = () => {
   		console.log(`${this.name}: ${this.emoji}`)
   		return this // 생성자 함수에서는 자동으로 this 리턴
   }

   const apple = new Fruit('apple', '🍎')
   const orange = new Fruit('orange', '🍊')

   console.log(apple, orange)
   ```

2. 클래스

   ```jsx
   class Fruit {
     // 생성자
     constructor(name, emoji) {
       this.name = name;
       this.emoji = emoji;
     }

     // 멤버함수
     display = () => {
       console.log(`${this.name}: ${this.emoji}`);
     };
   }

   // Fruit 클래스의 인스턴스
   const apple = new Fruit("apple", "🍎");
   const orange = new Fruit("orange", "🍊");

   console.log(apple, orange);
   apple.display();
   ```

## Class 재사용성 높이기

```jsx
class Fruit {
	// 생성자
	constructor(name, emoji) {
		this.name = name
		this.emoji = emoji
	}

	// static: 정적 프로퍼티
	static makeRandomFruit() {
		// 클래스 레벨의 메서드는 this 참조 불가
		return new Fruit('banana', 🍌)
	}

	// 멤버함수
	display = () => {
		console.log(`${this.name}: ${this.emoji}`)
	}
}

// 클래스 레벨 메서드는 클래스명으로 접근 가능
const banana = Fruit.makeRandomFruit()
console.log(banana)

// Fruit 클래스의 인스턴스
const apple = new Fruit('apple', '🍎')
const orange = new Fruit('orange', '🍊')

console.log(apple, orange)
apple.display()

// Static Use Examples
Math.pow() // Math Object를 직접 만들지 않아도 유틸리티 함수 접근 가능
Number.isFinite(1)
```

- static을 붙이지 않으면 instance 레벨
- class 레벨의 프로퍼티와 메서드는 공통적으로 재사용 가능

## 필드 & 접근 제어자

```jsx
class Fruit {
  // 필드
  #name; // private field
  _emoji; // protected field
  type = "과일";

  // 생성자
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  // 멤버함수
  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

const apple = new Fruit("apple", "🍎");
apple.#name = "orange"; // #(private)은 외부에서 접근 불가함
console.log(apple);
```

- 접근제어자 : 외부에서 데이터 변경 불가능하게 캡슐화 할 수 있다.
- JS에서는 `#`(private), `_`(protected) 키워드를 프로퍼티 명 앞에 붙여 사용한다.
- public: 클래스 외부, 내부, 상속받은 클래스 모두 접근 가능
- `#`(private) : 클래스 내부에서만 접근 가능
- `_`(protected) : 클래스 내부와 상속받은 클래스에서만 접근 가능

## Getter & Setter

```jsx
// 접근자 프로퍼티
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.lastName} ${this.firstName}`;
  }

  set fullName(value) {
    console.log(value);
  }

  // fullName() {
  //	return `${this.lastName} ${this.firstName}`
  // }
}
const student = new Student("현주", "유");
console.log(student.firstName);
// console.log(student.fullName())
console.log(student.fulltName); // get
student.fullName = "유재석"; // set
```

- 행동이 아니라 객체의 상태를 얻는 것인데 함수처럼 사용하는게 이상하게 느껴짐. 그렇다고 student.firstName = ‘재석’ 이런 식으로 변경하려 하면, 이미 생성자가 호출된 시점이기 때문에 fullName이 update 되지 않음. → 이 때, 접근자 프로퍼티를 사용한다.
- get : 호출 시점에 데이터를 만들어서 리턴
- set : 할당 시점에 호출됨

## 상속(extends)

```jsx
class Tiger {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log("먹는다");
  }
  sleep() {
    console.log("잔다");
  }
}

class Dog {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log("먹는다");
  }
  sleep() {
    console.log("잔다");
  }
  play() {
    console.log("놀자!");
  }
}
```

- 위와 같이 비슷한 클래스가 반복될 때 상속을 사용할 수 있다.

```jsx
class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log("먹는다");
  }
  sleep() {
    console.log("잔다");
  }
}

class Tiger extends Animal {}
const tiger = new Tiger("white");
console.log(tiger);
tiger.eat();

class Dog extends Animal {
  constructor(color, ownerName) {
    super(color); // 부모 클래스의 color 속성
    this.ownerName = ownerName;
  }
  // 필요한 함수 추가 가능
  play() {
    console.log("놀자!");
  }

  // overriding : 부모의 메서드 덮어씌우기
  eat() {
    console.log("강쥐가 먹는다");
  }
}

const dog = new Dog("blue");
console.log(dog);
dog.play();
```

- 상속으로 공통된 것은 가지고, 추가 구현가능
- 자식 클래스에서 생성자 정의할 때 부모에 있는 속성도 함께 받아와야 함 (super 키워드)

## Quiz

Q. 0 이상의 값으로 초기화 한 뒤 하나씩 숫자를 증가할 수 있는 Counter 클래스를 만들어라.

- 나의 답

```jsx
class Counter {
  constructor(num) {
    this.num = num;
  }

  increase() {
    this.num++;
    console.log(this.num);
  }
}

const counter = new Counter(0);
counter.increase();
```

- 정답

```jsx
class Counter {
  #value;
  constructor(startValue) {
    if (isNaN(startValue) || startValue < 0) {
      this.#value = 0;
    } else {
      this.#value = startValue;
    }
  }

  get value() {
    return this.#value;
  }

  increment = () => {
    this.#value++;
  };
}

const counter = new Counter(0);
counter.increment();
```

Q. 정직원과 파트타임 직원을 나타낼 수 있는 클래스를 만들어라.

- 직원들의 정보: 이름, 부서명, 한 달 근무 시간
- 매달 직원들의 정보를 이용해 한 달 월급을 계산할 수 있다.

  - 정직원 : 시간 당 10000원
  - 파트타임 직원 : 시간 당 8000원

- 나의 답

```jsx
class Employee {
  constructor(name, department, workHour, wage) {
    this.name = name; // 이름
    this.department = department; // 부서
    this.workHour = workHour; // 근무시간
    this.wage = wage; // 시급
  }

  salaryCalc = () => {
    return this.workHour * this.wage * 30;
  };
}

class FullTime extends Employee {}
class PartTime extends Employee {}

const fullTime = new FullTime("김천규", "BE", 30, 10000);
const partTime = new PartTime("유현주", "FE", 20, 8000);

fullTime.salaryCalc();
partTime.salaryCalc();
```

- 정답

```jsx
class Employee {
  constructor(name, department, hoursPerMonth, payRate) {
    this.name = name; // 이름
    this.department = department; // 부서
    this.hoursPerMonth = hoursPerMonth; // 근무시간
    this.payRate = payRate; // 시급
  }

  calcPay = () => {
    return this.hoursPerMonth * this.payRate * 30;
  };
}

class FullTimeEmp extends Employee {
  static PAY_RATE = 10000;
  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth, FullTimeEmp.PAY_RATE);
  }
}

class PartTimeEmp extends Employee {
  static PAY_RATE = 8000;
  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth, PartTimeEmp.PAY_RATE);
  }
}

const ellie = new FullTimeEmp("엘리", "s/w", 30);
const bob = new PartTimeEmp("밥", "s/w", 20);

ellie.calcPay();
bob.calcPay();
```

## 회고

- 객체와 인스턴스의 차이점을 다시 한 번 상기할 수 있었다.
- 퀴즈 풀어보면서 내 코드의 부족한 점(변수명, 접근 제어자, 접근자 프로퍼티, 상속, static 등)을 깨닫게 되었다.
