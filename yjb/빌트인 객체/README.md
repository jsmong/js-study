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

## encodeURI VS encodeURIComponent

`encodeURI`: 영문자, 0~9의 숫자, ; , / ? : @ & = + $ # - _ . ! ~ \* ' ( ) 를 제외한 문자를 인코딩(이스케이프 처리)  
`encodeURIComponent`: 영문자, 0~9의 숫자 - _ . ! ~ \* ' ( ) 를 제외한 문자를 이스케이프 처리

```javascript
encodeURI("0123abcABC;,/?:@&=+$#-_.!~*'()"); // 0123abcABC;,/?:@&=+$#-_.!~*'()
encodeURIComponent("0123abcABC;,/?:@&=+$#-_.!~*'()"); // 0123abcABC%3B%2C%2F%3F%3A%40%26%3D%2B%24%23-_.!~*'()
```

## eval

절대 사용 x

```javascript
eval('3+5');
eval('alert("hello")');
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

4. Date 객체에서 +1개월하기

```javascript
const date = new Date(2024, 4, 31);
date.setMonth(date.getMonth() + 1);
console.log(date);
```
