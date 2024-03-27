# 9. 클래스, 최신 문법

## 9.1 클래스 소개

자바스크립트는 프로토타입을 베이스로 하지만 ES6 최신 버전부터 클래스를 기반으로 하여 객체지향 프로그래밍을 할 수 있다.

- 클래스는 객체를 생성할 수 있는 템플릿
  - 생성된 객체 : 인스턴스 (Instance)

## 9.2 클래스의 기본

일반객체와 인스턴스의 차이점 이해하기

- 일반객체 : 일반객체
- 클래스를 통해서 만들어진 객체 : 인스턴스

객체를 손쉽게 만들 수 있는 템플릿

1. 생성자 함수 (오래된 고전적인 방법, 사용 X)
2. 클래스 (최신 문법)

```javascript
// [ 클래스 class ]
class Fruit {
	// 생성자 함수 : new 키워드로 객체를 생성할 때 호출되는 함수
	// -> 필요한 인자 전달
	constructor(name, emoji) {
		this.name = name;
		this.emoji = emoji;
	}

	// 멤버 함수 : function 키워드 사용시 에러 발생
	display = () => {
		console.log(`${this.name} : ${this.emoji}`);
	};
}

// apple과 orange는 Fruit 클래스의 인스턴스
const apple = new Fruit('apple', '사과');
const orange = new Fruit('orange', '오렌지');

console.log(apple);
console.log(orange);
```

## 9.3 재사용성을 높이는 방법

- 인스턴스 레벨의 프로퍼티와 메서드
- 클래스 레벨의 프로퍼티와 메서드 (static)

```javascript
// static - 정적 프로퍼티, 메서드
// -> 모든 객체마다 동일하게 참조해야 하는 프로퍼티와 메서드의 사용
// -> 클래스에 한번만 정의하고 재사용된다.

class Fruit {
	static MAX_FRUITS = 4; // 클래스 레벨의 프로퍼티

	constructor(name, emoji) {
		this.name = name;
		this.emoji = emoji;
	}

	// [ 클래스 레벨의 메서드 ]
	// static 키워드 사용
	// 클래스별로 공통적으로 사용 가능 (각 인스턴스마다의 변경되는 데이터 X)
	// 클래스를 통해서 호출 가능
	// 클래스 레벨의 메서드에서는 this를 참조할 수 없음 (템플릿 상태이기 때문)
	// 생성된 인스턴스에 포함되지 않는다.
	static makeRandomFruit() {
		return new Fruit('banana', '바나나');
	}

	// [ 인스턴스 레벨의 메서드 ]
	// 만들어진 인스턴스의 데이터에 접근
	display = () => {
		console.log(`${this.name} : ${this.emoji}`);
	};
}

// 클래스 이름으로 접근 가능
const banana = Fruit.makeRandomFruit();
console.log(banana);
console.log(Fruit.MAX_FRUITS);

// 만들어진 인스턴스를 통해서 접근 가능
const apple = new Fruit('apple', '사과');
console.log(apple);

// 활용 예시 ...(빌트인 Object)
Math.pow();
Number.isFinite(1);
```

## 9.4 필드란

```javascript
// 접근제어자 - 캡슐화
// private(#), public(기본), protected
// private(#) : 내부에서는 사용 가능, 외부에서는 사용 불가능

class Fruit {
	// [ Field ]
	// -> constructor에서 주어지는 데이터일 경우 생략 가능
	#name;
	#emoji;
	#type = '과일'; // 인스턴스를 만들 때 초기화

	constructor(name, emoji) {
		this.#name = name;
		this.#emoji = emoji;
	}

	#display = () => {
		console.log(`${this.#name} : ${this.#emoji}`);
	};
}

const apple = new Fruit('apple', '사과');

// apple.#name = '오렌지'; // #field는 외부에서 접근이 불가능
console.log(apple);
```

## 9.5 세터와 게터

```javascript
// 접근자 프로퍼티 (Accessor Property) - getter, setter

class Student {
	constructor(firstName, lastName) {
		// 생성자가 한번 호출된 이후에는 업데이트 되지 않는다.
		this.firstName = firstName;
		this.lastName = lastName;
	}

	// 행동보다는 객체의 상태를 나타내고 싶을 때 (프로퍼티의 일부로 간주)
	get fullName() {
		return `${this.lastName} ${this.firstName}`;
	}

	set fullName(value) {
		console.log('set : ', value);
	}
}

const student = new Student('수지', '김');
console.log(student.firstName);

console.log(student.fullName); // getter
student.fullName = '김철수'; // setter (할당)
```

## 9.6 상속

```javascript
class Animal {
	constructor(color) {
		this.color = color;
	}
	eat() {
		console.log('먹자!');
	}
	sleep() {
		console.log('잔다!');
	}
}

class Tiger extends Animal {}
const tiger = new Tiger('노랑이');
console.log(tiger);
tiger.sleep();
tiger.eat();

class Dog extends Animal {
	// 자식 클래스에서 constructor를 정의할 때 부모의 데이터도 받아와야 한다.
	constructor(color, ownerName) {
		super(color); // super : 상속하고 있는 부모 클래스의 생성자
		this.ownerName = ownerName; // 자식에서 필요한 데이터 추가 정의
	}

	// 자식에서 필요한 함수 추가
	play() {
		console.log('놀자!');
	}

	// [ 오버라이딩 (overriding) ]
	eat() {
		super.eat(); // 부모 클래스의 함수 호출
		console.log('강아지가 먹는다!'); // 자식에서 필요한 기능 추가 정의
	}
}
const dog = new Dog('분홍이', '엘리');
console.log(dog);
dog.sleep();
dog.eat();
dog.play();
```

## Quiz 01

카운터 만들기 : 0 이상의 값으로 초기화 한 뒤 하나씩 숫자를 증가할 수 있는 카운터

```javascript
// 내가 작성한 엉망진창 코드...
class Counter {
	constructor(number) {
		this.number = number;
	}
	addNumber = () => {
		this.number++;
	};
}

const counter = new Counter(0);
counter.addNumber(); // 1
counter.addNumber(); // 2
counter.addNumber(); // 3
console.log(counter.number);
console.log(counter);
```

## Quiz 02

정직원과 파트타임 직원의 클래스 만들기  
직원들의 한달 월급 계산하기 (정직원 - 시간당 10,000원 / 파트타임 직원 - 시간당 8,000원)

```javascript
// 내가 작성한 엉망진창 코드...
// 질문) 상속할 때 프로퍼티와 메서드를 private(#)으로 설정해도 되나요?

class Employee {
	constructor(name, department, time) {
		this.name = name;
		this.department = department;
		this.time = time;
	}

	// 질문)
	// 이렇게 사용해도 되나요? 에러가 발생할 줄 알았는데...
	// pay를 자식 클래스에서 선언했는데...
	monthPay = () => {
		return this.pay * this.time * 30;
	};
}

class FullTime extends Employee {
	pay = 10000;
}
class PartTime extends Employee {
	pay = 8000;
}

const fullTimeEmployee = new FullTime('풀타임', '개발팀', 8);
console.log('풀타임 급여 : ', fullTimeEmployee.monthPay());
console.log(fullTimeEmployee);

const partTimeEmployee = new PartTime('파트타임', '개발팀', 5);
console.log('파트타임 급여 : ', partTimeEmployee.monthPay());
console.log(partTimeEmployee);
```

## 회고

- 일반 객체와 인스턴스의 차이점에 대해서 명확하게 이해할 수 있었습니다.
- 자바스크립트의 클래스에 대해서 잘 몰랐는데 역시 어렵다고 생각했고 반복학습이 필요할 것 같습니다.
- 퀴즈를 풀면서 조금 더 사용자 입장에서 생각하면서 코딩하지 못한 점을 반성했습니다. (반성)
- 데이터를 받을 때 디테일하게 조건을 설정해야 문제를 사전에 방지할 수 있다는 것을 항상 잊지 말자! (반성)
- 의미 있는 변수명을 잘 작성하도록 노력하자! (반성)
