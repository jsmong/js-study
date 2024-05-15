# MAP, SET, 주석

## 정리

### 1. SET

- array와 비슷
- 중복/index 없음
- array를 set로 변환하여 중복을 없앨때 유용하게 사용할 수 있다.
- 오브젝트도 set에 담을수 있는데, shallow copy 조심하자

```js
// 생성법
const set = new Set([1, 2, 3]);

// 갯수
set.size;

// 존재하는지 확인
set.has(1); // true

// 순회 가능
set.forEach((item) => {
  console.log(item);
});
for (const value of set.values()) {
  console.log(value);
}

// 추가
set.add(6);
set.add(6);
console.log(set); // { 1, 2, 3, 6 } 중복안됨

// 삭제
set.delete(6);

// 전부 삭제
set.clear();
```

- 오브젝트 set

```js
// 오브젝트 셋트
const obj1 = { name: '🍎', price: 8 };
const obj2 = { name: '🍌', price: 5 };
const objs = new Set([obj1, obj2]); // { { name: '🍎', price: 8 }, { name: '🍌', price: 5 } }

// obj는 shallow copy
obj1.price = 10;
objs.add(obj1);
console.log(objs); // { { name: '🍎', price: 10 }, { name: '🍌', price: 5 }

// obj는 메모리 주소가 저장되는 거니까, 같은 obj값을 넣어도 추가된다
const obj3 = { name: '🍌', price: 5 };
objs.add(obj3);
//   { name: '🍎', price: 10 },
//   { name: '🍌', price: 5 },
//   { name: '🍌', price: 5 }
```

#### 활용 1. 중복되는 배열 제거

```js
const fruits = ['🥝', '🍌', '🍎', '🍇', '🍑', '🍇', '🍎', '🍇', '🍎'];

function removeDuplication(array) {
  return [...new Set(array)];
}
console.log(removeDuplication(fruits));
```

#### 활용 2. 중복만 추출하기

```js
const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([1, 2, 3]);

function findIntersetion(set1, set2) {
  return new Set([...set1].filter((item) => set2.has(item)));
}
findIntersetion(set1, set2);
```

### 2. map

- key, value로 이루어진 자료구조 (object와 비슷)
- 순서X, 유일한 키, 키만 다르다면 중복 가능
- map 은 이터러블(순회 가능)
  cf) object는 순회 안되지~

```js
// map 생성법
const map = new Map([
  ['key1', '🍎'],
  ['key2', '🍌'],
]);

// 사이즈 확인
console.log(map.size);

// 존재하는지 확인
console.log(map.has('key2'));

// 순회
map.forEach((value, key) => {
  console.log(value, key);
});

for (value of map) {
  console.log(value);
}

// 찾기
console.log(map.get('key1'));
console.log(map.get('key2'));

// 추가
map.set('key3', '🥝');

// 삭제
map.delete('key3');

// 전부 삭제
map.clear();
```

```js
// map vs object
const key = { name: 'milk', price: 10 };
const milk = { name: 'milk', price: 10, description: '맛있는 우유' };

// object
const obj = {
  [key]: milk,
};

// map
const map2 = new Map([[key, milk]]);

// 1. 동적으로 value 받아오는 방식이 다름
// obj
console.log(obj[key]); // { name: 'milk', price: 10, description: '맛있는 우유' }
// map 나쁜예
console.log(map2[key]); // undefined
// map 좋은예
console.log(map2.get(key)); // { name: 'milk', price: 10, description: '맛있는 우유' }
```

### 3. Symbol

- 심볼(symbol)은 ES6에서 도입된 7번째 데이터 타입으로, 변경 불가능한 원시 타입의 값이다. 심볼 값은 다른 값과 중복되지 않는 유일무이한 값이다. 따라서 주로 이름의 충돌 위험이 없는 _ 유일한 프로퍼티 키 _ 를 만들기 위해 사용된다.

```js
const map = new Map();
// const key1 = 'key';
// const key2 = 'key';

const key1 = Symbol('key'); // Hello
const key2 = Symbol('key'); // true

map.set(key1, 'Hello');
console.log(map.get(key2)); // undefined
console.log(key1 === key2); // false
```

- 전역 심벌 레지스트리 (Global Symbol Registry)
- 동일한 이름으로 하나의 키를 사용하고 싶다면, Symbol.for

```js
const k1 = Symbol.for('key');
const k2 = Symbol.for('key');
console.log(k1 === k2); // true
```

#### 언제 사용하면 되는지...

- 티안나게 객체에 추가 가능 (symbol로 추가된 key는 for in 으로 읽히지 않음)

```js
// ===== 다른 개발자가 만들어 놓은 객체
const user = {
  name: '현정',
  age: 10,
};

// +++++ 내가 작업
// Bad!! 이런식으로 추가하면 위에 만들어 놓은 작업에 방해됨.
// user.showName = () => {
//   console.log(`이름만보여주고싶어요 ${user.name}`);
// };

// symbol로 정의하면 for in에 영향 안끼침
const showName = Symbol('show name');
user[showName] = () => {
  console.log(`이름만보여주고싶어요 ${user.name}`);
};

// ===== 다른 개발자가 만들어놓은 함수
for (let key in user) {
  console.log(`제 ${key}는 ${user[key]}입니다`);
}
```

### 4. 주석

- 주석은 코드 자체를 설명하는 것이 아니라,왜(WHY)와 어떻게(HOW)를 설명하는 것이 좋음 (단, 정말 필요한 경우에만)
- 외부에서 많이 쓰이는 함수 API인 경우, JS Doc를 사용하면 좋음

```js
/**
 * 주어진 두 인자를 더한 값을 반환함
 * @param {*} a 숫자 1
 * @param {*} b 숫자 2
 * @returns a와 b를 더한 값
 */
function add(a, b) {
  return a + b;
}
```

### 5. 에러핸들링

- try catch finally를 사용하여 에러핸들링 가능

```js
// try catch finally
function readFile(path) {
  // throw new Error('파일 경로를 찾을수 없음'); // 에러를 강제적으로 발생
  return '파일내용';
}

function processFile(path) {
  let content;
  try {
    content = readFile(path);
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
    content = '기본내용';
  } finally {
    console.log('성공하던 실패하던 마지막으로 리소스를 정리할 수 있음');
  }
  const result = 'hi' + content;
  return result;
}

const result = processFile('경로');
console.log(result);
```

### 6. modlue

- js 파일을 각각 다른 파일로 생성하더라도, 따로 스코프를 제한하지 않는다면 다른 파일의 변수나 함수를 호출 및 참조할 수 있다. 이런 의도치 않은 현상을 간단하게 제한할 수 있는 방법이 module 방식이다.

1. 페이지 내에서 스크립트 연결할 때 다음과 같은 방식으로 연결

```html
<!-- index.html -->
<script type="module" src="./counter.js"></script>
<script type="module" src="./main.js"></script>
```

2. 타 js 에서 사용할 함수 및 변수는 export 처리

```js
let count = 0;
// export default : 모듈에서 딱 1개만 export
// export : 여러개 export 할때
export function increase() {
  count++;
  console.log(count);
}
export function getCount() {
  return count;
}
```

3. 타 js 에서 사용하고 싶은 함수 및 변수는 import

```js
// 1. export defuault로 내보냈을때
// import increase from './counter.js';

// 2. 이름 바꾸고싶으면 as
// import { increase1 as increase } from './counter.js';

// 3. export로 내보냈을때
// import { increase, getCount } from './counter.js';

// 4. 한꺼번에 불러오고 싶을때
import * as counter from './counter.js';

// 1,2,3의 경우 이런식으로 호출
// increase();
// increase();
// increase();
// const count = getCount();
// console.log('count : ', count);

// 4의 경우 이런식으로 호출
counter.increase();
counter.increase();
const count = counter.getCount();
console.log('count : ', count);
```

## 회고

- set에 대한 개념이 덜 잡힌채로 중복 제거하는 데에만 사용해봤다. 그래서 set으로 중복을 제거하고 얼른 array로 바꾼뒤, 나머지 작업들은 array에서 수행했었다. set개념과 활용법을 아니 갯수확인, 존재하는지 확인.. 이런 작업들은 set 상태에서 해도 괜찮을 것이란 생각이 들기도..
- 코드 설명하는 주석을 자주 사용했는데, 주석을 줄이고 코드 가독성을 높이는 연습을 많이 해봐야겠다 반성
- 자바스크립트의 전역적인 사용을 방지하기위해, js 파일 안에 즉시 실행 함수로 감싸서 작업했었는데, module방식으로 사용하면 간단하게 문제를 해결할수 있구나
- module / import /export 같은 키워드, 리액트나 vue 환경에서 외우듯이 사용한 방식인데 작동원리를 파악하고 보니 코드작성이나 이해가 더 쉬워졌다
