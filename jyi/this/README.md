# this

## this 바인딩
- 자바스크립트와 타입스크립트에서는 this 바인딩이 런타임 상에서 동적으로 결정된다.
- 전역 공간에서의 this (전역 객체를 가리킴)

```javascript
const x = 0;
module.exports.x = x;
console.log(this); // { x: 0} 
```
  
||this|globalThis|
|---|---|---|
|브라우저|window 객체|window 객체|
|Node.js|모듈|global 객체|

## 동적바인딩

## 동적바인딩의 문제점

## 정적바인딩(명시적으로 this를 바인딩하는 방법)
