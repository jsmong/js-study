# Promise

현재 비동기 처리가 어떻게 진행되고 있는지를 나타내는 상태 정보를 가짐

| 프로미스 상태 정보 | 의미                                  | 상태 변경 조건                   |
| ------------------ | ------------------------------------- | -------------------------------- |
| pending            | 비동기 처리가 아직 수행되지 않은 상태 | 프로미스가 생성된 직후 기본 상태 |
| fulfilled          | 비동기 처리가 수행된 상태(성공)       | resolve 함수 호출                |
| rejected           | 비동기 처리가 수행된 상태(실패)       | reject 함수 호출                 |

=> `프로미스는 비동기 처리 상태와 처리 결과를 관리하는 객체`

<br/>
<br/>

# 프로미스 정적 메서드

## Promise.resolve / Promise.reject

이미 존재하는 값을 래핑하여 프로미스를 생성하기 위해 사용

```javascript
// const fulfilled1 = new Promise((resolve) => resolve('SUCCESS'));
const fulfilled2 = Promise.resolve('SUCCESS');

// const rejected1 = new Promise((_, reject) => reject('ERROR!!'));
const rejected2 = Promise.reject('ERROR!!');
```

<br/>

## Promise.all

여러 개의 비동기 처리를 모두 병렬 처리할 때 사용  
전달받은 배열의 모든 프로미스가 모두 fulfilled 상태가 되면 종료

```javascript
const request1 = () => { ... } // Promise를 반환하는 3초 걸리는 함수
const request2 = () => { ... } // Promise를 반환하는 4초 걸리는 함수
const request3 = () => { ... } // Promise를 반환하는 5초 걸리는 함수
```

1.

```javascript
request1()
    .then(() => request2())
    .then(() => request3())
    .then(() => console.log('finish!')) => // 약 12초 소요
```

2.

```javascript
Promise.all([request1(), request2(), request3()]).then((data) =>
  console.log(data)
); // 약 5초 소요
```

하나라도 rejected 상태가 되면 나머지 프로미스가 fulfilled 상태가 되는 것을 기다리지 않고 즉시 종료

<br/>

## Promise.race

```javascript
// Promise.race 주어진 Promise 중에 제일 빨리 수행된 것이 이김!
Promise.race([request1(), request2(), request3()]).then(console.log); // 가장 먼저 fulfilled 상태가 된(request1) 처리 결과 반환
```

하나라도 rejected 상태가 되면 나머지 프로미스가 fulfilled 상태가 되는 것을 기다리지 않고 즉시 종료

<br/>

## Promise.allSettled

전달받은 프로미스가 모두 settled 상태(비동기 처리가 수행된 상태)가 되면 처리 결과를 배열로 반환  
fulfilled 또는 rejected 상태와는 상관없이 모든 프로미스들의 처리 결과가 담겨있음

```javascript
Promise.allSettled([Promise.resolve('hi! SUCCESS'),Promise.reject(new Error('Error!'))])

// 반환 예시
[
    {
        "status": "fulfilled",
        "value": "hi! SUCCESS"
    },
    {
        "status": "rejected",
        "reason": Error: Error! at <anonymous>:3:60
    }
]
```

<br/>

### JSON.stringify()

직렬화 Serializing: 객체를 문자열로 변환  
함수는 제거됨, 데이터만

### JSON.parse()

역직렬화 Deserializing: 문자열 데이터를 자바스크립트 객체로 변환

<br/>

# Quiz 1

```javascript
// 주어진 seconds(초)가 지나면 callback함수를 호출함
// 단, seconds가 0보다 작으면 에러를 던지자!
function runInDelay(callback, seconds) {
  if (seconds < 0) return new Error('Error!!');
  setTimeout(() => callback(), seconds * 1000);
}
runInDelay(() => console.log('hi'), 2);
```

# Quiz 2

```javascript
// getChicken()
//   .catch(() => '🐔')
//   .then(fetchEgg)
//   .then(fryEgg)
//   .then(console.log);

async function getFriedEgg() {
  let chicken = '';
  try {
    chicken = await getChicken();
  } catch (e) {
    chicken = '🐔';
  }
  const egg = await fetchEgg(chicken);
  return await fryEgg(egg);
}
console.log(getFriedEgg);
```
