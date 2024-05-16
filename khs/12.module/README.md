# 1. 주석

- 주석은 코드 자체를 설명하는 것이 아니라, 필요한 경우에만 왜, 어떻게를 설명하는 것이 좋음

- 외부에서 많이 쓰이는 함수 API인 경우 JSDoc 활용

```javascript
/**
 * 주어진 두 인자를 더한 값을 반환함
 * @param {*} a 숫자 1
 * @param {*} b 숫자 2
 * @returns a와 b를 더한 값
 */
const add = (a, b) => a + b;
```

<br /><br />

# 2. 에러 핸들링

```javascript
// * try-catch로 리팩토링
const newReadFile = (path) => {
  if (!path) throw new Error('파일의 경로를 찾을 수 없음');
  return '파일의 내용';
};

const newProcessFile = (path) => {
  let content;
  try {
    content = newReadFile(path);
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
    content = '기본 내용';
  } finally {
    console.log('성공, 실패 여부 상관 없이 마지막으로 리소스 정리 가능');
  }
  const result = 'hi' + content;
  return result;
};

console.log(newProcessFile());
```

<br /><br />

# 3. 에러 버블링

```javascript
// * bubbling up, Propgating
const a = () => {
  throw new Error('error!');
};

const b = () => a();

const c = () => b();

try {
  c();
} catch (error) {
  // 에러가 전파된 것을 확인할 수 있음!
  // 어디서 에러를 핸들링할건지 정해야 함
  console.log('catched!');
}

console.log('--- done ---');

```

<br /><br />

# 4. 모듈

| 항목 | export |	export default |
| :---: | :---: | :---: |
| 수량	| 여러 개의 값을 내보낼 수 있음	| 모듈당 하나의 값만 내보낼 수 있음 |
| 내보낼 수 있는 항목	| 변수, 함수, 클래스 등 다양함 |	변수, 함수, 클래스 등 다양함 |
| 임포트 방식	| 중괄호 {}를 사용하여 임포트	| 중괄호 없이 임의의 이름으로 임포트 |
| 임포트 예시	| import { name, greet } from './module';	| import myFunction from './module'; |
| 주요 용도	| 여러 기능이나 값을 내보낼 때 사용	| 모듈의 주요 기능이나 값을 내보낼 때 사용 |
| 기타 특징	| 이름이 정해져 있어야 함	| 이름을 임포트 시 결정할 수 있음 |