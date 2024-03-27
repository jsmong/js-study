# 객체(Object)

- 객체는 서로 연관된 속성과 행동을 묶어주는 복합 데이터이다.
- 데이터(프로퍼티)와 함수(메소드)를 포함한다.
- 객체는 순수 데이터 객체 뿐만 아니라 상태와 행동을 가진 객체로 구분할 수 있다.

## 1. 객체(Object)란

js에서 객체는 데이터와 해당 데이터에 적용되는 동작을 묶어서 표현하는 복합 데이터 타입

```jsx
let apple = {
  name: 'apple',
  color: 'red',
  display: '🍎',
};
```

## 2. 객체 리터럴(Object Literal)

- 객체 리터럴은 중괄호를 사용하여 객체를 생성하는 방법
- 객체의 속성에 접근하기 위해 마침표 표기법(dot notation)과 대괄호 표기법(bracket notation)을 사용할 수 있다.
- 객체에 속성을 추가하거나 삭제할 수 있다.

```jsx
let apple = {
  name: 'apple',
  'hello-bye': '👍',
  0: 1,
};

console.log(apple.name); // 마침표 표기법
console.log(apple['hello-bye']); // 대괄호 표기법
```

## 3. 객체 동적으로 접근

- 객체의 속성에 동적으로 접근하고자 할 때는 대괄호 표기법을 사용한다.
- 함수를 활용하여 객체의 속성을 동적으로 조작할 수 있다.

```jsx
const obj = {
  name: '엘리',
  age: 20,
};

function addKey(obj, key, value) {
  obj[key] = value;
}

addKey(obj, 'job', 'engineer');
console.log(obj);
// { name: '엘리', age: 20, job: 'engineer' }
```

## 4. 객체 축약 버전

- ES6부터는 객체를 만들 때 변수명과 동일한 속성을 간편하게 할당할 수 있다.

```jsx
const x = 0;
const y = 0;
const coordinate = { x, y }; // { x: 0, y: 0 }
```

## 5. 객체 안의 함수

- 객체 내에 함수를 선언하여 해당 객체의 속성으로 사용할 수 있다.
- 함수 내에서 객체의 속성에 접근할 때는 this 키워드를 사용한다.

```jsx
const apple = {
  name: 'apple',
  display: function () {
    console.log(`${this.name}: 🍎`);
  },
};

apple.display(); // apple: 🍎
```

## 6. 생성자 함수

- 생성자 함수를 사용하여 객체를 생성할 수 있다.
- 생성자 함수를 통해 여러 객체를 쉽게 생성할 수 있다.

```jsx
function Fruit(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  this.display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

const apple = new Fruit('apple', '🍎');
const orange = new Fruit('orange', '🍊');

console.log(apple);
// Fruit { name: 'apple', emoji: '🍎', display: [Function] }
console.log(orange);
// Fruit { name: 'orange', emoji: '🍊', display: [Function] }
```

## 회고

### 1. 복합 데이터 타입의 핵심:

- 객체는 데이터와 그 데이터에 대한 동작을 하나로 묶어주어 프로그램의 가독성과 유지보수성을 높이는데 중요한 역할을 한다!

### 2.객체 리터럴의 활용:

- 객체 리터럴은 중괄호를 사용하여 객체를 생성하는 편리한 방법이며, 객체의 속성에 접근할 때는 마침표 표기법 또는 대괄호 표기법을 사용!

### 3.동적 접근과 함수 내부에서의 활용:

- 객체의 속성에 동적으로 접근하고 객체 내부에 함수를 정의하여 동작을 정의할 수 있고 함수 내에서 'this' 키워드를 사용하여 객체 내부의 속성에 접근하는 것이 중요!

### 4.객체 축약 버전과 생성자 함수:

- ES6부터는 변수명과 동일한 속성을 자동으로 할당하는 객체 축약 버전을 사용하여 객체를 생성할 수 있고, 생성자 함수를 활용하여 간편하게 여러 객체를 생성!
