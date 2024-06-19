# ▪︎ 비동기

## ▫︎ callStack

자바스크립트는 기본적으로 동기적으로 실행되기 때문에 무거운 작업을 수행하는 것은 좋지 않다. (자바스크립트는 하나의 싱글 컨텍스트 스택, 싱글 스레드)

Web APIs → 멀티 스레드!

JS 런타임 호스트 환경에서 다양한 api 사용 가능 (대부분의 api는 비동기적으로 작업 병렬 수행)

- DOM API
- setInterval
- fetch
- event listener

JS 엔진의 콜스택은 한번에 하나의 작업만 수행

→ 이벤트 루프가 태스크 큐를 감시하다가 콜스택이 비어있다면 태스크 수행

```jsx
function execute() {
  console.log("1");
  setTimeout(() => {
    console.log("2");
  }, 3000);
  console.log("3");
}

execute();
// 실행 결과: 1, 3, 2
```

## Quiz

- 주어진 초가 지나면 callback 함수를 호출하는 함수를 작성해라. (단, 초가 0보다 작으면 에러를 던져라.)

```jsx
function runInDelay(callback, seconds) {
  if (!seconds || seconds < 0) {
    throw new Error("seconds는 0보다 커야 함");
  }
  setTimeout(callback, seconds * 1000);
}

try {
  runInDelay(() => {
    console.log("타이머 완료!");
  }, 2);
} catch (err) {}
```

## ▫︎ Promise

promise는 말 그대로 약속. 작업을 완료하면 성공 여부를 알려주겠다는 약속!

callback hell 없이 함수형 프로그램처럼 사용할 수 있도록 해줌

- pending
- fulfilled
- rejected

```jsx
function runInDelay(seconds) {
  // new 키워드로 promise 생성 후 생성자 안에 콜백함수 전달
  return new Promise((resolve, reject) => {
    if (!seconds || seconds < 0) {
      reject(new Error("seconds는 0보다 커야 함"));
    }
    setTimeout(resolve, seconds * 1000);
  });
}

runInDelay(2)
  .then(() => console.log("타이머 완료"))
  .catch(console.error)
  .finally(() => console.log("끝"));
```

```jsx
Promise.all([getBanana(), getApple()]).then((fruits) => console.log(fruits)); // 모든 콜백을 병렬처리

Promise.race([getBanana(), getApple()]).then((fruits) => console.log(fruits)); // 주어진 Promise 중 빠르게 수행된 것 출력

Promise.allSettled([getBanana(), getApple(), getOrange()]) // 모든 결과를 받아보고 싶을 때
  .then((fruits) => console.log(fruits))
  .catch(console.log());
```

## ▫︎ Async

함수 앞에 async 키워드를 붙여 조금 더 동기적(절차적)인 코드를 작성할 수 있음

```jsx
async function fetchFrits() {
  const avocado = await getAvocado(); // resolve 되면 변수에 값을 할당
  const apple = await getApple();

  return [avocado, apple]; // 이 값들을 resolve 하는 Promise가 return됨
}
```

## Quiz

- async 키워드로 callback hell을 개선하기

```jsx
// promise version
function makeFriedEgg() {
  return getChicken()
    .catch(() => "🐔")
    .then(fetchEgg)
    .then(fryEgg);
}

// async version
async function makeFriedEgg() {
  let chicken;
  try {
    chicken = await getChicken();
  } catch {
    chicken = "🐔";
  }

  const egg = await fetchEgg(chicken);
  return fryEgg(egg);
}

makeFriedEgg().then(console.log);
```

## ▫︎ JSON

JavaScript Object Notation (자바스크립트 객체 표기법)의 약자

서버와 클라이언트 간 HTTP 통신을 위한 오브젝트 형태의 텍스트 포맷이다.

```jsx
const hj = {
  age: 26,
  eat: () => {
    console.log("eat");
  },
};

// 직렬화 (JSON 객체 → String)
const json = JSON.stringify(hj);

// 역직렬화 (String → JSON 객체)
const obj = JSON.parse(json);
```

# ▪︎ 스코프

## ▫︎ 스코프란?

식별자를 참조할 수 있는 유효한 영역, 범위

필요성:

- 이름 충돌 방지
- 메모리 절약

코드 블럭({…})을 사용하는 곳에서 스코프가 결정되고, 내부에서 외부 블럭을 참조할 수 있지만, 외부에서 내부 블럭을 참조할 수 없다.

## ▫︎ 가비지 컬렉터

아무도 오브젝트를 참조하고 있지 않으면 가비지 컬렉터가 쓰레기로 간주해서 메모리에서 청소해 줌

자바스크립트 엔진에 자체적으로 존재하며, 백그라운드 프로세스로 동작한다.

하지만, CPU 리소스를 사용하는 비용이 들기 때문에 필요한 만큼 메모리를 사용하는 것이 좋다.

전역 변수는 앱이 종료될 때 까지 메모리에 유지되고 블럭 내부 지역 변수는 블럭이 끝나면 자동으로 소멸된다.

## ▫︎ 실행 컨텍스트

코드의 실행순서와 스코프를 기억함

각가의 블럭은 렉시컬 환경이라는 내부 오브젝트(블럭의 변수, 부모 등의 정보)를 가지고 있다.

렉시컬 환경:

- 환경 레코드 : 현재 블록에 대한 정보
- 외부 환경 참조 : 부모 블록에 대한 참조

중첩된 스코프 안에서 참조를 찾을 때, 스코프 체인을 모두 검사해야 하므로 메모리 절약 뿐 아니라 성능을 위해서도 변수는 필요한 곳에서만 정의하는 것이 좋다.

## ▫︎ 호이스팅

자바스크립트 엔진이 코드를 실행하기 전 변수, 함수, 클래스의 **선언문**을 끌어올리는 것

- 변수 let과 const는 선언만 호이스팅 되고 초기화 되지 않아 초기화 전에 접근하면 컴파일 에러 발생
- var는 일반 코딩 방식과 어긋나서 코드 가독성과 유지보수에 좋지 않음
  - 선언 키워드 없이 선언과 할당이 가능해서 선언인지 재할당인지 구분이 어려움
  - 중복 선언 가능
  - 블록 스코프 X… 함수 레벨 스코프만 지원됨

## ▫︎ strict mode

리액트 등 프레임워크 사용 시 기본적으로 엄격 모드

`‘use strict’;` → 사용하면 JS의 버르장머리를 고쳐줌 (보다 엄격한 parsing 및 에러핸들링)

1. 암묵적 전역변수 생성 금지
2. 중복된 매개변수 이름 금지
3. eval 제한
4. 예약어 사용 금지
5. 기타 등등...
