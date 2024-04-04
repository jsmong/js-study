## 새로 알게된 것 & 잊고 있던것 정리

## 2. arithmetic.js

- 산술연산자
- 거듭제곱 볼때마다 새로움

```jsx
// ** 지수연산자 (거듭제곱)
console.log(5 ** 2); // es7
console.log(Math.pow(5, 2)); // es7 이전 거듭제곱
```

## 3. unary.js

- 단항연산자
- ! 이용하여 true, false 판별 가능하듯이 + 이용해 숫자로 변환해준다

```jsx
// 숫자가 아닌 타입들을 숫자로 변환하면 어떤 값이 나오는지 확인 할 수 있음
console.log(+false); // 0
console.log(+null); // 0
console.log(+""); // 0
console.log(+true); // 1
console.log(+"text"); // NaN
console.log(+undefined); // NaN
```

## 5. incresement.js

- 증감연산자
- ++a, a++ 인지에 따라 증감 연산의 순서가 달라진다!

```jsx
// a++  필요한 연산을 하고, 그 뒤 값을 증가 시킴
// ++a  값을 먼저 증가하고 필요한 연산을 함

a = 0;
let b = a++; // 1. b = a (0) 먼저 할당  ->  2. a + 1;
console.log(b); // 0
console.log(a); // 1

c = 0;
let d = ++c; // 1. c++ 먼저 진행; 2. d = c (1)할당
console.log(d); // 1
console.log(c); // 1
```

## 7. priority.js

- 우선순위
- ++어디있는지에 따라 우선순위 달라져~

```jsx
result = a++ + b * 4; // 2 + 3 * 4 -> a = 3
console.log(result); // 14  / a = 3
```

## 8. equality.js

- object를 저장하는 메모리에는 object값이 아니라, 메모리 주소를 저장한다!
- 이로 인해 object끼리 비교를 하거나, copy 할때 결과가 어케 변화하는지 예제를 잘 보자

```jsx
// obeject 비교하기
const obj1 = {
  name: "js",
};
const obj2 = {
  name: "js",
};
console.log(obj1 == obj2); // false : 메모리 주소값이 다르자네~
console.log(obj1 === obj2); // false
console.log(obj1.name == obj2.name); // true
console.log(obj1.name === obj2.name); // true

let obj3 = obj2; // 동일한 메모리 주소를 가지고 있어~
console.log(obj2 == obj3); // true
console.log(obj2 === obj3); // true
```
