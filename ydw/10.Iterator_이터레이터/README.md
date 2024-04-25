# 이터레이션(Iteration)

## 1. 이터레이터(Iterator):

- 목적: 이터레이터는 데이터 컬렉션(배열, 객체 등)의 각 요소에 접근하고 반복하는 데 사용됩니다.
- 동작 방식: 이터레이터는 다음 요소에 접근하는 next() 메서드를 가진 객체입니다.
- next() 메서드를 호출할 때마다 이터레이터는 현재 위치에서 다음 요소로 이동하고 { value, done } 형태의 객체를 반환
- value는 현재 요소의 값이고, done은 이터레이터의 반복이 완료되었는지를 나타내는 불리언 값입니다.

### 1-1. 이터레이션 프로토콜(Iteration Protocol):

- 반복 가능한(iterable) 객체를 정의하는 규약
- [Symbol.iterator]() 메서드를 가진 객체를 이터러블(iterable) 객체로 정의.
- for...of 루프나 스프레드 연산자와 같은 문법을 사용하여 순회 가능.

### 1-2. 이터레이터 프로토콜(Iterator Protocol):

- 이터러블(iterable) 객체를 순회하는 방법을 정의.
- 이터레이터(iterator) 객체의 next() 메서드를 통해 다음 값을 가져오고,
  순회 종료 시 done 속성을 true로 설정.
- 이터레이터 객체는 { value, done } 형태의 결과를 반환하는 next() 메서드를 가져야 함.

<br/>

## 2. 제너레이터(Generator):

- 목적: 제너레이터는 이터레이터를 생성하는 함수입니다. 주로 비동기 작업이나 복잡한 반복 패턴을 단순화하는 데 사용
- 동작 방식: 제너레이터 함수는 function\* 키워드로 정의되며, 함수 내부에서 yield 키워드를 사용하여 값을 반환하고 일시적으로 함수 실행을 중단할 수 있습니다.
- 제너레이터 함수를 호출하면 제너레이터 객체가 반환되는데, 이 객체는 이터레이터 프로토콜을 따릅니다. 따라서 제너레이터 객체는 next() 메서드를 사용하여 값을 생성하고 반환할 수 있습니다.

<br/>

## 3.차이점 요약:

- 이터레이터는 <code>데이터 컬렉션</code>을 반복하는 데 사용되는 객체입니다.
- 제너레이터는 이터레이터를 생성하는 <code>함수</code>이며, 값을 생성하고 반환하기 위해 <code>yield</code> 키워드를 사용합니다.
- 제너레이터는 이터레이터 프로토콜을 따르므로 next() 메서드를 사용하여 값을 생성하고 반환할 수 있습니다.

<br/>

## 4. 이터레이션과 제너레이터를 활용한 서비스:

### 데이터 처리 및 변환 서비스:

- 이터레이션을 사용하여 데이터를 효율적으로 처리하고 변환
- 대용량의 데이터를 읽어와서 필요한 부분만 추출하거나, 데이터를 필터링하거나 매핑하여 원하는 형태로 변환할 수 있습니다.

```jsx
// 데이터 변환 및 필터링 예시
const data = [1, 2, 3, 4, 5];
const filteredData = data.filter((num) => num % 2 === 0); // 짝수만 필터링
console.log(filteredData); // [2, 4]

// 데이터 매핑 예시
const mappedData = data.map((num) => num * 2); // 각 요소를 2배로 매핑
console.log(mappedData); // [2, 4, 6, 8, 10]
```

<br/>

### 무한 수열 및 시퀀스 생성:

- 제너레이터를 사용하여 무한한 수열이나 시퀀스를 생성할 수 있습니다.
- 이를 활용하여 수학적 계산이나 시뮬레이션 등에 활용할 수 있습니다.
- 예를 들어, 피보나치 수열 생성기를 만들어서 특정 범위 내의 피보나치 수열을 생성할 수 있습니다.

```jsx
// 피보나치 수열 생성기
function* fibonacciGenerator() {
  let [prev, curr] = [0, 1];
  while (true) {
    yield curr;
    [prev, curr] = [curr, prev + curr];
  }
}

const fibonacci = fibonacciGenerator();
for (let i = 0; i < 10; i++) {
  console.log(fibonacci.next().value);
}
// 결과: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
```

<br/>

### 비동기 작업 관리:

- 제너레이터를 사용하여 비동기 작업을 관리하고 제어할 수 있습니다.
- 제너레이터를 활용하여 비동기 작업을 순차적으로 실행하거나, 여러 개의 비동기 작업을 동시에 실행하고 그 결과를 처리할 수 있습니다.
- 이를 통해 비동기 코드의 가독성과 유지보수성을 향상시킬 수 있습니다.

```jsx
// 비동기 작업 관리 예시
function* asyncTaskGenerator() {
  const result1 = yield fetchData1(); // 첫 번째 비동기 작업
  console.log(result1);
  const result2 = yield fetchData2(); // 두 번째 비동기 작업
  console.log(result2);
  // 추가 비동기 작업...
}

// 제너레이터 함수 실행
const taskIterator = asyncTaskGenerator();
const promise1 = taskIterator.next().value; // 첫 번째 비동기 작업 시작
promise1.then((result) => {
  taskIterator.next(result); // 두 번째 비동기 작업 시작
});
```

<br/>

### 자료구조 및 알고리즘 구현:

- 이터레이션과 제너레이터를 사용하여 다양한 자료구조나 알고리즘을 구현할 수 있습니다.
- 예를 들어, 이터레이터를 사용하여 커스텀한 데이터 구조를 만들거나, 제너레이터를 사용하여 탐색 알고리즘을 구현할 수 있습니다.

```jsx
// 이터레이터를 활용한 커스텀 데이터 구조 예시
class CustomDataStructure {
  constructor() {
    this.data = [];
  }

  add(item) {
    this.data.push(item);
  }

  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {
        if (index < this.data.length) {
          return { value: this.data[index++], done: false };
        } else {
          return { done: true };
        }
      },
    };
  }
}

const customData = new CustomDataStructure();
customData.add(1);
customData.add(2);
customData.add(3);

for (const item of customData) {
  console.log(item);
}
// 결과: 1, 2, 3
```

<br/>

### 스트리밍 데이터 처리:

- 제너레이터를 사용하여 스트리밍 데이터를 처리할 수 있습니다.
- 대용량의 데이터를 메모리에 한 번에 로드하지 않고 필요한 만큼씩 처리할 수 있으며, 이를 통해 성능을 향상

```jsx
// 제너레이터를 활용한 스트리밍 데이터 처리 예시
function* streamDataGenerator() {
  let pageIndex = 0;
  while (true) {
    const dataChunk = yield fetchDataChunk(pageIndex++); // 페이징된 데이터 청크 가져오기
    if (!dataChunk) {
      break; // 더 이상 데이터가 없으면 종료
    }
    console.log(dataChunk);
  }
}

const dataStream = streamDataGenerator();
let pageIndex = 0;
while (true) {
  const dataChunk = fetchDataChunk(pageIndex++); // 비동기로 페이징된 데이터 청크 가져오기
  const { value, done } = dataStream.next(dataChunk);
  if (done) {
    break; // 스트리밍 종료
  }
}
```

## 5. 스프레드 연산자(Spread Operator)

- 스프레드 연산자는 배열이나 객체와 같은 Iterable 객체를 펼쳐서 개별 요소로 분해하는 역할 - 주로 배열이나 객체를 병합하거나 복사할 때 사용됩니다.
- 배열이나 객체의 내용을 쉽게 펼쳐서 사용할 수 있음.
- 새로운 배열이나 객체를 생성하거나 기존 배열이나 객체를 수정하지 않고 데이터를 조작할 수 있음.

```jsx
// 배열 병합
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArray = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

// 배열 복사
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray]; // [1, 2, 3]

// 객체 병합
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObject = { ...obj1, ...obj2 }; // { a: 1, b: 2, c: 3, d: 4 }
```

<br/>

## 6. 구조분해 할당(Destructuring Assignment)

- 구조분해 할당은 배열이나 객체의 값들을 분해하여 개별 변수에 할당하는 문법입니다.
- 주로 배열이나 객체의 특정 값을 변수에 쉽게 할당할 때 사용됩니다.

### 블로그 글 데이터를 가져와서 기존의 글 목록과 병합 화면 표시

```jsx
// 가상의 블로그 글 데이터
const blogPosts = [
  { id: 1, title: 'JavaScript Basics', author: 'Alice' },
  { id: 2, title: 'React Tips', author: 'Bob' },
  {
    id: 3,
    title: 'Node.js Best Practices',
    author: 'Charlie',
  },
];

// 블로그 글 목록을 가져와서 화면에 표시하는 함수
function displayBlogPosts(posts) {
  posts.forEach((post) => {
    const { id, title, author } = post; // 객체 구조분해 할당
    console.log(`#${id}: ${title} by ${author}`);
  });
}

// 실제로는 서버에서 블로그 글 데이터를 가져와서 사용하겠지만, 여기서는 가상의 데이터를 사용함
const fetchedPosts = fetchBlogPosts(); // 가상의 함수

// 스프레드 연산자를 사용하여 블로그 글 목록을 화면에 표시
displayBlogPosts([...blogPosts, ...fetchedPosts]);
```

- displayBlogPosts(posts) 함수는 블로그 글 목록을 받아서 각 글의 정보를 콘솔에 출력하는 역할을 합니다.
- forEach 메서드를 사용하여 각 글에 접근하고, 객체 구조 분해 할당을 통해 글의 id, title, author 속성을 추출하여 출력합니다.
- fetchBlogPosts() 함수는 가상의 서버에서 블로그 글 데이터를 가져오는 함수입니다. 이 함수를 통해 가져온 데이터는 가상의 데이터로 가정되어 있습니다.
- displayBlogPosts([...blogPosts, ...fetchedPosts])에서는 스프레드 연산자를 사용하여 blogPosts와 fetchedPosts 배열을 합친 후, 이를 displayBlogPosts 함수에 전달합니다.
- 이렇게 하면 두 배열의 글 목록이 합쳐져서 한꺼번에 화면에 표시됩니다.
