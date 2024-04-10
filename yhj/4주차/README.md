## 배열 (Array)

MDN > Indexed Collections

- 특정한 데이터만 넣을 수 있는 배열 자료구조를 지원한다.

```jsx
/* 배열 생성 방법 */
// 1. 생성자 함수
let arr = new Array(3); // [<3 empty items>]
arr = new Array(1, 2, 3); // [1, 2, 3]

// 2. static 함수
arr = Array.of(1, 2); // [1, 2]

// 3. 배열 리터럴
const anotherArr = [1, 2, 3, 4]; // [1, 2, 3, 4]
arr = Array.from(anotherArr); // 배열 복사
arr = Array.from("text"); // ['t', 'e', 'x', 't'] (이터러블은 모두 가능)

// 일반적으로 배열은 동일한 메모리 크기, 연속적으로 이어져 있음
// but, JS에서의 배열은 연속적으로 이어져 있지 않고, Object와 유사함
// JS의 배열은 일반적인 배열의 동작을 흉내낸 특수한 객체이다.
// 이를 보완하기 위해 타입이 정해져있는 타입 배열이 있음 (Typed Collections)

array = Array.from({
  0: "메",
  1: "롱",
  length: 2,
});
// ['메', '롱'] (Object에 index key, val, length를 지정하면 배열로 만들 수 있음)
```

### 얕은 복사와 깊은 복사

- 객체는 메모리 주소 전달
- js 복사할 때는 항상 얕은 복사(shallow copy)가 이루어짐
- 인자로 전달된 object가 있을 때 함수 내부에서 object를 변경하는 것은 위험하다.

## 고차함수(HOF)

- 정의 : 인자로 함수를 받거나(콜백함수), 함수를 반환하는 함수
- 장점 : 데이터 변경 X, 변수 사용 X, 조건문/반복문 사용 X → 에러 낮추고 가독성 높아짐

```jsx
["hi", "hello"].flatMap((text) => text); // ['h', 'i', 'h', 'e', 'l', 'l', 'o']
```

## Quiz

1. 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수 만들기 (단, 주어진 배열 수정 X)

```jsx
// input : ['🍌', '🍓', '🍇', '🍓']
// output: ['🍌', '🥝', '🍇', '🥝']

function changeFruit(arr) {
  return arr.map((item) => (item === "🍓" ? "🥝" : item));
}

changeFruit(["🍌", "🍓", "🍇", "🍓"]);

// 재사용성 높인 ver
function changeFruit(arr, from, to) {
  return arr.map((item) => (item === from ? to : item));
}

changeFruit(["🍌", "🍓", "🍇", "🍓"], "🍓", "🥝");
```

1. 배열과 특정한 요소를 전달받아, 배열 안에 그 요소가 몇 개나 있는지 카운트 하는 함수 만들기

```jsx
// input : ['🍌', '🥝', '🍇', '🥝'], '🥝'
// output: 2

function countFruits(arr, fruit) {
  return arr.filter((item) => item === fruit).length;
}

countFruits();
```

1. 배열 1, 배열2 두 개의 배열을 전달받아, 배열1 아이템 중 배열2에 존재하는 아이템만 담고 있는 배열 반환하기

```jsx
// input : ['🍌', '🥝', '🍇'], ['🍌', '🍓', '🍇', '🍓']
// output: ['🍌', '🍇']

function checkSameFruit(arr1, arr2) {
  return arr1.filter((item) => arr2.includes(item));
}
```

1. 5보다 큰 숫자들의 평균을 구하기

```jsx
const nums = [3, 16, 5, 25, 4, 34, 21];
const filterNums = nums.filter((item) => item > 5);

filterNums.reduce((acc, cur) => acc + cur) / filterNums.length;

// 개선 ver
const result = nums
  .filter((item) => item > 5)
  .reduce((avg, num, _, array) => avg + num / array.length, 0);
```

## 회고

- JS에서 배열은 Object와 유사하다는 것을 알게 되었다.
- flatMap 메서드를 처음 알게 되었다.
- map은 기존 배열을 변경하지 않고 새로운 배열을 반환하는 것을 잊지말자.
- 고차함수 각각의 용도에 맞게 사용하도록 주의하자.
