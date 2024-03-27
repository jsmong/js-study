# 클래스 (Class)

- 생성자 함수를 이제 사용하지 않음
- 객체를 생성할 수 있는 템플릿(청사진, 틀)
- 객체지향 프로그래밍
- 프로토타입보다 간편함

<br>

## 1. 클래스 기본 (Basic)

- 클래스는 객체를 생성하는 템플릿으로, 객체의 속성과 메서드를 정의
- <code>생성자(Constructor)</code>는 객체를 생성할 때 호출되는 함수로, 클래스 내부에서 사용
- 객체의 프로퍼티에 접근시 <code>this</code> 키워드 사용

```jsx
class Fruit {
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  display() {
    console.log(`${this.name}: ${this.emoji}`);
  }
}

const apple = new Fruit('apple', '🍎');
const orange = new Fruit('orange', '🍊');
```

<br>

## 2. 재사용 (Reusability)

- 클래스 정의시 다른 클래스를 상속하면, 상속받은 클래스의 속성과 메서드를 그대로 사용
- <code>정적(static)</code> 프로퍼티와 메서드를 사용하여 클래스 레벨에서 공유되는 속성과 동작을 정의

```jsx
class Fruit {
  static MAX_FRUITS = 4;

  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  static makeRandomFruit() {
    return new Fruit('banana', '🍌');
  }

  display() {
    console.log(`${this.name}: ${this.emoji}`);
  }
}

const banana = Fruit.makeRandomFruit();
console.log(banana);
console.log(Fruit.MAX_FRUITS);
```

<br>

## 3. 필드 (Field)

- 클래스 내부에서 프로퍼티 정의시, 접근 제어자를 사용하여 프로퍼티의 가시성을 조절
- 접근 제어자로는 <code>private, public, protected</code>
- private : <code>#</code>기호를 사용하여 프로퍼티를 선언시 복호화
- public : 기본 공개

```jsx
class Fruit {
  #name;
  #emoji;

  constructor(name, emoji) {
    this.#name = name;
    this.#emoji = emoji;
  }

  display() {
    console.log(`${this.#name}: ${this.#emoji}`);
  }
}

const apple = new Fruit('apple', '🍎');
console.log(apple);
```

## 4. 세터와 게터 (Setter & Getter)

- <code>세터(Setter)</code> : 객체의 속성을 설정하는 메서드, set
- <code>게터는(Getter)</code> : 객체의 속성을 변환하는 메서드, get

```jsx
// 접근자 프로퍼티 (Accessor Property)
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    // this.fullName = `${this.lastName} ${this.firstName}`;
    // ✅ 업데이트가 되지않음
  }
  get fullName() {
    return `${this.lastName} ${this.firstName}`;
  }
  // 함수 호출 대신 -> get 사용시 속성&프로퍼티 접근

  set fullName(value) {
    console.log('set', value);
  }
}

const student = new Student('다윗', '양');
student.firstName = '데빗';
console.log(student.firstName);
console.log(student.fullName);
student.fullName = '킴데이빗';
```

<br>

## 5. 상속 (Inheritance)

- <code>상속(Inheritance)</code> 한 클래스가 다른 클래스의 속성과 메서드를 상속받아 사용
- 자식 클래스는 부모 클래스의 모든 속성과 메서드를 그대로 사용, 필요에 따라 메서드를 추가하거나 수정 가능

```jsx
class Animal {
  constructor(name) {
    this.name = name;
  }
  eat() {
    console.log('먹어!');
  }
}

class Tiger extends Animal {}
const tiger = new Tiger('호랭이');

class Dog extends Animal {
  constructor(name, ownerName) {
    super(name);
    this.ownerName = ownerName;
  }

  play() {
    console.log('해피 일로와~!');
  }

  eat() {
    super.eat();
    console.log('해피야 얼른먹자~!');
  }
}
const dog = new Dog('해피', '데빗');
```

<br>

## 🔖 Quiz

### 키트웍스

- 월급
  - 월(30일) _ 하루일시간(8시간) _ 경력에 따른 시급.. (바램)💶
- Team
  - Uiux : jj, war, david
  - Front : olivia, hazel, mrbin
- 경력
  - 경력자 : jj, war
  - 중고신입 : olivia
  - 신입 : hazel, mrbin, david

```jsx
// 키트웍스 자스몽
class Kitworks {
  constructor(name, team, payRate) {
    this.name = name;
    this.team = team;
    this.payRate = payRate;
  }
  monthlyPay() {
    this.hoursPerMonth = 30;
    this.hoursPerDay = 8;
    return (
      this.hoursPerMonth * this.hoursPerDay * this.payRate
    );
  }
}

// 경력자 (계산하니 무려 💶480만)
class ExperiencedEmployee extends Kitworks {
  static PAY_RATE = 20000;
  constructor(name, team) {
    super(name, team, ExperiencedEmployee.PAY_RATE);
  }
}

// 중고 신입 (계산하니 무려 💶405만)
class JuniorNewEmployee extends Kitworks {
  static PAY_RATE = 17000;
  constructor(name, team) {
    super(name, team, JuniorNewEmployee.PAY_RATE);
  }
}

// 신입 (계산하니 무려 💶360만)
class NewEmployee extends Kitworks {
  static PAY_RATE = 15000;
  constructor(name, team) {
    super(name, team, NewEmployee.PAY_RATE);
  }
}

const jj = new ExperiencedEmployee('jj', 'Uiux');
const war = new ExperiencedEmployee('와르', 'Uiux');
const olivia = new JuniorNewEmployee('올리비아', 'Front');
const hazel = new NewEmployee('헤이즐', 'Front');
const mrbin = new NewEmployee('미스터빈', 'Front');
const david = new NewEmployee('데빗', 'Uiux');

// 각 팀별로 구성원 나누기
const uiuxTeam = [jj, war, david];
const frontTeam = [olivia, hazel, mrbin];

// 팀별로 구성원 출력
console.log('UIUX 팀 구성원:');
uiuxTeam.forEach((member) =>
  console.log(`${member.name} (${member.constructor.name})`)
);

console.log('\nFront 팀 구성원:');
frontTeam.forEach((member) =>
  console.log(`${member.name} (${member.constructor.name})`)
);
```
