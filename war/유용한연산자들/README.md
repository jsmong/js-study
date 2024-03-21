# 14. 유용한 연산자들

## 14.2 로지컬 연산자 활용 편

- 논리 연산자의 단축평가(short-circuit evaluation)
  - 조건이 truthy일 때 && 무언가를 해야 할 경우
  - 조건이 falshy일 때 || 무언가를 해야 할 경우

```javascript
const obj1 = { name: '강아지' };
const obj2 = { name: '고양이', owner: 'Ellie' };

if (obj1 && obj2) {
	console.log('둘다 true');
}

// 조건문 밖에서 사용시 단축평가
let result = obj1 && obj2;
console.log(result);

result = obj1 || obj2;
console.log(result);
```

- && (and) 연산자 활용예제 : null 또는 undefined인 경우를 확인할 때

```javascript
let item; // = { price: 1 };
const price = item && item.price;
console.log(price);
```

- || (or) 연산자 활용예제 : 기본값을 설정할 때
  - default parameter
    - 파라미터를 전달하지 않거나, undefined일 경우에만 기본값 설정
    - 0, null, ''의 경우 그대로 출력 (기본값 설정 X)
  - || (or)
    - 값이 falshy한 경우 모두 설정(할당) : 0, -0, null, undefined, ''

```javascript
function print(message) {
	const text = message || 'Hello';
	console.log(text);
}
print();
print(0);
print(-0);
print(null);
print(undefined);
print('');
```

## 14.3 옵셔널 체이닝

- ?. (옵셔널 체이닝) 연산자 활용예제 : null 또는 undefined인 경우를 확인할 때

```javascript
let item; // = { price: 1 };
// const price = item && item.price;
const price = item?.price;
console.log(price);

console.log('------------------------------');

let obj = { name: '강아지', owner: { name: '엘리' } };
function printName(obj) {
	// const ownerName = obj && obj.owner && obj.owner.name;
	const ownerName = obj?.owner?.name;
	console.log(ownerName);
}
printName(obj);
```

## 14.4 null 체크하는 깔끔한 법

- ??
  - null, undefined일 경우에만 설정
- || (or)
  - 값이 falshy한 경우 모두 설정(할당) : 0, -0, null, undefined, ''

```
let num = 0;
console.log(num || '-1');
console.log(num ?? '-1');
```

## 회고

- 강의를 듣고 느낀점 작성하기
