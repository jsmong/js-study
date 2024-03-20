# 연산자(Operators)

## 1. 논리 연산자

- 논리연산자는 논리적인 조건을 평가하고 결과를 반환하는데 사용
- 주요 논리연산자로는 && (그리고), || (또는)가 있으며 단축평가 를 수행하여 코드 실행을 효율적으로 제어함

```jsx
const obj1 = { name: '🐶' };
const obj2 = { name: '🐱', owner: 'Ellie' };

// obj1 또는 obj2 중 하나라도 true일 경우 실행
if (obj1 || obj2) {
  console.log('둘다 true!');
}

// obj2가 result값
let result = obj1 && obj2;
console.log(result); // obj2

// obj1가 result값
result = obj1 || obj2;
console.log(result); // obj1
```

### && 연산자

- && 연산자는 좌항부터 평가하여 좌항이 true일 경우 우항을 반환함,
  주로 조건이 truthy일 때 수행

```jsx
// obj1의 주인이 있을 경우 주인을 변경
obj1.owner && changeOwner(obj1);
obj2.owner && changeOwner(obj2);
```

### || 연산자

- || 연산자는 좌항부터 평가하여 좌항이 false일 경우 우항을 반환함, 주로 조건이 falsy일 때 기본값을 설정하는데 사용

```jsx
// obj1의 주인이 없을 경우 새로운 주인을 만듦
obj1.owner || makeNewOwner(obj1);
obj2.owner || makeNewOwner(obj2);
```

### null 또는 undefined 확인

- 객체의 속성이 null 또는 undefined인 경우를 확인할 때, 단축평가를 활용

```jsx
let item = { price: 1 };
const price = item && item.price;
console.log(price); // 1
```

### 기본값 설정

함수의 매개변수로 전달되지 않거나 undefined로 설정된 경우, 기본값을 설정할 때 활용됩니다.

```jsx
function print(message) {
  const text = message || 'Hello';
  console.log(text);
}

print(); // Hello
print(undefined); // Hello
print(null); // Hello
print(0); // 0
```

## 2. 옵셔널 체이닝

- 옵셔널 체이닝 연산자 ?. 은 ES11(ECMAScript 2020)에서 도입되었으며, null 또는 undefined를 확인하고 접근하는 것을 간소화

```jsx
let obj = { name: '🐶', owner: { name: '엘리' } };

function printName(obj) {
  const ownerName = obj?.owner?.name;
  console.log(ownerName);
}

printName(obj); // 출력: '엘리'
```

## 3. 널체크하는 깔끔한 방법

- 널체크를 깔끔하게 처리하는 방법으로 널리 사용되는 널리시 콜리싱 연산자 ?? 는 ES11(ECMAScript 2020)에서 도입
- 이 연산자는 null 또는 undefined를 확인하고, 해당 값이 아닌 경우에만 대체값을 사용함

```jsx
let num = 0;
console.log(num ?? '-1'); // 출력: 0
```

## 회고

### 1. 로지컬 연산자 활용:

- && 연산자와 || 연산자는 단축 평가를 통해 특정 조건에 따라 코드 실행을 제어하는데 유용!

### 2. 옵셔널 체이닝:

- 옵셔널 체이닝 연산자 ?. 은 null 또는 undefined를 확인하고 접근하는 것을 간소화하여 코드를 가독성있게 작성!

### 3. 체크하는 깔끔한 방법:

- 널체크를 깔끔하게 처리하는 널리시 콜리싱 연산자 ?? 는 코드를 더 간결하게 작성 가능하다!
