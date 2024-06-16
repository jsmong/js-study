# 17. 스코프

## 17.2 스코프란?

스코프 (Scope)

- 변수를 참조할 수 있는(접근할 수 있는) 유효한 범위
- 식별자(변수, 함수, 클래스)가 유효한 범위
- 선언된 위치에 따라 유효 범위가 결정된다.
- 블럭 안의 변수는 블럭 안에서만 유효하다. (메모리 절약)
  - 블럭 외부에서는 블럭 내부의 변수를 참조할 수 없다.
  - 함수 외부에서는 함수 내부의 변수를 참조할 수 없다.
  - 함수 외부에서는 함수의 매개변수를 참조할 수 없다.

```javascript
{
	const x = 1;
	{
		const y = 2;
		console.log(x); // 1
	}
	console.log(x); // 1
	// console.log(y); // error
}
```

```javascript
const text = 'global'; // 전역변수, 전역 스코프 (글로벌 변수, 글로벌 스코프)
{
	const text = 'inside block1'; // 지역변수, 지역 스코프 (로컬 변수, 로컬 스코프)
	{
		const text = 'inside block2';
		console.log(text); // 'inside block1' - 가장 근접한 값에 접근
	}
}
```

## 17.4 가비지 컬렉터

가비지 컬렉터 (Garbage Collector)

- 자바스크립트 엔진 백그라운드 프로세스 (CPU 동작 - 비용 발생)

```javascript
// 글로벌 변수는 앱이 종료 될때까지 메모리에 유지된다.
// -> 변수는 필요한 곳에서만 선언해서 사용하기
const global = 1;
{
	// 블럭 내부에서만 존재, 블럭이 끝나면 가비지 컬렉터에 의해 청소된다. (GC)
	const local = 1;
}

function print() {
	// 함수 내부에서도 필요한 곳에서(블럭 안에서) 변수를 선언하고 사용하기
	if (true) {
		let temp = 0;
	}
}
```

## 17.5 렉시컬 환경이란?

실행 컨텍스트 (Execution Context)

- 코드의 실행 순서와 스코프를 기억

각각의 블록은 렉시컬 환경(Lexical Environtment)이라는 내부 오브젝트를 가지고 있다.

- 실행순서와 각각의 블럭에 대한 정보(변수, 부모 관계)를 가지고 있다.
  - 환경 레코드 : 현재 블럭에 해당하는 정보를 담고 있다.
  - 외부 환경 참조 : 부모의 정보를 담고 있다.

```javascript
const a = 1;
{
	const a = 2;
	{
		const a = 3;
	}
}
```

## 17.6 호이스팅 정리

호이스팅 (Hoisting) - 끌어 올리다.  
자바스크립트 엔진이 코드를 실행하기 전 변수, 함수, 클래스의 선언문을 끌어올리는 것을 말한다.  
-> 변수의 선언과 초기화를 분리한 후, 선언만 코드의 최상단으로 옮긴다.

- 함수의 호이스팅은 함수의 선언문 전에 호출이 가능하게 해준다.
- 함수의 선언문은 선언 이전에도 호출이 가능하다.

```javascript
print();
function print() {
	console.log('Hello');
}
```

- 변수(let, const)와 클래스는 선언만 호이스팅이 되고, 초기화는 안된다.
- 초기화 전, 변수에 접근하면 컴파일(빌드) 에러 발생

```javascript
console.log(hi); // error
let hi = 'hi';

let func1 = function () {};

const cat = new Cat(); // error
class Cat {}

let x = 1;
{
	console.log(x);
	let x = 2; // error
}
```

## 17.8 var 변수에 대해서

var의 특징(단점)

- 변수를 선언하는 키워드 없이 선언 & 할당이 가능하다. (선언과 재할당의 구분이 불가능)
- 중복 선언이 가능하다.
- 블록 레벨 스코프가 동작하지 않는다.
- 함수 레벨 스코프만 지원이 가능하다. (정상작동)
