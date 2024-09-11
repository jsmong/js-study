# 비동기

## 정리

### 1. callstack

- callstack 과 single thread 는 동기, 순차적으로 진행
- 중간에 긴 시간이 걸리는 작업이 있으면 전체 어플리케이션 동작 시간이 늘어나니 유의하기

```js
function a() {
  // 중간에 오래걸리는 작업이 있으면 전체 애플리케이션 속도가 낮아진다.
  for (let i = 0; i < 1000000000; i++);
  return 1;
}

function b() {
  return a() + 1;
}

function c() {
  return b() + 1;
}

console.log('시작');
const result = c(); // callstack : c() -> b() -> a()
console.log(result); // 3
```

### 2. timeout

- 자바스크립트 callback 자체는 동기적으로 시행된다.
- borwser의 경우 Web API(setTimeout, setInterval, fetch...) 를 통해서 비동기 적으로 함수 실행 가능

```js
function execute() {
  console.log(1);
  setTimeout(() => {
    console.log(2);
  }, 3000);
  console.log(3);
}
execute(); // 출력 : 1 -> 3 -> 2
```

### 3. promise

- 개요

* Promise 객체는 비동기 작업의 결과값을 나타낸다.
* 최종 결과를 반환하는 것이 아니라, 미래 어떤 시점 결과를 제공하겠다는 약속(promise)반환
* 3가지 상태를 가짐 : 대기(pending), 이행(fulfilled), 거부(reject)

### 4. then / catch / finally

- then(성공시 실행할 함수)
- catch(실패시 실행할 함수)
- finally(성공여부 상관없이 실행할 함수)

```js
function runInDelay(seconds) {
  // 성공적으로 끝났는지, 실패했는지 알려줌
  return new Promise((resolve, reject) => {
    // promise 를 만들수 있는 callback 함수 전달
    if (!seconds || seconds < 0) {
      // 실패
      reject(new Error('seconds는 0이상이어야 함'));
    }
    // 성공
    setTimeout(resolve, seconds * 1000);
  });
}

runInDelay(1)
  .then(
    () => console.log('타이머 완료') // 필요한 일 수행
  )
  .catch(
    console.error // 에러 처리
  )
  .finally(
    () => console.log('프로미스 끝!') // 성공여부와 상관없이 최종적으로 호출
  );
```

## 5. promise.all(), promise.race(), promise.allSettled

- promise.all() : 모든 프로미스가 이행되면 이행되고, 프로미스 중 하나라도 거부되면 거부됩니다.

```js
function getBanana() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('🍌');
    }, 1000);
  });
}

function getApple() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('🍎');
    }, 3000);
  });
}

function getOrange() {
  return Promise.reject(new Error('오렌지 없음 ㅜ'));
}

// 바나나와 사과를 같이 가지고 오기
// 순차 - 4초 걸림 (바나나 1초, 사과 3촌)
getBanana()
  .then((banana) => getApple().then((apple) => [banana, apple]))
  .then(console.log);

// 병렬적으로 실행해보자 -> 3초 걸림
Promise.all([getBanana(), getApple()]) //
  .then((fruits) => console.log('all', fruits));

// Promise.reace 주어진 Promise 중에 제일 빨리 수행 된것이 이김
Promise.race([getBanana(), getApple()]) //
  .then((fruit) => console.log('race', fruit));

// 성공했을대만 가져옴
Promise.all([getBanana(), getApple(), getOrange()]) //
  .then((fruits) => console.log('all-error', fruits))
  .catch(console.log);

// 모든 경우의 수를 반환
Promise.allSettled([getBanana(), getApple(), getOrange()]) //
  .then((fruits) => console.log('all-settle', fruits))
  .catch(console.log);
```

### 6. async / await

- 비동기 코드를 동기적인 형태로 변환할 수 있다.
- function 앞에 async를 붙이면 해당 함수는 항상 프라미스를 반환
- 프라미스가 아닌 것은 프라미스로 감싸 반환
- await는 async 함수 안에서만 동작합니다.
- 프라미스가 이행될 때까지 기다림

```js
function getBanana() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('🍌');
    }, 1000);
  });
}
function getApple() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('🍎');
    }, 3000);
  });
}
function getOrange() {
  return Promise.reject(new Error('오렌지 없음 ㅜ'));
}

async function fetchFruits() {
  const banana = await getBanana(); // 함수 호출시, promise 가 리턴됨, promise 가 resolve 되면 값을 할당해줌
  const apple = await getApple();
  return [banana, apple];
}

fetchFruits() //
  .then((fruits) => console.log(fruits));
```

### 7. JSON

- 서버와 클라이언트 간의 HTTP 통식을 위한 오브젝트 형태의 텍스트 포멧
- stringify(object): JSON
- parse(JSON): object

```js
const me = {
  name: '현정',
  age: 20,
  eat: () => {
    console.log('eat');
  },
};

// 직렬화 Serializing : 객체를 문자열로 변환
const json = JSON.stringify(me);

console.log(me); //{ name: '현정', age: 20, eat: [Function: eat] }
console.log(json); // {"name":"현정","age":20} // 순수 문자열, 함수는 포함 안됨

// 역직렬화 Deserializing  : 문자열 데이터를 자바스크립트 객체로 변환
const obj = JSON.parse(json);
console.log(obj); // { name: '현정', age: 20 }
```

## Quiz

### 1. 주어진 seconds(초)가 지나면 callback 함수를 호출함

단, secondes 가 0보다 작으면 에러를 던지자

- 내답

```js
function runInDelay(callback, seconds) {
  if (seconds > 0) {
    setTimeout(() => {
      callback();
    }, seconds * 1000);
  } else {
    console.error('seconds 는 0 이상이어야합니다!!');
  }
}

const callback = () => {
  console.log('hi');
};
runInDelay(callback, 3);
```

- 앨리답

```js
// ====== 앨리 답 ===============
function runInDelay(callback, seconds) {
  if (!callback) {
    throw new Error('callback 함수를 전달해주세요');
  }
  if (!seconds || seconds < 0) {
    throw new Error('seconds는 0보다 커야함');
  }
  setTimeout(callback, seconds * 1000);
}

try {
  runInDelay(() => {
    console.log('타이머 완료');
  }, 0);
} catch (error) {
  console.error(error);
}
```
