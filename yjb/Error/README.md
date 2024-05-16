## 에러 처리

기본적으로 에러 처리를 구현하는 방법은 크게 두 가지가 있음.

1. if문, 단축 평가 또는 옵셔널 체이닝을 통해 처리

   ```javascript
   const btn = document.querySelector('button');
   btn.addEventListener(() => {}); // Uncaught TypeError: Cannot read properties of null

   btn?.addEventListener(() => {});
   ```

2. 에러 처리 코드를 미리 등록해두고 에러 발생시 에러 처리 코드로 점프

   ### try ... catch ... finally 문

   ```javascript
   try {
     // 실행할 코드(에러가 발생할 가능성이 있는 코드)
   } catch (err) {
     // try 코드 블록에서 에러가 발생하면 이 코드 블록의 코드가 실행
     // err에는 try 코드 블록에서 발생한 Error 객체가 전달됨
   } finally {
     // 에러 발생과 상관없이 반드시 한 번 실행
   }
   ```

## Error 객체

자바스크립트는 Error 생성자 함수를 포함해 7가지의 에러 객체를 생성할 수 있는 Error 생성자 함수 제공

| 생성자 함수    | 인스턴스                                                                       |
| -------------- | ------------------------------------------------------------------------------ |
| Error          | 일반적 에러 객체                                                               |
| SyntaxError    | 자바스크립트 문법에 맞지 않는 문을 해석할 때 발생하는 에러 객체                |
| ReferenceError | 참조할 수 없는 식별자를 참조했을 때 발생하는 에러 객체                         |
| TypeError      | 피연산자 또는 인수의 데이터 타입이 유효하지 않을 때 발생하는 에러 객체         |
| RangeError     | 숫자값의 허용 범위를 벗어났을 때 발생하는 에러 객체                            |
| URIError       | encodeURI 또는 decodeURI 함수에 부적절한 인수를 전달했을 때 발생하는 에러 객체 |
| EvalError      | eval 함수에서 발생하는 에러 객체                                               |

<br/>

```javascript
 1 @ 1; // Uncaught SyntaxError: Invalid or unexpected token
 foo(); // Uncaught ReferenceError: foo is not defined
 null.foo() // Uncaught TypeError: Cannot read properties of null (reading 'foo')
 new Array(-1) // Uncaught RangeError: Invalid array length
 decodeURIComponent('%') // Uncaught URIError: URI malformed
```
