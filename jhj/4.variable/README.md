## 새로 알게된 것 & 잊고 있던것 정리

## 3. number.js

- 0으로 나눌때 Infinity 값이 나옴!
- 음수를 0으로 나누면 -Infinity

```jsx
console.log(0 / 123); // 0
console.log(123 / 0); // Infinity
console.log(123 / -0); // -Infinity
console.log(123 / "text"); // NaN
```

## 5. boolean.js

- falshy : 0, -0, null, "", undefined, NaN
- truthy : 1, -1, text, {} (빈 object도 truthy임), Infinity

```jsx
// Falshy 거짓인 값
console.log(!!0);
console.log(!!-0);
console.log(!!"");
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);

// Truthy 참인 값
console.log(!!1);
console.log(!!-1);
console.log(!!"text");
console.log(!!{});
console.log(!!Infinity);
```

## 6.empty.js

- null 은 object 타입임!

```jsx
let activeItem; // 아직 활성화된 아이템이 있는지 없는지 모르는 상태
activeItem = null; // 활성화된 아이템이 없는 상태
console.log(typeof null); // object 타입, 메모리에 null이라는 object를 정의함
```

## 8. reference.js

```jsx
// 객체타입은 참조값(메모리주소, 레퍼런스)가 복사되어 전달됨
let apple = {
// apple = 메모리 주소값(0X1234)
name: '사과',
};
let orange = apple; // apple의 메모리 주소값(0X1234)을 할당한것임
[orange.name](http://orange.name/) = '오렌지';
console.log(apple); // { name: '오렌지' }
console.log(orange); // { name: '오렌지' }
```

## 9. const.js

| let   | 재할당 O | 변경 O |
| ----- | -------- | ------ |
| const | 재할당 X | 변경 O |

```jsx
// 2. 재할당 불가능한 상수변수 또는 변수
const apple = {
name: 'apple',
color: 'red',
display: '🍎',
};
// apple = {}; 안된다
console.log(apple);
[apple.name](http://apple.name/) = 'orange'; // 이건 된다
console.log(apple);
// apple의 메모리 주소값은 변경하지 못하지만
// 해당 메모리 주소의 값들은 재할당이 가능하다
```

## 10. typeof.js

```jsx
// 자바스크립트에도 타입이 있긴함
// 다만, 동적으로 결정 + 할당된 값에 따라 타입이 결정된다
```

### ++ 기타

- 터미널로 출력결과 확인하기 >> nodemon 파일명.js
