# Array

## Array 정리

### 1. 배열을 생성하는 다양한 방법

```js
// 1. 사이즈만 정해서 배열 만들기
let array = new Array(3);
console.log(array); // [ <3 empty items> ]

// 2. 엘리먼트 넣어서 만들기
array = new Array(1, 2, 3);
console.log(array); // [ 1, 2, 3 ]

// 3. Array.of
array = Array.of(1, 2, 3, 4, 5);
console.log(array); // [ 1, 2, 3, 4, 5 ]

// 4. 배열 리터럴
const anotherArray = [1, 2, 3, 4];

// 5. Array.from : 다른 어레이로부터 이어지는 배열
array = Array.from(anotherArray);
console.log(array); // [1, 2, 3, 4]
```

#### 1-1 array.of 왜 생겨났는지?

```js
// 기존 Array() : 괄호 안에 number vs string에 따라 다르게 정의
let arr1 = new Array(2);
let arr2 = new Array('2');
console.log(arr1); // ??
console.log(arr2); // ??

let arr3 = Array.of(2);
let arr4 = Array.of('2');
console.log(arr3); // ??
console.log(arr4); // ??
```

#### 1-2. 자스의배열은 일반적인 배열의 동작을 흉내낸 특수한 객체다

- 일반적으로 배열은 동일한 메모리 크기를 가지며, 연속적으로 이어져 있어야함.
- but 자스에서는 배열이 연속적으로 이어져있고
- 오브젝트와 유사함!
- 자바스크립트의 배열은 일반적인 배열의 동작을 흉내낸 특수한 객체다
- 이걸 보완하기 위해 타입이 정해져있는 타입 배열이 있음 (Typed Colletions)

```js
array = Array.from({
  0: '안',
  1: '녕',
  length: 2,
});
console.log(array); // [ '안', '녕' ]
```

### 2. 배열의 함수들

- 배열 자체를 변경하는지, 새로운 배열을 반환하는지 확인 필수 ^^

```js
const fruits = ['🍎', '🍊', '🍌', '🍇'];

// 특정한 오브젝트가 배열인지 체크 - isArray
console.log(Array.isArray(fruits));
console.log(Array.isArray({}));

// 특정한 아이템의 위치를 찾을때 - indexOf
console.log(fruits.indexOf('🍎'));

// 배열안에 특정 아이템이 있는지 체크 - includes
console.log(fruits.includes('🍇'));

// 추가 - 제일 뒤 - push
fruits.push('🍉'); // 배열 자체를 수정(업데이트)
console.log(fruits);

// 추가 - 제일 앞 - unshift
fruits.unshift('🍑'); // 배열 자체를 수정(업데이트)
console.log(fruits);

// 제거 - 제일 뒤 - pop
let lastItem = fruits.pop();
console.log(fruits); // 배열 자체를 수정(업데이트)
console.log(lastItem); // 삭제된 요소를 return

// 제거 - 제일 앞 - shift
lastItem = fruits.shift();
console.log(fruits); // 배열 자체를 수정(업데이트)
console.log(lastItem); // 삭제된 요소를 return

// 중간에 추가 또는 삭제 - splice
const deleted = fruits.splice(1, 1); // 1번 인덱스부터 1개 삭제
console.log(fruits);
console.log(deleted);

// 추가하기 - splice
const added = fruits.splice(1, 0, '🍍', '🍏'); // 1번 인덱스에 추가
console.log(fruits);
console.log(added);

// 잘라진 새로운 배열을 만듦 - slice
// slice(시작index, 끝index+1)
let newArr = fruits.slice(2, 2); //0,1만 슬라이스
console.log(newArr); // 잘라진 0,1
console.log(fruits); // 기존 배열은 그대로 유지
newArr = fruits.slice(1); // 1부터 끝까지 slice
console.log(newArr);
newArr = fruits.slice(-1); // 1부터 끝까지 slice
console.log(newArr); // 거꾸로 1부터 끝까지

// 여러개의 배열을 붙여줌 - concat
// arr1.concat(arr2)
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr1);
console.log(arr2);
console.log(arr3); // 기존의 배열 수정 x, 새로운 배열 반환

// 순서를 거꾸로
const arr4 = arr3.reverse();
console.log(arr4);

// 중첩 배열을 하나의 배열로 쫙 펴기
let arr = [[1, 2, 3], [(4, [5, 6])]];
console.log(arr);
console.log(arr.flat()); // 기본 : 1단계 중첩 배열 해제 // [ 1, 2, 3, [ 5, 6 ] ]
console.log(arr.flat(2)); // (2)숫 넣으면 중첩 단계 설정 가능 // [ 1, 2, 3, 5, 6 ]
arr = arr.flat(2);

// 특정한 값으로 배열 채우기
// 배열 자체를 수정
arr.fill(0); // 처음부터 끝까지 채울수도 있고
console.log(arr);

arr.fill('s', 1, 3); // 1부터 3전까지 s로
console.log(arr); // [ 0, 's', 's', 0, 0 ]

arr.fill('s', 1); // 1부터 끝까지 s로
console.log(arr); // [ 0, 's', 's', 's', 's' ]

// 배열을 문자열로 합하기
let text = arr.join(' | '); // 텍스트 사이에 넣고싶은 키워드 삽입 가능
console.log(text); //  0 | s | s | s | s
```

### 3. 얕은 복사

- 얕은 복사 Shallow Copy - 객체는 메모리 주소 전달(값이아니라 메모리 주소!)
- 자바스크립트에서 복사 할때는 항상 얕은 복사가 이루어짐
- Array.from, concat, slice, sprea(...), Object.assign
- 중첩시에도 같음!

```js
const pizza = { name: '🍕', price: 2 };
const ramen = { name: '🍜', price: 3 };
const chicken = { name: '🐔', price: 1 };
const store1 = [pizza, ramen];
const store2 = Array.from(store1);
console.log('store1 :', store1);
console.log('store2 :', store2);

store2.push(chicken); // 치킨 추가는 store2에만 반영
console.log('store1 :', store1);
console.log('store2 :', store2);

pizza.price = 4; // 가격 인상은 store1, 2 모두 반영된다.
// 두 store에서 가리키는 pizza의 메모리 위치는 같으니까!
console.log('store1 :', store1);
console.log('store2 :', store2);
```

### 4. 고차함수

```js
const fruits = ['🍌', '🍑', '🍇', '🍑'];

// 배열을 돌면서 원하는것(콜백함수)을 할때
fruits.forEach((value, index, array) => console.log(value));

// 조건에 맞는(콜백함수) 아이템을 찾을때
// find : 제일 먼저 조건에 맞는 아이템을 반환
const item1 = { name: '🍕', price: 2 };
const item2 = { name: '🍜', price: 3 };
const item3 = { name: '🐔', price: 1 };
const products = [item1, item2, item3, item2];
let result = products.find((value) => value.name === '🍜');
console.log(result);

// findIndex : 제일 먼저 조건에 맞는 아이템의 인덱스를 반환
result = products.findIndex((value) => value.name === '🍜');
console.log(result);

// 배열의 아이템들이 부분적으로 조건(콜백함수)에 맞는지 확인
result = products.some((item) => item.name === '🍜');
console.log(result);

// 배열의 아이템들이 전부다 조건(콜백함수)에 맞는지 확인
result = products.every((item) => item.name === '🍜');
console.log(result);

// 조건에 맞는 모든 아이템을 새로운 배열로
result = products.filter((item) => item.name === '🍜');
console.log(result);

// map 배열의 아이템들을 각각 다른 아이템으로 매핑할 수 있는, 변환해서 새로운 배열 생성
const nums = [1, 2, 3, 4, 5];
result = nums.map((item) => item * 2);
console.log(result);
result = nums.map((item) => {
  if (item % 2 === 0) {
    return item * 2;
  } else {
    return item;
  }
});
console.log(result);

// Faltmap : 중첩된 배열을 모두 펼쳐줌
result = nums.map((item) => [1, 2]);
console.log(result);
result = nums.flatMap((item) => [1, 2]);
console.log(result);

result = ['dream', 'coding'].map((text) => text.split(''));
console.log(result); // [ [ 'd', 'r', 'e', 'a', 'm' ], [ 'c', 'o', 'd', 'i', 'n', 'g' ] ]
result = ['dream', 'coding'].flatMap((text) => text.split(''));
console.log(result); // ['d', 'r', 'e', 'a', 'm', 'c', 'o', 'd','i', 'n', 'g']

// sort 배열의 아이템들을 정렬
// 문자열 형태의 오름차순으로 요소를 정렬하고, 기존의 배열을 변경
const texts = ['hi', 'abc'];
texts.sort();
console.log(texts);

const numbers = [0, 5, 4, 2, 1, 10];
numbers.sort();
console.log(numbers); // [ 0, 1, 10, 2, 4, 5 ] // 문자열로 변형한 후 sort 되기 때문
// < 0 a가 앞으로 정렬, 오름차순
// > 0 b가 앞으로 정렬, 내림차순
numbers.sort((a, b) => a - b);
console.log(numbers);

// reduce : 배열의 요소들을 접어서 값을 하나로
// result = [1, 2, 3, 4, 5].reduce((sum, value) => {
//   sum += value;
//   return sum;
// }, 0); // 0: 초기화 값
result = [1, 2, 3, 4, 5].reduce((sum, value) => (sum += value), 0);
console.log(result);
```

## Quiz

### 1. 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수

- 단, 주어지 배열을 수정하지 않도록
- input : ['🍌','🍑','🍇','🍑']
- output : ['🍌','🥝','🍇','🥝']

#### 풀이 1.

```js
const changeFruit = (arr) => {
  let newArr = [];
  arr.forEach((el) => {
    newArr.push(el === '🍑' ? '🥝' : el);
  });
  return newArr;
};
console.log(countFruit(['🍌', '🥝', '🍇', '🥝'], '🥝'));
```

#### 풀이 2.

```js
const changeFruit = (arr, from, to) => {
  return arr.map((item) => (item === from ? to : item));
};
console.log(changeFruit(['🍌', '🍑', '🍇', '🍑'], '🍑', '🥝'));
```

- forEach를 자주사용해, 이 문제에 map적용할 생각 못했었다. <br>
  고차함수 들어보니까 이렇게 1:1로 모든 요소 비교하고 리턴값 받는 경우에는 map 이 더 적당해 보이더라. 그래서 다시 풀땐 map으로 바꿔서 풀었음 ^^

### 2. 배열과 특정한 요소를 전달받아, 배열 안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기

- 단, 주어지 배열을 수정하지 않도록
- input : ['🍌','🥝','🍇','🥝'],'🥝'
- output : 2

#### 풀이1.

```js
const countFruit = (arr, target) => {
  return arr.filter((el) => {
    return el === target;
  }).length;
};
console.log(countFruit(['🍌', '🥝', '🍇', '🥝'], '🥝'));
```

```js
const countFruit = (arr, target) => {
  return arr.filter((item) => item === target).length;
};
```

- 두번째 풀이에선 filter를 더욱 간단하게 표현해봤음

### 3. 배열1, 배열2 두개의 배열을 전달받아,

- 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
- input: ['🍌','🥝','🍇'], ['🍌','🍑','🍇','🍑']
- output: ['🍌', '🍇']

#### 풀이1.

```js
const returnOverlap = (arr1, arr2) => {
  let newArr = [];
  arr1.forEach((el) => {
    arr2.includes(el) && newArr.push(el);
  });
  // 만약 첫번째 배열 바나나가 두개라면..? 중복 방지하기 위해 중복요소 제거 함수 추가
  newArr = new Set(newArr);
  newArr = [...newArr];
  return newArr;
};
console.log(returnOverlap(['🍌', '🥝', '🍇'], ['🍌', '🍑', '🍇', '🍑']));
```

#### 풀이2.

```js
const returnOverlap = (arr1, arr2) => {
  let result = [];
  arr1.forEach((item) => arr2.includes(item) && result.push(item));
  result = new Set(result);
  result = [...result];
  return result;
};
console.log(returnOverlap(['🍌', '🥝', '🍇'], ['🍌', '🍑', '🍇', '🍑']));
```

- 함수내 변수명만 수정하고, forEach만 간략하게 수정했었음. 앨리답은 저렇게 간단하게 표현할수있다니 넘 놀라워서 적어둠
- 각각 함수에 어떤 값을 리턴하는지 잘 알아야, 이런 문제 간단하게 풀 수 있을 것 같다. filter에서는 ture인 item 을 반환해준다는 .. 그런 사실들..

#### 앨리답.

```js
const returnOverlap = (arr1, arr2) => {
  return arr1.filter((item) => arr2.includes(item));
};
console.log(returnOverlap(['🍌', '🥝', '🍇'], ['🍌', '🍑', '🍇', '🍑']));
```

### 4. 5이상(보다 큰)의 숫자들의 평균

#### 풀이1.

```js
const nums = [3, 16, 5, 25, 4, 34, 21];
const getArrayAvg = (arr, conditionNumber) => {
  const filterd = arr.filter((item) => item > num);
  return filterd.reduce((sum, num) => (sum += num), 0) / filterd.length;
};
console.log(getArrayAvg(nums, 5));
- 가독성을 위해 변수나 줄나눔도 잘 설정해야함을 깨달음..
- 평균을 구할때, '총합 / 갯수' 와 '수/갯수 + 수/갯수 + 수/갯수 ..' 의 결과값이 같다는것. 나에겐 놀라운 사실이었다...
```

#### 앨리답

```js
const nums = [3, 16, 5, 25, 4, 34, 21];
const getArrayAvg = (arr, conditionNumber) => {
  const result = arr
    .filter((item) => item > conditionNumber)
    .reduce((avg, num, _, arr) => avg + num / arr.length, 0);

  return result;
};
console.log(getArrayAvg(nums, 5));
```

## 회고

- 배열의 다양한 매서드 들에 대해 짚고 넘어갈수 있어서 좋았다. forEach나 map 같은 함수들 자주 사용은 했는데, 축약해서 사용한다거나 어떤것을 리턴하는지.. 등은 크게 신경쓰지 않아왔는데 예제 풀어보면서 그것들이 가독성과 함수의 정확성에 얼마나 중요한 역할을 하는지 깨달음.
- array.of, array.from 과 같이 새로운 방법으로 array 생성할수 있구나
- 익숙한 매서드만 사용해버릇 해왔는데, 다양한 매서드들 활용해 볼수 있어서 좋았다. forEach 랑 map 도 쓰임에 따라 구분 잘 안해왔고, 익숙한 forEach 자주 사용해 왔다. 이제 쓰임을 제대로 알았으니, 구분해서 코드가 더욱 간단한걸 골라서 사용할 수 있겠다
- reduce 함수 왠지 복잡해 보여서 자주 사용안했는데 이제 사용법 알겠다!
