# Object

## 1. object

### 1. object.js (객체 만들고 사용하는법)

1. 객체 표기법

```js
let apple = {
  name: 'apple', // 대부분 이렇게 씀!
  'hello-bye': '👋',
  0: 1,
  ['hello-bye1']: '👋',
};
```

2. 속성, 데이터에 접근

```js
console.log(apple.name); // 마침표 표기법 dot notatioen
console.log(apple['hello-bye']); // 대괄호 표기법  bracket notation
console.log(apple['name']);
```

3. 속성 추가

```js
apple.emoji = '🍎';
```

4. 속성 삭제

```js
delete apple.emoji;
```

### 2. compute.js (대괄호 표기법 언제사용하는가?)

- 동적으로 속성에 접근해야할 때 사용함

```js
// 동적으로 속성에 접근하고 싶을때 대괄호 표기법 사용!
const obj = {
  name: '현정',
  age: 10,
};

// 1. value 만 가지고 동적으로 가지고 오는 함수!
function getValue(obj, key) {
  // return obj.key;  // ** obj 안에 key 라는 이름의 key 가 없어서 이건 안돼!
  return obj[key];
}
console.log(getValue(obj, 'name')); // 현정

// 2. 속성 추가 함수
function addKey(obj, key, value) {
  return (obj[key] = value);
}
addKey(obj, 'job', 'actor');
console.log(obj); // [{name:'현정'}, {age: 10}, {job: 'actor'}]

// 3. 속성 제거 함수
function deleteKey(obj, key) {
  return delete obj[key];
}
deleteKey(obj, 'job');
console.log(obj); // { name: '현정', age: 10 }
```

### 3. shorts.js (객체 축약법)

```js
function makeObj(name, age) {
  return {
    name, // = name: name
    age, // = age: age
  };
}
```

### 5. create.js (생성자함수)

1. 이런 같은 형태의 함수를 간단히 -> 생성자함수

```js
const apple = {
  name: 'apple',
  display: function () {
    console.log(`${this.name}: 🍎`);
  },
};

const orange = {
  name: 'orange',
  display: function () {
    console.log(`${this.name}: 🍊`);
  },
};
```

2. 적용 예시

```js
// 1. 공통부분 생성자 함수로 정의
function Fruit(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  this.display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
  // return this; // 생략가능
}

// 2. new 키워드 사용하여 생성
const apple = new Fruit('apple', '🍎');
const orange = new Fruit('orange', '🍊');

console.log(apple.name);
console.log(apple.emoji);
apple.display();
```

## 회고

- 함수의 타입은 함수 타입이라고 생각한 나.. **함수도 객체**구나..
- **밀접하게 관련있는 상태와 행동은 객체로 묶자** <br/>
  -> 작업할때마다 데이터 오조오억개씩 생성하는데,, 관련있는 데이터를 묶는 것을 열심히 해야겠다.
- **동적으로 객체에 접근하고 싶으면 대괄호 표기법**<br/>
  -> 대괄호 표기법 자주 사용해보지 않았는데, 이제 플젝에 적용할수 있겠다!
- 생성자 함수 사용하면 반복작업을 더욱 줄일수있다. 잘 사용해 봐야겠음<br/>
  -> 공통 부분 묶는 연습 열심히!
  - 빈 객체는 true 다. falshy 아님~!~! falshy값으로 if 문 거르려할때 주의하삼
