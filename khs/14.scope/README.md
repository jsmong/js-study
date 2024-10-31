# 실행 컨텍스트

## 실행 컨텍스트란?

- 코드를 실행하는데 필요한 배경이 되는 조건/환경

- 자바스크립트의 독립된 코드 뭉치가 곧 함수이며, 자바스크립트는 오직 함수에 의해서만 컨텍스트를 구분할 수 있음

- 결국 실행 컨텍스트란, 함수를 실행할 때 필요한 조건, 환경 정보를 담은 객체

<br />

## 실행 컨텍스트에 들어가는 세 가지 환경 정보

1. 식별자 정보 수집
   
2. 각 식별자의 데이터 추적
   
3. this 바인딩

<br /><br />

# 스코프

## 스코프란?

- 스코프는 변수의 유효범위 ([참고] 변수의 유효범위는 실행 컨텍스트가 만드는 것)

- 왜냐하면 실행 컨텍스트가 수집해둔 정보에만 접근할 수 있고, 그 변수는 실행 컨텍스트 내부에만 존재를 하기 때문

<br />

# 스코프 체인이란?

- 가장 가까운 자기 자신부터 점점 멀리 있는 스코프로 찾아나가는 것
  
- 이때, 외부로는 나갈 수 있으나 자기보다 더 안쪽으로는 들어갈 수 없음

<br />

# 스코프 체인의 구성 요소

1. 전역 스코프

2. 함수 스코프

3. 블록 스코프

<br />

# 스코프 체인의 동작 방식

1. 자바스크립트는 먼저 현재 스코프에서 해당 변수를 찾음

2. 만약 변수가 해당 스코프에 없다면, 바로 상위 스코프로 이동해 변수를 검색함

3. 이 과정은 전역 스코프까지 이어지며, 변수가 발견되면 그 값을 반환하고, 발견되지 않으면 undefined 또는 ReferenceError가 발생함

<br /><br />

# var, let과 스코프

![스코프 예시 이미지](https://github-production-user-asset-6210df.s3.amazonaws.com/84097192/382035288-625de7d7-8880-4593-b78e-435494f843cb.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20241031%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241031T163526Z&X-Amz-Expires=300&X-Amz-Signature=8494af2f91f66c8a747db463429c55dc535e963b898c2b9e85f28bde226be9e9&X-Amz-SignedHeaders=host)

## let 예시 코드

```javascript
let a = 1
function outer() {
    console.log('outer1:', a)
    
    function inner() {
        console.log('inner:', a)
        a = 3
    }
    inner()
    
    console.log('outer2:', a)
}

outer()

console.log('global:', a)


// outer1: 1
// inner: 1
// outer2: 3
// global: 3
```

<br />

## var 예시 코드

```javascript
var b = 1
function outer() {
    console.log('outer1:', b)

    function inner() {
        console.log('inner:', b)
        var b = 3
    }

    inner()

    console.log('outer2:', b)
}

outer()

console.log('global:', b)

// outer1: 1
// inner: undefined (var b 선언의 호이스팅)
// outer2: 1
// global: 1
```
