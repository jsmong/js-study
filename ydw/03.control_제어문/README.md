# 조건문과 반복문

## 6-1 조건문 (Conditional Statement)

조건문은 주어진 조건에 따라 프로그램의 흐름을 제어하는 데 사용

### if문

```jsx
let fruit = 'orange';
if (fruit === 'apple') {
  console.log('🍎');
} else if (fruit === 'orange') {
  console.log('🍊');
} else {
  console.log('💩');
}
```

## 6-2 삼항 연산자 (Ternary Operator)

삼항 연산자는 조건에 따라 값을 반환하는 간단한 방법

```jsx
let fruit = 'apple';
let emoji = fruit === 'apple' ? '🍎' : '💩';
console.log(emoji);
```

## 6-3 switch 문 (Switch Statement)

switch 문은 특정한 값을 기준으로 여러 가지 경우를 처리할 때 사용

```jsx
let day = 1;
let dayName;

switch (day) {
  case 0:
    dayName = '월요일';
    break;
  case 1:
    dayName = '화요일';
    break;
  default:
    dayName = '해당하는 요일이 없음';
}

console.log(dayName, '🌤️');
```

## 6-4 for 반복문 (for Loop)

for 반복문은 지정된 횟수만큼 코드 블록을 반복 실행할 때 사용

```jsx
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

## 6-5 while 반복문 (while Loop)

while 반복문은 조건이 true인 경우에 코드 블록을 반복 실행

```jsx
let num = 5;
while (num >= 0) {
  console.log(num);
  num--;
}
```

## 6-6 논리 연산자 (Logical Operator)

논리 연산자는 논리적인 조건을 검사하여 true 또는 false를 반환

```jsx
let num = 7;

// && 그리고
if (num >= 0 && num < 9) {
  console.log('＆&');
}

// || 또는
if (num >= 0 || num < 9) {
  console.log('||');
}

// ! 부정
if (num != 9) {
  console.log('!');
}
```
