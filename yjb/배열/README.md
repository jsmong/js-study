## 배열의 타입

자바스크립트에 배열이라는 타입은 존재하지 않음. 배열은 객체 타입

```javascript
typeof []; // 'object'
```

배열은 객체지만 일반 객체와는 구별되는 독특한 특징이 있음

| 구분              | 객체                      | 배열          |
| ----------------- | ------------------------- | ------------- |
| 구조              | 프로퍼티 키와 프로퍼티 값 | 인덱스와 요소 |
| 값의 참조         | 프로퍼티 키               | 인덱스        |
| `값의 순서`       | X                         | `O`           |
| `length 프로퍼티` | X                         | `O`           |

순차적으로 요소에 접근할 수도 있고 마지막부터 역순으로 접근할 수도 있음  
=> 순서와 length 프로퍼티가 가지기 때문에 가능

<br/>
<br/>

## 자바스크립트 배열은 배열이 아니다

> 자료구조에서 말하는 배열은 `동일한 크기의 메모리 공간`이 빈틈없이 연속적으로 나열된 자료구조를 말함  
> 즉, 배열의 요소는 하나의 데이터 타입으로 통일되어 있으며 서로 연속적으로 인접해 있는 `밀집 배열`

하지만 자바스크립트의 배열은 일반적인 배열의 동작을 흉내 낸 특수한 객체

```javascript
// Obejct.getOwnPropertyDescriptors() => 프로퍼티 어트리뷰터 정보를 제공하는 프로퍼티 디스크립터 객체 반환
console.log(Object.getOwnPropertyDescriptors(['a', 'b', 'c']));
```

=> 자바스크립트 배열의 요소는 사실 프로퍼티 값

<br/>
<br/>
<br/>

> 자바스크립트의 배열은 배열의 요소를 위한 각각의 메모리 공간은 동일한 크기를 갖지 않아도 되며, 연속적으로 이어져 있지 않을 수도 있음  
> 배열의 요소가 연속적으로 이어져 있지 않으면 `희소 배열`

```javascript
const arr = [
  'string',
  10,
  true,
  null,
  undefined,
  NaN,
  Infinity,
  [],
  {},
  function () {},
];
```

일반적인 배열의 length는 배열 요소의 개수와 언제나 일치함  
하지만 희소 배열은 length와 요소의 개수가 일치하지 않음

> - 자바스크립트에서는 문법적으로 희소배열을 허용하지만 사용하지 않는 것이 좋음
> - 의도적으로 희소배열을 만들어야 하는 상황은 발생하지 않음
> - 연속적인 값의 집합이라는 배열의 기본적인 개념과 맞지 않음
> - 성능에도 좋지 않은 영향을 줌  
>   (최적화가 잘 되어 있는 모던 자바스크립트 엔진은 요소들의 타입이 일치하는 배열을 생성할 때 일반적인 의미의 배열처럼 연속된 메모리 공간을 확보)

=> 배열을 생성할 때 희소 배열을 생성하지 않도록 주의. `배열에는 같은 타입의 요소를 연속적으로 위치시키는 것이 최선`

<br/>
<br/>

# 알아두면 유용할 Tip

## splice()

배열의 요소를 제거 뿐만이 아닌 추가도 가능

```javascript
const arr = [1, 2, 3, 4];
const result = arr.splice(1, 2, 20, 30);
console.log(result); // [2, 3]
console.log(arr); // [1, 20, 30, 4]
```

<br/>
<br/>

## sort()

문자열 요소로 이루어진 배열 정렬은 문제 없음.  
하지만 숫자 요소로 이루어진 배열 정렬은 주의가 필요

배열의 요소가 숫자 타입일지라도 배열의 요소를 일시적으로 `문자열로 변환` 후 정렬

```javascript
const arr = [30, 100, 1, 6, 20, 60, 10];
arr.sort();
console.log(arr); // [1, 10, 100, 20, 30, 6, 60]
```

따라서 숫자 요소 정렬 시 정렬 순서를 정의하는 비교 함수를 인수로 전달해야 함

```javascript
arr.sort((a, b) => a - b);
console.log(arr); // [1, 6, 10, 20, 30, 60, 100]

arr.sort((a, b) => b - a);
console.log(arr); //[100, 60, 30, 20, 10, 6, 1]
```

<br/>
<br/>

## flat()

인수로 전달한 깊이만큼 재귀적으로 배열을 평탄화  
깊이 값 기본값은 1

```javascript
const arr = [1, [2, [3, 4]]];
console.log(arr.flat()); // [1, 2, [3, 4]];
console.log(arr.flat(1)); // [1, 2, [3, 4]];
console.log(arr.flat(2)); // [1, 2, 3, 4]
console.log(arr.flat().flat()); // [1, 2, 3, 4]
console.log(arr.flat(Infinity)); // [1, 2, 3, 4]
```

<br/>
<br/>

## flatMap()

ES10(ECMAScript 2019)에서 도입된 메서드. map 메서드를 통해 생성된 새로운 배열을 평탄화  
map 메서드와 flat 메서드를 순차적으로 실행하는 효과

```javascript
const arr = ['hello', 'world'];

arr.map((x) => x.split('')); // [['h', 'e', 'l', 'l', 'o'], ['w', 'o', 'r', 'l', 'd']]

arr.map((x) => x.split('')).flat(); // ['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']
arr.flatMap((x) => x.split('')); // ['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']
```

단, flatMap 메서드는 flat 메서드처럼 평탄화 깊이를 지정할 수 없고 1단계만 평탄화함

<br/>
<br/>

## 유사배열 객체와 이터러블 객체

유사 배열객체 또는 이터러블 객체를 배열로 변환하여 반환

`유사배열 객체`: 배열처럼 인덱스로 프로퍼티 값에 접근할 수 있고 length 프로퍼티를 갖는 객체  
마치 배열처럼 for문으로 순회 가능

```javascript
const arrayLike = {
    '0': 'apple',
    '1': 'banana',
    '2': 'orange'
    length:3
}
```

`이터러블 객체`: 스프레드 문법과 배열 구조분해 할당 대상으로 사용할 수 있는 객체  
for...of 문으로 순회 가능

Array, String, Map, Set, DOM 컬렉션(NodeList,HTMLCollection), arguments 등

<br/>
<br/>

# Quiz

1. 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수 만들기 (단, 주어진 배열을 수정하지 않도록)

```javascript
// input: ['🍌','🍓','🍇','🍓']
// output: ['🍌','🥝','🍇','🥝']

const arr = ['🍌', '🍓', '🍇', '🍓'];
const changeBerry = (arr) => {
  return arr.map((el) => (el === '🍓' ? '🥝' : el));
};
console.log(changeBerry(arr));
console.log(arr);
```

2. 배열과 특정한 요소를 전달받아, 배열 안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기

```javascript
// input: ['🍌','🥝','🍇','🥝'], '🥝'
// output: 2
const arr = ['🍌', '🥝', '🍇', '🥝'];
const countItem = (arr, item) => arr.filter((el) => el === item).length;

console.log(countItem(arr, '🥝'));
```

3. 배열1, 배열2, 두개의 배열을 전달받아, 배열1 아이템 중 배열2에 존재하는 아이템만 담고 있는 배열 반환

```javascript
// input: ['🍌','🥝','🍇'], ['🍌','🍓','🍇','🍓']
// output: ['🍌','🍇']
const arr1 = ['🍌', '🥝', '🍇'];
const arr2 = ['🍌', '🍓', '🍇', '🍓'];
const filterItems = (arr1, arr2) => {
  return arr1.filter((el) => arr2.indexOf(el) > -1);
};
console.log(filterItems(arr1, arr2));
```

4. 5 이상의 요소의 평균 구하기

```javascript
const nums = [3, 16, 5, 25, 4, 34, 21];
const getAverage = (nums) => {
  const filtered = nums.filter((el) => el >= 5);
  return filtered.reduce((sum, val) => (sum += val), 0) / filtered.length;
};
console.log(getAverage(nums)); // 20.2
```
