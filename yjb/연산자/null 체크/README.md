# null 병합 연산자(??)와 논리 OR 연산자(||)의 차이

> || 연산자는 falshy한 값을 체크하는 반면 ?? 연산자는 null, undefined만 체크

```javascript
const variable = null; // null, undefined, false, 0, '' 등 falshy한 값
const value = variable || 'default value';
console.log(value); // "default value"
```

```javascript
const variable = null; // null, undefined만
const value = variable ?? 'default value';
console.log(value); // "default value"
```

## Quiz

다음에 출력되는 value의 값은?

```javascript
const variable = {};
const value = variable || 'default value';
console.log(value); // ?
```
