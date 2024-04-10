# CONTENT

1. [array.js](#1-arrayjs)
2. [add.js](#2-addjs)
3. [array-method.js](#3-array-methodjs)
4. [shallow.js](#4-shallowjs)
5. [functional-programming.js](#5-functional-programmingjs)
6. [hof.js](#6-hofjs)

<br /><br />

# 1. array.js

### 배열을 생성하는 방법

```javascript
// 1. 생성자 함수
let array = new Array(2); // 2개의 아이템을 저장할 수 있도록 사이즈 지정 가능
console.log(array); // [ <2 empty items> ]
array = new Array(1, 2, 3); // 실제 아이템 지정 가능
console.log(array); // [ 1, 2, 3 ]

// 2. static 함수
array = Array.of(1, 2);
console.log(array); // [1, 2]

// 3. 배열 리터럴
const anotherArray = [1, 2, 3, 4];
console.log(anotherArray); // [1, 2, 3, 4]

// 4. Array.from()
array = Array.from(anotherArray); // anotherArray를 복사해서 배열 생성
console.log(array); // [1, 2, 3, 4]
array = Array.from('text');
console.log(array); // [ 't', 'e', 'x', 't' ]
```

- 일반적으로 배열은 동일한 메모리 크기를 가지며, 연속적으로 이어져 있어야 함

- 하지만 JS에서의 배열은 연속적으로 이어져 있지 않아 Object와 유사함!

- 따라서 JS에서의 배열은 일반적인 배열의 동작을 흉내낸 특수한 객체 ✨

<br />

### 타입 배열

- 위의 단점을 보완하기 위해 타입이 정해져 있는 타입 배열이 있음 (Typed Collections)

```javascript
array = Array.from({
  0: '안',
  1: '녕',
  length: 2,
});
console.log(array); // [ '안', '녕' ]
array = Array.from({
  0: '안',
  1: '녕',
  length: 4,
});
console.log(array); // [ '안', '녕', undefined, undefined ]
```

<br /><br />

# 2. add.js

### 배열 아이템 추가/삭제 시 좋지 않은 방식

```javascript
// - 추가
fruits[4] = '🍉';
console.log(fruits); // [ '🍌', '🍎', '🍇', '🍑', '🍉' ]
// 인덱스로 바로 접근하면 의도와 다르게 데이터가 덮어씌워질 수 있기 때문에 지양
// 굳이 해야 한다면 아래와 같은 방법이 나음 (마지막에 넣는다는 가정)
fruits[fruits.length] = '🍓';
console.log(fruits); // [ '🍌', '🍎', '🍇', '🍑', '🍉', '🍓' ]

// - 삭제
delete fruits[0]; // delete 키워드 사용 시 데이터만 지워지고 공간은 남음
console.log(fruits); // [ <1 empty item>, '🍎', '🍇', '🍑', '🍉', '🍓' ]
```

<br /><br />

# 3. array-method.js

### 배열의 함수들

- 배열 자체를 변경하는지, 새로운 배열을 반환하는지를 key point로 두고 알아보기

```javascript
const fruits = ['🍌', '🍎', '🍇'];

// 특정한 오브젝트가 배열인지 체크
console.log(Array.isArray(fruits)); // true

// 추가 - 제일 앞
length = fruits.unshift('🍓');

// 제거 - 제일 뒤 (☑️ 배열 자체를 변경)
let lastItem = fruits.pop();

// 제거 - 제일 앞
lastItem = fruits.shift();

// 중간에 추가 또는 삭제
item = fruits.splice(1, 0, '🍎'); // 지정 인덱스, 삭제할 개수, 추가할 요소 (여러 개 가능)

// 중첩된 배열을 한 단계의 flat한 배열로 만들기
let arrs = [
  [1, 2, 3],
  [4, [5, 6]],
];
console.log(arrs.flat()); // [ 1, 2, 3, 4, [ 5, 6 ] ]
console.log(arrs.flat(2)); // [ 1, 2, 3, 4, 5, 6 ]
```

<br /><br />

# 4. shallow.js

- 얕은 복사 Shallow Copy

  - 객체는 메모리 주소가 전달됨

  - JS에서 복사를할 때는 항상 얕은 복사가 이루어짐!

  - Array.from, concat, slice, spread(...), Objet.assign

- 깊은 복사 Deep Copy

  - 객체를 재귀적으로 탐색해 모든 하위 객체를 복사하거나,

  - Lodash 라이브러리 또는 structuredclone() 을 이용해 깊은 복사 구현 가능

<br /><br />

# 5. functional-programming.js

### 일급객체 first-class object

- 일반 객체처럼 모든 연산이 가능한 것

  - 함수의 매개변수로 전달

  - 함수의 반환값

  - 할당 명령문

  - 동일 비교 대상

- 즉, 아래의 3가지 조건을 충족한 객체를 말함

  1. 변수나 데이터에 할당할 수 있어야 함

  2. 함수의 파라미터로 전달할 수 있어야 함

  3. 함수의 리턴값으로 사용할 수 있어야 함

<br />

### 고차함수 Higher-order funtion

- 인자로 함수를 받거나(콜백함수) 함수를 반환하는 함수

- 즉, 함수를 파라미터로 전달받거나 연산의 결과로 반환해주는 메서드

- 함수형 프로그래밍의 핵심이기도 하며, js를 함수형 프로그래밍에 알맞은 언어로 만들어주는 특성

<br />

### 함수형 프로그래밍 Functional Programming

- JS에서 함수형 프로그래밍은 프로그램을 함수들의 조합으로 작성하고, <br /> 상태의 변화와 가변 데이터를 피하려는 프로그래밍 패러다임

- 함수형 프로그래밍에서는 세 가지 핵심 개념인 `함수형 프로그래밍`, `순수 함수`, `불변성`이 중요하게 강조됨

- 함수형 프로그래밍은 함수를 변수에 할당하고, 함수를 다른 함수의 매개변수로 전달하거나 반환할 수 있음

- 프로그램을 작은 조각으로 나누고 각각의 조각을 함수로 구현하여 전체 시스템을 구축하는 방식

- 부작용을 최소화하고, 코드를 더 가독성있게 만들 수 있음

<br />

### 순수 함수 Pure Function

- 동일한 입력에 대해 항상 동일한 출력을 반환하며, 부수효과가 없는 함수

- 외부의 상태에 의존하지 않고, 함수 내부에서 외부의 값을 변경하지 않음

- 순수 함수는 예측 가능하며 테스트, 디버깅, 병렬 처리 등이 쉬워짐

<br />

### 불변성 Immutability

- 데이터가 생성된 후에 그 값을 변경할 수 없음

- 코드를 더 예측 가능하게 만들어 주며, 상태 관리를 단순화하고 병렬 처리를 쉽게 만듦

- JS에서는 객체나 배열을 수정하는 대신 새로운 객체나 배열을 생성하는 방식으로 불변성을 유지

<br />

### 함수형 프로그래밍, 순수 함수, 불변셩의 연관 관계

- 함수형 프로그래밍은 불변성과 순수 함수를 중요한 원칙으로 삼음

- 불변성은 함수형 프로그래밍에서 부작용을 최소화하고 예측 가능한 동작을 보장함

- 순수 함수는 불변성을 보장하며, 불변성은 함수형 프로그래밍을 더 강력하게 만듦

- 불변성과 순수함수는 함께 사용되어 코드의 안정성과 가독성을 높이고, <br /> 동시에 병렬 처리와 테스트를 용이하게 만듦

- 함수형 프로그래밍은 이러한 개념들을 결합해 코드의 유지보수성을 향상시키고, <br /> 버그를 줄이며 코드를 더욱 견고하게 만듦

<br /><br />

# 6. hof.js

- .forEach()

  - 배열의 각 요소에 대해 제공된 함수를 한 번씩 실행

- .find()

  - 제공된 배열에서 제공된 테스트 함수를 만족한 첫 번째 요소 반환

- .findIndex()

  - 배열에서 찾은 요소가 인덱스가 필요한 경우

- .indexOf()

  - 값의 인덱스를 찾아야 하는 경우

- .includes()

  - 배열에 값이 존재하는지 찾아야 하는 경우

- .some()

  - 제공된 테스트 함수를 만족하는 일부 요소가 있는지 찾아야 하는 경우

- .every()

  - 제공된 테스트 함수를 만족하는 모든 요소가 있는지 찾아야 하는 경우

- 새로운 배열을 반환하는 고차함수: map(모든 요소 반환), filter(일치하는 요소 반환)

- .flatMap()

  - 배열의 각 요소에 주어진 콜백요소를 실행하고 결과를 한 단계씩 평탄화하여 형성된 새 배열 반환

  - map() 뒤에 깊이 1의 flat()을 붙이는 것(arr.map(...args).flat())과 동일하지만 두 메서드를 따로 호출하는 것보다 조금 더 효율적임

- .sort()

  - 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환 (이때, 정렬은 stable sort가 아닐 수 있음)

  - 기본 정렬 순서는 문자열의 유니코드 코드 포인트를 따르며, 기존 배열을 변경함

- .reduce()

  - 배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과값 반환
