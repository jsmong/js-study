### 1. objects.js

```javascript
let apple = {
  // name-1: 'pear',  // key에는 '-' 사용 불가, 문자열일 경우는 가능
  name: 'apple',
  hello: '⭐',
  0: 1,
  ['hello-bye1']: '⭕', // 특수한 경우가 아니라면 그냥 helloBye같은 식으로 만드는게 제일 좋음
};

// 속성, 데이터에 접근하기 위해서는
console.log(apple.name); // 마침표 표기법 dot notation
console.log(apple['hello-bye1']); // 대괄호 표기법 brakect notation
apple['name'];
```

<br />

### 2. compute.js

- 코딩하는 시점에 정적으로 접근이 확정됨
  동적으로 속성에 접근하고 싶을 땐 대괄호 표기법 사용

<br />

### 3. create.js

```javascript
// 동일한 내용이 반복된다면 더 쉽게 만들어보자
// 생성자 함수 (생성자함수는 대문자로 시작)

function Fruit(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  this.display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
  // return this;    // 생략 가능
}

const apple = new Fruit('apple', '🍎');
const greenApple = new Fruit('greenApple', '🍏');

console.log(apple);
console.log(greenApple);
console.log(apple.name);
console.log(apple.display);
```
