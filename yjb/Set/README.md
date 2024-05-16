# Set

## Set 객체의 메서드

#### `add`

- Set 객체에 요소 추가
- 연속적으로 호출 가능

  ```javascript
  const set = new Set();
  set.add(1).add(2).add(2);

  console.log(set); /// Set(2) {1, 2}

  console.log(set.add(3)); // Set(3) {1, 2, 3}
  ```

  NaN === NaN은 false 이지만 Set 객체는 같다고 평가

  ```javascript
  console.log(NaN === NaN); /// false

  const set = new Set();
  set.add(NaN).add(NaN);

  console.log(set); /// Set(1) {NaN}
  ```

#### `delete`

- Set 객체의 특정 요소 삭제
- 삭제 성공 여부 반환
- 연속적으로 호출 불가

  ```javascript
  const set = new Set([1, 2, 3]);
  console.log(set.delete(0)); /// false 에러 X
  console.log(set.delete(1)); /// true
  console.log(set); // Set(2) {2, 3}

  console.log(set.delete(2).delete(3)); // Uncaught TypeError: set.delete(...).delete is not a function
  ```

#### `clear`

- Set 객체의 모든 요소 일괄 삭제
- undefined 반환

  ```javascript
  const set = new Set([1, 2, 3]);
  set.clear();
  console.log(set); // Set(0) {}
  ```

#### `has`

- Set 객체의 요소 존재 확인

  ```javascript
  const set = new Set([1, 2, 3]);
  set.has(1); // true
  set.has(5); // false
  ```

#### `forEach`

배열에서의 forEach와 다르게 동작

- Array.prototype.forEach

  ```javascript
  const arr = ['a', 'b', 'c'];

  arr.forEach((element, index, array) => console.log(element, index, array));

  // a 0 (3) ['a', 'b', 'c']
  // b 1 (3) ['a', 'b', 'c']
  // c 2 (3) ['a', 'b', 'c']
  ```

  element: 배열에서 처리 중인 현재 요소.

  index: 배열에서 처리 중인 현재 요소의 인덱스.

  array: forEach()를 호출한 배열.

<br/>

- Set.prototype.forEach

  ```javascript
  const set = new Set(['a', 'b', 'c']);

  set.forEach((value1, value2, set) => console.log(value1, value2, set));

  // a a Set(3) {'a', 'b', 'c'}
  // b b Set(3) {'a', 'b', 'c'}
  // c c Set(3) {'a', 'b', 'c'}
  ```

  currentValue, currentKey:  
   처리할 현재 요소. Set은 키를 갖지 않으므로 두 인수 모두에 값을 전달  
   => 이처럼 동작하는 이유는 Array.prototype.forEach 메서드와 인터페이스를 통일하기 위함

  set:  
   forEach()를 호출한 Set

<br/>
<br/>

## 집합 연산

Set 객체는 수학적 집합을 구현하기 위한 자료구조

```javascript
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([4, 5]);
```

교집합 A ∩ B  
`intersection`

<img src="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/intersection/diagram.svg" width="300"/>

```javascript
setA.intersection(setB); // Set(1) {4}
```

<br/>
<br/>

합집합 A ∪ B  
`union`

<img src="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/union/diagram.svg" width="300"/>

```javascript
setA.union(setB); // Set(5) {1, 2, 3, 4, 5}
```

<br/>
<br/>

차집합 A - B  
`difference`

<img src="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/difference/diagram.svg" width="300"/>

```javascript
setA.difference(setB); // Set(3) {1, 2, 3}
```

```javascript
setB.difference(setA); // Set(1) {5}
```

<br/>
<br/>

부분 집합과 상위 집합  
`isSupersetOf`, `isSubsetOf`  
<img src="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/isSubsetOf/diagram.svg" width="300"/>  
집합 A가 집합 B에 포함되는 경우
=> A는 B의 부분집합 (A ⊆ B )  
=> B는 A의 상위 집합 (superset)

```javascript
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 4]);
setA.isSupersetOf(setB); // true A는 B의 상위집합이다
setB.isSubsetOf(setA); // true  B는 A의 부분집합이다
```

<br/>
<br/>
<br/>

## Quiz

1. 주어진 배열에서 중복을 제거

   ```javascript
   const fruits = ['🍌', '🍎', '🍇', '🍌', '🍎', '🍑'];
   ```

   ```javascript
   console.log([...new Set(fruits)]); // ['🍌', '🍎', '🍇', '🍑']
   ```

2. 주어진 두 세트의 공통된 아이템만 담고 있는 세트 만들기

   ```javascript
   const set1 = new Set([1, 2, 3, 4, 5]);
   const set2 = new Set([1, 2, 3]);
   ```

   ```javascript
   // 1번 풀이

   const newSet = new Set();
   set1.forEach((el) => set2.has(el) && newSet.add(el));

   console.log(newSet); // Set(3) {1, 2, 3}
   ```

   ```javascript
   // 2번 풀이

   console.log(set1.intersection(set2)); // Set(3) {1, 2, 3}
   ```
