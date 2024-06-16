# 16. 비동기

## 16.1 비동기 소개

비동기 (Async)

- callback : 동기와 비동기의 차이점
  - 동기적으로 실행할 수 있는 callback
  - 비동기적으로 실행할 수 있는 callback
- promise : 동기를 깔끔하게 작성하기
- async, await : 비동기 코드를 동기적으로 보이도록 작성하기

## 16.2 자바스크립트 실행 순서 (콜스택)

JavaScript Engine 구성

- Memory Heap : 동적으로 객체를 생성하는 경우 메모리 힙에 생성된다.
- **Call Stack : 함수의 실행 순서를 기억**
  - 자바스크립트 엔진은 하나의 싱글 컨텍스트 스택을 가진다.
  - **단 하나의 스트림으로만 한가지의 일을 한번에 처리한다.**
  - 싱글 쓰레드 (Single Thread)
    - 한번에 하나의 일만 처리할 수 있다.
  - 자바스크립트는 기본적으로 동기적으로 진행
    - 하나의 일이 처리될 때까지 기다린다.
    - 오랜시간이 소요되는 무거운 작업을 수행하면 좋지 않다.

## 16.3 콜백 비동기 사용해 보기

비동기적인 수행을 위해 런타임 환경(호스트 환경)에서 제공하는 다양한 API를 사용할 수 있다.

- 브라우저 환경에서 제공되는 Web APIs

  - 비동기적으로 실행된다.
  - 멀티 쓰레드 (Multi Thread)
    - 다양한 일을 동시에 처리할 수 있다.
  - DOM API, setTimeout, setInterval, fetch(네트워크 통신), event listener

- **Task Queue (JavaScript의 Event Loop)**
  1. Web API를 호출할 때 실행되기를 원하는 callback 함수를 등록한다.
  2. 내부적으로 비동기적인 일들을 수행한다.
  3. 비동기 처리가 종료되면, 등록했던 callback 함수를 Task Queue에 넣는다. (순차적)
  4. 자바스크립트 엔진의 Event Loop가 Call Stack이 비어있을 때 callback 함수를 Call Stack에 넣는다.
  5. 자바스크립트 엔진에서는 Call Stack의 함수만 수행할 수 있다.

**Task Queue는 Web API가 수행한 비동기 함수를 넘겨받아 Event Loop가 해당 함수를 Call Stack에 넘겨줄 때까지 비동기 함수들을 쌓아놓는 곳.**

```javascript
function execute() {
	console.log('1');

	setTimeout(() => {
		// callback 함수
		console.log('2');
	}, 3000);

	console.log('3');
}

execute(); // 1 -> 3 -> 2
```

## 16.6 프로미스 시작!

### 콜백지옥(Callback Hell)

- 자바스크립트를 이용한 비동기 프로그래밍에서 발생하는 문제
- 함수의 매개변수로 넘겨지는 callback 함수가 반복되어 코드의 들여쓰기 수준이 감당하기 힘들 정도로 깊어지는 현상

### 프로미스 (Promise)

- callback의 대체제로 사용할 수 있다. (콜백지옥 탈출)
- 비동기 처리가 끝났음을 알려주는 object
- 상태 : pending(초기 상태), fulfilled(성공), rejected(실패)

```javascript
function runInDelay(seconds) {
	// 1. new 연산자로 Promise 생성
	// 2. 생성자 안에는 Promise를 만들 수 있는 callback 함수를 전달해야 한다.
	//    -> 두가지 인자(resolve, reject)를 받아서 어떠한 일을 처리하는 callback 함수
	//    -> resolve(성공시 호출), reject(실패시 호출)
	// 3. callback 함수는 Promise에 의해 호출된다.

	// 대기(Pending) 상태 - return new Promise();
	return new Promise((resolve, reject) => {
		// [ 비동기적인 일 수행 ]
		if (!seconds || seconds < 0) {
			// 거부(Rejected) 상태 - reject();
			reject(new Error('seconds가 0보다 작습니다.'));
		}

		// 이행(Fulfiled) 상태 - resolve();
		setTimeout(resolve, seconds * 1000);
	});
}

/**
 * then - 성공시 호출
 * catch - 실패시 호출
 * finally - 무조건 호출
 */
runInDelay(2)
	.then(() => console.log('타이머 완료.'))
	.catch(console.error)
	.finally(() => console.log('끝났다.'));
```

## 16.7 프로미스 함수들

MDN 참고자료 : References > Promise > Static methods
<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise>

### Static methods - Promise.resolve(), Promise.reject() 사용

```javascript
function fetchEgg(chicken) {
	// return new Promise((resolve, reject))
	return Promise.resolve(`${chicken} => 달걀`);
}
function fryEgg(egg) {
	return Promise.resolve(`${egg} => 달걀 후라이`);
}
function getChicken() {
	// return Promise.resolve(`정원 => 닭`);
	return Promise.reject(new Error('닭을 가지고 올 수 없습니다.'));
}
```

### Promise Chaining

- catch 에러 처리의 순서에 따라 흐름이 달라진다. (에러 버블링)
- 적절한 에러 처리와 대체 값 반환하기

```javascript
getChicken()
	.catch((error) => {
		console.log(error.name);
		return '닭2';
	})
	.then((chicken) => {
		return fetchEgg(chicken);
	})
	.then((egg) => {
		return fryEgg(egg);
	})
	.then((friedEgg) => console.log(friedEgg));

// ------------------------------
// 전달하는 인자와 호출하는 인자가 동일하면 생략 가능
getChicken()
	.catch(() => '닭2')
	.then(fetchEgg)
	.then(fryEgg)
	.then(console.log);
```

## 16.8 프로미스 병렬 처리

### Quiz

Promise Chaining를 활용하여 바나나와 사과를 배열에 저장하기 (4초 소요)

```javascript
function getBanana() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve('바나나');
		}, 1000);
	});
}
function getApple() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve('사과');
		}, 3000);
	});
}
function getOrange() {
	return Promise.reject(new Error('no orange'));
}

// [ Quiz ]
// Promise Chaining를 활용하여 바나나와 사과를 배열에 저장하기 (4초 소요)
const array = [];
getBanana()
	.then((value) => {
		array.push(value);
		return getApple();
	})
	.then((value) => {
		array.push(value);
		console.log('array : ', array);
	});

// 정답 예제 코드 ----------
getBanana() //
	.then((banana) =>
		getApple() //
			.then((apple) => [banana, apple])
	)
	.then(console.log);
```

### 병렬 처리

```javascript
// Promise.all : 병렬적으로 한번에 모든 Promise를 실행 (3초 소요)
Promise.all([getBanana(), getApple()]) //
	.then((fruits) => console.log('all : ', fruits));

// Promise.race : 주어진 Promise 중 가장 빨리 수행되는 것이 출력 (1초 소요)
Promise.race([getBanana(), getApple()]) //
	.then((fruit) => console.log('race : ', fruit));

// Promise.all - Error가 있을 경우
Promise.all([getBanana(), getApple(), getOrange()]) //
	.then((fruits) => console.log('all-error : ', fruits))
	.catch(console.log);

// Promise.allSettled : 실패, 성공의 결과를 배열로 묶어서 출력
Promise.allSettled([getBanana(), getApple(), getOrange()]) //
	.then((fruits) => console.log('all-settled : ', fruits))
	.catch(console.log);
```

## 16.9 비동기 코드를 동기적으로 async, await

비동기 코드를 동기적인 형태로 즉, 절차적으로 사용할 수 있다.

```javascript
// async - 비동기 함수임을 명시
// 함수의 내부에서 동기적인 코드를 작성할 수 있다.
async function fetchFruits() {
	// Promise를 리턴하는 함수를 호출할 때 await 키워드를 사용하여 기다린 후
	// Promise의 값이 resolve가 되면 값을 변수에 반환한다.
	const banana = await getBanana();
	const apple = await getApple();
	return [banana, apple];
}

// 배열값을 resolve하는 Promise가 만들어진다.
// 즉, Promise를 리턴한다.
fetchFruits().then(console.log);
```

## 16.12 JSON 이란?

JSON (JavaScript Object Notation)

- 서버와 클라이언트(브라우저, 모바일) 간의 HTTP 통신을 위한 오브젝트 형태의 텍스트 포맷
- stringify(object) => JSON
- parse(JSON) => object

```javascript
const ellie = {
	name: 'ellie',
	age: 20,
	eat: () => {
		console.log('eat');
	},
};

// 직렬화 (Serializing) - 객체를 문자열로 변환하는 것
const json = JSON.stringify(ellie);
console.log(ellie);
console.log(json);

// 역직렬화 (Deserializing) - 문자열 데이터를 자바스크립트 객체로 변환
const object = JSON.parse(json);
console.log(object);
```

## 16.13 네트워크 통신 사용해보기

브라우저 API - fetch()  
MDN 참고자료 : References > Web APIs > fetch()  
<https://developer.mozilla.org/en-US/docs/Web/API/fetch>

## timeout Quiz

- 주어진 seconds(초)가 지나면 callback 함수를 호출한다.
- 단, seconds가 0보다 작으면 에러 발생

```javascript
// callback, seconds 파라미터의 다양한 에러발생 가능성에 대해 생각하며 코딩하기

function runInDelay(callback, seconds) {
	if (seconds < 0) throw new Error('seconds가 0보다 작습니다.');
	const timeCalc = seconds * 1000;
	setTimeout(callback, timeCalc);
}

try {
	runInDelay(() => console.log('callback 함수 실행'), 3);
} catch (err) {
	console.log(err);
}

// ------------------------------

function runInDelay2(callback, seconds) {
	if (!callback) {
		throw new Error('callback 함수를 전달 해야 한다.');
	}
	if (!seconds || seconds < 0) {
		throw new Error('seconds는 0보다 커야 한다.');
	}
	setTimeout(callback, seconds * 1000);
}

try {
	runInDelay2(() => {
		console.log('타이머 완료.');
	}, 2);
} catch (error) {}
```

## async Quiz

```javascript
function fetchEgg(chicken) {
	return Promise.resolve(`${chicken} => 달걀`);
}
function fryEgg(egg) {
	return Promise.resolve(`${egg} => 달걀 후라이`);
}
function getChicken() {
	// return Promise.resolve(`정원 => 닭`);
	return Promise.reject(new Error('닭을 가지고 올 수 없습니다.'));
}

async function getResult() {
	let chicken = '';

	try {
		chicken = await getChicken();
	} catch (error) {
		chicken = '닭2';
	}

	const egg = await fetchEgg(chicken);
	const friedEgg = await fryEgg(egg);
	return friedEgg;
}
getResult().then(console.log);
```
