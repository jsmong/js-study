## 새로 알게된 것 & 잊고 있던것 정리

## 1.if.js

- false로 평가 되는 값, true로 평가되는 값 다시 확인할수 있었음.

```jsx
// 0 , '', null, undefined -> false
// 1, 'string', 2>1, ... -> true
if (undefined) {
  console.log("출력되면 안됨");
}
```

## 4.switch.js

- 많이 안써서 쓰는 법 헷갈리는…
- break 사용 중요! 사용하지 않으면 적용 case 부터 끝까지 다 읽어 버림

```jsx
// 조건문 Conditional Statement
// switch
// 정해진 범위 안의 값에 대해 특정한 일을 수행해야 하는 경우
let day = 10; // 0: 월요일, 1: 화요일 ... 6: 일요일
switch (day) {
  case 0:
    dayname = "월요일";
    break; // 걸어줘야 뒤에꺼 실행하지 않아줘~
  case 1:
    dayname = "화요일";
    break;
  case 2:
    dayname = "수요일";
    break;
  case 3:
    dayname = "목요일";
    break;
  case 4:
    dayname = "금요일";
    break;
  case 5:
    dayname = "토요일";
    break;
  case 6:
    dayname = "일요일";
    break;
  default: // else와 같이 default 지정 가능
    dayname = "해당하는 요일이 없음!";
}
console.log(dayname);

let condition = "okay"; // okay, good -> 좋음, bad -> 나쁨
switch (condition) {
  case "okay": // or은 이런식으로 표현
  case "good":
    console.log("좋음");
    break;

  case "bad":
    console.log("나쁨");
    break;
}
```

## 5. for.js

- 진행 순서 다시한번 확인했음.
- a++ vs ++a 의 실행순서 차이 기억하기

```jsx
// 반목문 Loop Statement
// for(반복선언문; 조건식; 증감식) {}
// 실행순서:
// 1. 변수 선언문
// 2. 조건식의 값이 참이면 {}  코드블럭 수행
// 3. 증감식 수행
// 4. 조건식이 거짓이 될때 까지 2번 3번 반복함

// 반복문 제어 : continue, break
for (let i = 0; i < 20; i++) {
  if (i === 10) {
    // continue; // 이후 코드 무시, 바로 다음 반복으로 이동
    console.log("드디어 10 !!");
    // break; // 반복문 중지
  }
  console.log(i);
}
```

## 6. while.js

- 자주 안써서 항상 헷갈리는… 222
- while 문안에 탈출조건 반드시 적어줘야함! → 안적어주면 무한 루프 지옥

```jsx
// while(조건) {}
// 조건이 false 가 될 때까지 {} 코드를 반복 실행
let num = 5;
while (num >= 0) {
  console.log(num);
  num--;
}

let isActive = true;
let i = 0;

while (isActive) {
  // 조건이 맞을떄만 실행
  console.log(i, "아직 살아 있음!");
  if (i == 10) {
    break;
  }
  i++;
}

isActive = false;
do {
  // 무조건 실행
  console.log("do-while 아직 살아 있음!");
} while (isActive);
```
