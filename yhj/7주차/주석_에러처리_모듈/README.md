## 주석

```jsx
// : 한 줄 짜리 주석
// TODO: 해야할 일

/**
* 주석은 코드 자체를 설명하는 것이 X
* 왜(Why)와 어떻게(How)를 설명하는 것이 좋음
* (단, 정말 필요한 경우만)
*/

// 외부에서 많이 쓰이는 함수 API인 경우 JSDoc 사용하면 좋음
// 함수 위에서 /** + Enter 시 자동으로 템플릿 주석 입력됨
```

## 에러 핸들링 & 버블링

```jsx
function readFile(path) {
	throw new Error('파일 경로를 찾을 수 없음')
	return '파일 내용' // 에러 발생 시 무시됨
}

function processFile(path) {
	let content
	try {
		content = readFile(path)
	} catch (error) {
		console.log(error.name)
		console.log(error.message)
		console.log(error.stack)
		content = '기본 내용'
	} finally {
		console.log('성공, 실패 여부 관계 없이 마지막에 실행')
	}
	const result = content
	return result
}
```

에러가 발생하면 crash 발생. try~catch 구문을 사용해 앱이 그냥 죽어버리는 것을 방지할 수 있음.

```jsx
function a() {
	throw new Error('error!')
}

function b() {
	a()
}

function c() {
	b()
}

try {
 c()
} catch (error) {
	console.log('catched!')
}
```

에러는 버블링(전파) 되므로 원하는 위치에서 해결할 수 있다.

## 모듈

```html
<script type="module" src="conter.js"></script>
<script type="module" src="main.js"></script>
```

type을 모듈로 지정하면, 파일 간 독립성을 유지할 수 있다.

```jsx
import { increase as increase1 } from './conter.js' // export 사용 시 동일한 이름 사용하거나, as 사용해서 이름 변경 가능
import increase1 from './conter.js' // export default 사용 시 지정 이름 사용 가능
import * as counter from './conter.js' // counter에 구현된 것 모두 가져올 수 있음
```