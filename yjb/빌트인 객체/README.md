## 문자열 Number 타입 변환

#### 문자열에 숫자만 있는 경우

```javascript
const str = '123.45';

parseInt(str); // 123
parseFloat(str); // 123.45
+str; // 123.45
Number(str); // 123.45
```

#### 문자열에 숫자외 문자가 포함된 경우

```javascript
const str = '123.45ab';

parseInt(str); // 123
parseFloat(str); // 123.45
+str; // NaN
Number(str); // NaN
```

## toLocaleString

```javascript
const num = 25500;
num.toLocaleString(); // '25,500'
```

## Quiz

1. 문자열의 모든 캐릭터를 하나씩 출력하라

```javascript
const text = 'Hello World!';
text.split('').forEach((el) => console.log(el));
// H
// e
// l
// l
// o

// W
// o
// r
// l
// d
// !
```

2. 사용자들의 id를 잘라내어 각각의 id를 배열로 보관

```javascript
const ids = 'user1, user2, user3, user4';
console.log(ids.split(', '));
// ['user1', 'user2', 'user3', 'user4']
```

3. 1초에 한번씩 시계를 (날짜포함) 출력해보자

```javascript
const offset = 1000 * 60 * 60 * 9;
setInterval(() => {
  const date = new Date(new Date().getTime() + offset);
  console.log(date.toLocaleString('ko-KR', { timeZone: 'UTC' }));
}, 1000);
```

```javascript
setInterval(() => {
  console.log(new Date().toLocaleString('ko-KR'));
}, 1000);
```
