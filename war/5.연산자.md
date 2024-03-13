# 5. 연산자

## 5.2 값으로 평가될 수 있는 것들?

- 리터럴(Literal) : 코드에서 값을 나타내는 표기법
- 표현식(Expressions) : 값으로 평가될 수 있는 문

## 5.3 산술 연산자

- 지수 연산자 (거듭제곱)

```javascript
// ** 지수 (거듭제곱)
console.log(5 ** 2); // es7 추가
console.log(Math.pow(5, 2));
```

- +연산자 주의점

```javascript
// + 연산자 주의점
let text = '두개의' + '문자를';
console.log(text);
text = '1' + 1; // 숫자와 문자열을 더하면 문자열로 변환
console.log(text);
```

## 5.4 단항 연산자

- 부정 연산자

```javascript
// ! 를 한번만 사용하면 부정연산자
// !! 를 사용해서 불리언이 아닌 타입들을 불리언으로 변환할 수 있다.
console.log(!!1);
```

- +연산자

```javascript
// + 연산자를 사용해서 숫자가 아닌 타입들을 숫자로 변환할 경우
// 어떤값이 나오는지 확인이 가능
console.log(+false); // 0
console.log(+null); // 0
console.log(+''); // 0

console.log(+true); // 1
console.log(+'text'); // NaN
console.log(+undefined); // NaN
```

## 5.6 증감 연산자

- 증감 연산자의 위치

```javascript
// a++ 필요한 연산을 하고, 그 뒤 값을 증가 시킨다.
// ++a 값을 먼저 증가하고, 필요한 연산을 한다.
a = 0;
console.log(a++); // 0
console.log(a); // 1

let b = a++;
console.log(b); // 1
console.log(a); // 2

b = ++a;
console.log(b); // 3
console.log(a); // 3
```

## 5.9 동등 비교 연산자

```javascript
// 동등 비교 관계 연산자 (Equality operators)
// == 값이 같음
// != 값이 다름
// === 값과 타입이 둘 다 같음
// !== 값과 타입이 다름
console.log(2 == 2);
console.log(2 != 2);
console.log(2 != 3);
console.log(2 == 3);

console.log(2 == '2');
console.log(2 === '2'); // 권장 사용

console.log(true == 1);
console.log(true === 1);
console.log(false == 0);
console.log(false === 0);

console.clear();

const obj1 = {
	name: 'js',
};
const obj2 = {
	name: 'js',
};
console.log(obj1 == obj2);
console.log(obj1 === obj2);
console.log(obj1.name == obj2.name);
console.log(obj1.name === obj2.name);

let obj3 = obj2;
console.log(obj3 == obj2);
console.log(obj3 === obj2);
```
