# 1. expression.js

- if(조건) { }

- if(조건) { } else { }

- if(조건1) { } else if(조건2) { } else { }

<br /><br />

# 2. ternary.js

- 삼항연산자: 조건식 ? 참인경우 : 거짓인경우

<br /><br />

# 3. switch.js

```javascript
// switch의 else -> default
let fruit = 'tree'; // okay, good -> 좋음!, bad -> 나쁨
switch (condition) {
  case 'apple':
  case 'peach':
    fruit = '과일'
    break;
  case 'lettus':
		fruit = '야채'
    break;
    default:
    console.log('과일도 아니고 야채도 아님!')
}
console.log(fruit);
```

<br /><br />

# 4. for.js

- 반복문 for 실행 순서

	1. 변수선언문을 실행해 변수를 초기화

	2. 조건식의 값이 참이면 { } 코드블럭을 수행

	3. 증감식을 수행

	4. 조건식이 거짓이 될 때까지 2번과 3번을 반복함

- 조건을 영원히 true로 작성해버리면 무한루프가 발생할 수 있음

- 반복문 제어: continue, brake

<br /><br />

# 5. while.js

- while(조건) { }

- 조건이 false가 될때까지 { } 코드를 반복 실행

<br /><br />

# 6. logical.js

- && And 그리고

- || Or 또는

- ! 부정 (단항연산자에서 온 것)

- !! 불리언값으로 변환 (단항연산자 응용 버전)
