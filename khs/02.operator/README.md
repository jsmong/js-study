# 1. expression.js

```javascript
let b;  // 선언문
b = 2;  // 표현식, 할당문
let a = (b = 2);
console.log(a);
```

<br /><br />

# 2. arithmetic.js

- \+ 더하기

- \- 빼기

- \* 곱하기

- \/ 나누기

- \% 나머지값

- \** 지수 (거듭제곱)

<br /><br />

# 3. unary.js

- \+ (양)

- \- (음)

- \! (부정)

<br /><br />

# 4. assignment.js

```javascript
let a = 1;
a = a + 2;
a += 2;     // a = a + 2; 축약버전
```

<br /><br />

# 5. increment.js

- 전위 ++n: 값을 먼저 증가하고, 필요한 연산을 함

- 후위 n++: 필요한 연산을 하고, 그 뒤에 값을 증가시킴

<br /><br />

# 6. relational.js

- \> 크다

- \< 작다

- \>= 크거나 같다

- \<= 작거나 같다

<br /><br />

# 7. equality.js

- \== 값이 같음

- \!= 값이 다름

- \=== 값과 타입이 둘 다 같음

- \!== 값과 타입이 다름

```javascript
console.log(2 == 2);        // true
console.log(2 != 2);        // false
console.log(2 != 3);        // true
console.log(2 == 3);        // false
console.log(2 == '2');      // true: 타입은 다르지만 숫자가 같기 때문에
console.log(2 === '2');     // false: 숫자가 같아도 타입이 다르기 때문에
console.log(true == 1);     // true
console.log(true === 1);    // false
console.log(false == 0);    // true
console.log(false === 0);   // false

const obj1 = {
    name: 'hs',
}
const obj2 = {
    name: 'hs',
}
console.log(obj1 == obj2);   // false: 두 object의 메모리 주소가 다르기 때문에
console.log(obj1 === obj2);  // false
console.log(obj1.name == obj2.name);   // true
console.log(obj1.name === obj2.name);  // true

let obj3 = obj2;
console.log(obj3 == obj2);   // true: 둘은 같은 주소값을 가지고 있기 때문에
console.log(obj3 === obj2);  // true
```
