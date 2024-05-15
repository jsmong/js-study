# 15. 주석, 에러처리, 모듈

## 15.1 주석 처리 하는 법

주석은 코드 자체를 설명하는 것이 아닌 왜(WHY), 어떻게(HOW)를 설명하는 것이 좋은 주석  
(단, 정말 필요한 경우에만 사용)

### JSDoc

- 외부에서 많이 쓰이는 함수 api의 경우 JSDoc을 사용하면 좋다.
- 문서로 변환이 가능하다.
- 공식 문서 사이트 : <https://jsdoc.app/>

```javascript
/**
 * 함수에 대한 설명
 * @param {*} a 인자에 대한 설명
 * @param {*} b 인자에 대한 설명
 * @returns 반환값에 대한 설명
 */
function add(a, b) {
	return a + b;
}
```

## 15.2 에러 처리

### try catch finally

```javascript
function readFile(path) {
	throw new Error('파일 경로를 찾을 수 없습니다.'); // 에러 강제 발생
	return '파일의 내용';
}

function processFile(path) {
	let content;
	try {
		content = readFile(path);
	} catch (error) {
		// 에러에 대한 처리
		console.log(error);
		content = '기본 내용';
	} finally {
		console.log('성공, 실패 모든 경우 마지막으로 리소스를 정리할 수 있다.');
	}
	const result = 'hi ' + content;
	return result;
}

const result = processFile('경로');
console.log(result);
```

## 15.3 에러 버블링

Bubbling up, Propagating (에러 전파)  
최종적으로 호출한 함수에서 error catch가 가능하다.

```javascript
function a() {
	throw new Error('error!');
}

function b() {
	try {
		a();
	} catch (error) {
		console.log('상황에 따라 에러 처리 또는 전달');
		throw error;
	}
}

function c() {
	b();
}

try {
	c();
} catch (error) {
	console.log('Catched!');
}
console.log('done!');
```

## 15.4 모듈 작성 법

자바스크립트 파일별 캡슐화 적용

index.html

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Document</title>

		<!-- type="module" -->
		<script type="module" src="counter.js"></script>
		<script type="module" src="main.js"></script>
	</head>

	<body></body>
</html>
```

counter.js

```javascript
// export default : 모듈에서 하나만 노출 가능
// export : 모듈에서 여러개 노출 가능

let count = 0;

export function increase() {
	count++;
	console.log(count);
}

export function getCount() {
	return count;
}
```

main.js

```javascript
// export default : 사용하는 이름의 변경 가능
// import increase from './counter.js';
// increase();

// export : 사용하는 이름 그대로 사용
// import { increase, getCount } from './counter.js';
// increase();

// export : as를 사용하여 이름 변경
// import { increase as increase1 } from './counter.js';
// increase1();

// 그룹화 사용
import * as counter from './counter.js';

counter.increase();
counter.increase();
counter.increase();
const count = counter.getCount();
console.log('count : ', count);
```
