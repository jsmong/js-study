# 11. 배열

## 11.1 자료구조, 배열이란?

자료구조(Data Structure) - 객체의 집합체

- 배열(Array) 자료구조 : index로 데이터 처리

## 11.2 배열 만들기

MDN 참고 : Indexed Collections

- 다양한 데이터 타입 사용 : Array
- 지정된 데이터 타입 사용 : Int8Array, Uint8Array ...

### 배열 생성 방법

1. Array 클래스 사용

```javascript
let array = new Array(3); // 배열의 사이즈 지정
console.log(array);

array = new Array(1, 2, 3); // 배열의 아이템 추가
console.log(array);
```

2. Static 함수 사용

```javascript
array = Array.of(1, 2, 3, 4, 5);
console.log(array);
```

3. 배열 리터럴 사용

```javascript
const anotherArray = [1, 2, 3];
console.log(anotherArray);

array = Array.from(anotherArray); // 배열을 복사하여 생성
array = Array.from('text'); // 순회(iterable)가 가능한 모든것 전달 가능
console.log(array);
```

### 자바스크립트의 배열

- 일반적으로 배열은 동일한 메모리 크기를 가지며, 연속적으로 이어져 있어야 한다.
- 하지만, 자바스크립트의 배열은 연속적으로 이어져있지 않고, Object와 유사하다.
- 자바스크립트의 배열은 일반적인 배열의 동작을 흉내낸 특수한 객체이다.
- 이것을 보완하기 위해 타입이 정해져 있는 타입 배열이 있다. (Typed Collections)

```javascript
array = Array.from({
	0: '안',
	1: '녕',
	length: 2,
});
console.log(array);
```

## 11.3 하면 안되는 것

- index를 사용하여 수동적으로 배열의 아이템 추가하기 (X)

```javascript
const fruits = ['바나나', '사과', '포도', '복숭아'];

fruits[4] = '딸기';
console.log(fruits);
```

- delete 키워드를 사용하여 배열의 아이템 삭제하기 (X)

```javascript
delete fruits[1]; // 삭제한 자리가 남는다.
console.log(fruits);
```

## 11.4 ~ 11.5 사용할 수 있는 함수 파트

배열의 함수들 : [포인트] 배열 자체를 변경하는지, 새로운 배열을 반환하는지

```javascript
const fruits = ['바나나', '사과', '레몬'];

// 특정한 오브젝트가 배열인지 체크
console.log(Array.isArray(fruits));
console.log(Array.isArray({}));

// 특정한 아이템의 위치(index) 찾기
console.log(fruits.indexOf('사과'));

// 배열안에 특정한 아이템이 있는지 체크
console.log(fruits.includes('사과'));
```

### 배열 자체를 수정하는 API

```javascript
// 배열 추가 - 제일 뒤
let length = fruits.push('복숭아'); // 배열 자체를 수정(업데이트), 배열의 길이를 리턴
console.log(fruits);
console.log(length);
// 배열 추가 - 제일 앞
length = fruits.unshift('딸기'); // 배열 자체를 수정(업데이트), 배열의 길이를 리턴
console.log(fruits);
console.log(length);

// 배열 제거 - 제일 뒤
let lastItem = fruits.pop(); // 배열 자체를 수정(업데이트), 제거된 아이템 리턴
console.log(fruits);
console.log(lastItem);
// 배열 제거 - 제일 앞
lastItem = fruits.shift(); // 배열 자체를 수정(업데이트), 제거된 아이템 리턴
console.log(fruits);
console.log(lastItem);

// 중간 아이템 추가, 삭제
const deleted = fruits.splice(1, 1); // 배열 자체를 수정(업데이트), 제거된 아이템이 배열로 리턴
console.log(fruits);
console.log(deleted);
fruits.splice(1, 1, '사과', '딸기');
console.log(fruits);
```

```javascript
// 특정한 값으로 배열을 채우기
arr.fill(0); // 배열 자체를 수정
console.log(arr);

arr.fill('s', 1, 3); // 끝나는 index는 제외 (ex. 1 ~ 2)
console.log(arr);

arr.fill('s', 1); // index 1부터 끝까지 채우기
console.log(arr);
```

### 새로운 배열을 만드는 API

```javascript
// 잘라진 새로운 배열을 만듬
let newArr = fruits.slice(0, 2); // 시작하는 index는 포함, 끝나는 index는 제외 (ex. 0 ~ 1)
console.log(newArr);
console.log(fruits);

newArr = fruits.slice(); // 배열 전체를 리턴
console.log(newArr);

newArr = fruits.slice(1); // index 1부터 끝까지 리턴
console.log(newArr);

newArr = fruits.slice(-1); // 뒤쪽의 index 1부터 끝까지 리턴
console.log(newArr);

// 여러개의 배열을 붙여줌
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
// -> 두개의 배열을 합친 새로운 배열 반환
console.log(arr1);
console.log(arr2);
console.log(arr3);

// 배열의 순서를 거꾸로
const arr4 = arr3.reverse();
console.log(arr4);
console.clear();

// 중첩된 배열을 하나의 배열로 펴기
let arr = [
	[1, 2, 3],
	[4, [5, 6]],
];
console.log(arr);
console.log(arr.flat()); // 1단계의 중첩까지만 펴준다.
console.log(arr.flat(2)); // 단계 지정 (2단계)
arr = arr.flat(2);

// 배열을 문자열로 합하기
let text = arr.join();
console.log(text);

text = arr.join(' | '); // 문자열 지정
console.log(text);
```

## 11.6 메모리 중요한 포인트!

얕은 복사(Shallow Copy) : 객체는 메모리 주소 전달

- 자바스크립트에서 복사할 때 항상 얕은 복사가 이루어진다.
- Array.from, concat, slice, spread(...), Object.assign

## 11.9 고차함수란?

### 함수형 프로그래밍

- 함수 자체를 순수함수로 만들기
  - 함수안에서 불변성을 유지하는 것
  - 데이터 변경 X, 변수 사용 X, 조건문 X, 반복문 X

### 일급함수(first-class function)

함수가 일반 객체처럼 모든 연산이 가능한 것

- 함수의 매개변수로 전달
- 함수의 반환값
- 할당 명령문
- 동일 비교 대상

### 고차함수(Higher-order function)

- 인자로 함수를 받거나(콜백함수)
- 함수를 반환하는 함수를 고차함수

## 11.10 ~ 11.11 고차함수 사용해보기 파트

```javascript
const fruits = ['바나나', '딸기', '포도', '딸기'];

// 배열을 돌면서 원하는 것(콜백함수)을 실행
// 고차함수 - forEach()
fruits.forEach(function (value, index, array) {
	console.log('----------');
	console.log(value);
	console.log(index);
	console.log(array);
});
fruits.forEach((value) => console.log(value));

// 조건에 맞는(콜백함수) 아이템을 찾을 때
// 고차함수 - find()
// 제일 먼저 조건에 맞는 아이템을 반환
const item1 = { name: '우유', price: 2 };
const item2 = { name: '과자', price: 3 };
const item3 = { name: '김밥', price: 1 };
const products = [item1, item2, item3, item2];

let result = products.find((value) => value.name === '과자');
console.log(result);

// findIndex : 제일 먼저 조건에 맞는 아이템의 index 반환
result = products.findIndex((value) => value.name === '과자');
console.log(result);

// 배열의 아이템들이 부분적으로 조건(콜백함수)에 맞는지 확인
result = products.some((item) => item.name === '과자');
console.log(result);

// 배열의 아이템들이 전부 조건(콜백함수)에 맞는지 확인
result = products.every((item) => item.name === '과자');
console.log(result);

// 조건에 맞는 모든 아이템들을 새로운 배열로 반환
result = products.filter((item) => item.name === '과자');
console.log(result);

console.clear();

// Map - 배열의 아이템들을 각각 다른 아이템으로 매핑할 수 있는, 변환해서 새로운 배열 생성
const nums = [1, 2, 3, 4, 5];
result = nums.map((item) => item * 2);
console.log(result);

result = nums.map((item) => {
	if (item % 2 === 0) {
		return item * 2;
	} else {
		return item;
	}
});
console.log(result);

// Flatmap
result = nums.map((item) => [1, 2]);
console.log(result);

result = nums.flatMap((item) => [1, 2]);
console.log(result);

result = ['dream', 'coding'].map((text) => text.split(''));
console.log(result);
result = ['dream', 'coding'].flatMap((text) => text.split(''));
console.log(result);

// sort 배열의 아이템들을 정렬
// 문자열 형태의 오름차순으로 요소를 정렬, 기존의 배열을 변경
const texts = ['hi', 'abc'];
texts.sort();
console.log(texts);

// 숫자 정렬 주의점
const numbers = [0, 5, 4, 2, 1, 10];
numbers.sort();
console.log(numbers);
// < 0 : a가 앞으로 정렬, 오름차순
// > 0 : b가 앞으로 정렬, 내림차순
numbers.sort((a, b) => a - b);
console.log(numbers);

// reduce - 배열의 요소들을 접어서 값을 하나로
result = [1, 2, 3, 4, 5].reduce((sum, value) => (sum += value), 0);
console.log(result);
```

## Quiz 01

```javascript
// 1. 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수 만들기
// 단, 주어진 배열의 수정 X
// input : ['바나나', '딸기', '포도', '딸기']
// output: ['바나나', '키위', '포도', '키위']
function changeFunc(arr) {
	const newArr = Array.from(arr);
	for (let i = 0; i < newArr.length; i++) {
		if (newArr[i] === '딸기') newArr[i] = '키위';
	}

	return newArr;
}

const arr = ['바나나', '딸기', '포도', '딸기'];
console.log('주어진 배열: ', arr);
console.log('output: ', changeFunc(arr));

// 2. 배열과 특정한 요소를 전달받아, 배열안에 그 요소가 몇개 있는지 카운트하는 함수 만들기
// input : ['바나나', '키위', '포도', '키위'], '키위'
// output: 2
function countFunc(arr, item) {
	let count = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === item) {
			count++;
		}
	}
	return count;
}

const arr2 = ['바나나', '키위', '포도', '키위'];
const item2 = '키위';
console.log(countFunc(arr2, item2));

// 3. 배열1, 배열2 두개의 배열을 전달받아, 배열1 아이템 중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input : ['바나나', '키위', '포도'], ['바나나', '딸기', '포도', '딸기']
// output : ['바나나', '포도']
function duplicateFunc(arr1, arr2) {
	const returnArr = [];
	for (let i = 0; i < arr2.length; i++) {
		for (let j = 0; j < arr1.length; j++) {
			if (arr2[i] === arr1[j]) returnArr.push(arr[j]);
		}
	}
	return returnArr;
}

const arr3 = ['바나나', '키위', '포도'];
const arr4 = ['바나나', '딸기', '포도', '딸기'];
console.log(duplicateFunc(arr3, arr4));
```

## Quiz 02 (고차함수)

```javascript
// 1. 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수 만들기
// 단, 주어진 배열의 수정 X
// input : ['바나나', '딸기', '포도', '딸기']
// output: ['바나나', '키위', '포도', '키위']
// [Map 활용]
function changeFunc(arr, from, to) {
	const result = arr.map((item) => {
		if (item === from) return to;
		else return item;
	});
	return result;
}
const arr = ['바나나', '딸기', '포도', '딸기'];
console.log(changeFunc(arr, '딸기', '키위'));
console.log('주어진 배열 : ', arr);

// 2. 배열과 특정한 요소를 전달받아, 배열안에 그 요소가 몇개 있는지 카운트하는 함수 만들기
// input : ['바나나', '키위', '포도', '키위'], '키위'
// output: 2
// [forEach 활용]
function countFunc(arr, item) {
	let count = 0;
	arr.forEach((value) => {
		if (value === item) count++;
	});
	return count;
}
console.log(countFunc(['바나나', '키위', '포도', '키위'], '키위'));

// 3. 배열1, 배열2 두개의 배열을 전달받아, 배열1 아이템 중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input : ['바나나', '키위', '포도'], ['바나나', '딸기', '포도', '딸기']
// output : ['바나나', '포도']
// [forEach 활용]
function duplicateFunc(input, search) {
	const returnArr = [];
	input.forEach((value) => {
		if (search.includes(value)) returnArr.push(value);
	});
	return returnArr;
}
console.log(duplicateFunc(['바나나', '키위', '포도'], ['바나나', '딸기', '포도', '딸기']));

// 4. 5 이상(보다 큰)의 숫자들의 평균
// [reduce 활용]
const nums = [3, 16, 5, 25, 4, 34, 21];
function averageFunc(arr, limit) {
	const newArr = arr.filter((value) => value >= limit);
	const result = newArr.reduce((sum, value) => sum + value, 0);
	return result / newArr.length;
}
console.log(averageFunc(nums, 5));
```
