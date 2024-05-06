# 13. Map과 Set

## 13.1 공부할 포인트

배열

- index 기반으로 데이터 저장 (순서 중요)
- index 기반의 자료구조 구현 가능 (큐)
- 중복 가능

## 13.2 Set과 함수들

### Set 자료구조

- 데이터 집합체
- 순서 없음 (index 없음)
- 중복 불가능

### Set 생성

```javascript
const set = new Set([1, 2, 3]);
console.log(set);
```

### Set 함수

```javascript
// 사이즈 확인
console.log(set.size);

// 존재하는지 확인
console.log(set.has(2));
console.log(set.has(5));

// 순회
set.forEach((item) => console.log(item));
for (const value of set.values()) {
	console.log(value);
}

// 아이템 추가
set.add(7);
console.log(set);
set.add(7);
console.log(set); // 무시 - 중복 불가능

// 아이템 삭제
set.delete(7);
console.log(set);

// 모두 삭제
set.clear();
console.log(set);
```

### Object Set

```javascript
// Object Set
const obj1 = { name: '사과', price: 8 };
const obj2 = { name: '바나나', price: 5 };
const objs = new Set([obj1, obj2]);
console.log(objs);

// 퀴즈
obj1.price = 10;
objs.add(obj1);
console.log(objs);
// 땡! { { name: '사과', price: 8 }, { name: '바나나', price: 5 }, { name: '사과', price: 10 } }
// 정답 { { name: '사과', price: 10 }, { name: '바나나', price: 5 } }
// -> 동일한 주소값 (Object의 얕은 복사)

// 퀴즈
const obj3 = { name: '바나나', price: 5 };
objs.add(obj3);
console.log(objs);
// 정답~ { { name: '사과', price: 10 }, { name: '바나나', price: 5 }, ,{ name: '바나나', price: 5 } }
// -> 메모리의 참조 주소값이 다르기 때문에
obj3.price = 8;
console.log(objs);
```

## 13.3 Map과 함수들

### Map 자료구조

- 키와 값으로 이루어진 자료구조 [키, 값]
- 순서 없음
- 유일한 키 사용
- 중복 가능

### Map 생성

```javascript
const map = new Map([
	['key1', '사과'],
	['key2', '바나나'],
]);
console.log(map);
```

### Map 함수

```javascript
// 사이즈 확인
console.log(map.size);

// 존재하는지 확인
console.log(map.has('key1'));
console.log(map.has('key5'));

// 순회
map.forEach((value, key) => {
	console.log(key, value);
});
console.log(map.keys());
console.log(map.values());
console.log(map.entries());

// 찾기
console.log(map.get('key1'));
console.log(map.get('key2'));
console.log(map.get('key5'));

// 추가
map.set('key3', '키위');
console.log(map);

// 삭제
map.delete('key3');
console.log(map);

// 모두 삭제
map.clear();
console.log(map);
```

### Object와의 차이점

```javascript
// Object와의 큰 차이점
const key = { name: 'milk', price: 10 };
const milk = { name: 'milk', price: 10, description: '맛있는 우유' };

// Object
const obj = {
	[key]: milk,
};
console.log(obj);

// Map
const map2 = new Map([[key, milk]]);
console.log(map2);

// 차이점
console.log(obj[key]); // key를 사용한 동적 접근 가능
console.log(map2[key]); // undefined
console.log(map2.get(key));
```

## 13.6 심볼, 데이터 타입 마지막

Symbol

- 유일한 값, 유일한 키

원시타입

```javascript
const map = new Map();

const key1 = 'key';
const key2 = 'key';
map.set(key1, 'Hello');
console.log(map.get(key2));
console.log(key1 === key2); // true
```

Symbol

```javascript
// 문자열이 같아도 서로 다른 유일한 키를 생성
const key1 = Symbol('key');
const key2 = Symbol('key');
map.set(key1, 'Hello');
console.log(map.get(key2)); // undefined
console.log(key1 === key2); // false

// 동일한 문자열로 하나의 키를 사용하고 싶을 경우, Symbol.for 사용
// 전역 심벌 레지스트리 (Global Symbol Registry)
const k1 = Symbol.for('key');
const k2 = Symbol.for('key');
console.log(k1 === k2); // true

// Symbol의 문자열 정보
console.log(Symbol.keyFor(k1));
console.log(Symbol.keyFor(key1)); // undefined -> 레지스트리 보관 X
```

Object 사용 예제

```javascript
const obj = { [k1]: 'Hello', [Symbol('key')]: 1 };
console.log(obj);
console.log(obj[k1]);
console.log(obj[Symbol('key')]);
```

## Quiz

주어진 배열에서 중복을 제거하기

```javascript
const fruits = ['바나나', '사과', '포도', '바나나', '사과', '복숭아'];
// -> ['바나나', '사과', '포도', '복숭아']

const setFruits = new Set();
fruits.forEach((item) => {
	setFruits.add(item);
});
console.log('setFruits: ', setFruits);
```

주어진 두 세트의 공통된 아이템만 담고 있는 세트 만들기

```javascript
const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([1, 2, 3]);
// -> [1, 2, 3]

const newSet = new Set();
set1.forEach((item) => {
	if (set2.has(item)) {
		newSet.add(item);
	}
});
console.log('newSet: ', newSet);
```
