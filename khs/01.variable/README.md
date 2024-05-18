# 1. variable.js

1. 변수를 선언하면서 할당

    ```javascript
    let a = 0;
    ```

2. 재할당

    ```javascript
    a = 1;
    ```

3. 선언 이후 값 할당
    ```javascript
    let b;
    console.log(b);
    // 이 상태에서 b를 출력하면 undefined가 나온다.
    // 아직 아무것도 정의되어있지 않은 상태이기 때문이다.
    ```

<br /><br />

# 2. naming.js

 - 라틴문자(0-9, a-z, A-Z), _(underscore)

 - 대소문자를 구분함

 - 추천: camelCase Format (likeThis) ✅

 - 한국어 ❌

 - 예약어 ❌

 - 숫자로 시작 ❌

 - 특수문자 ❌ (단, _, $ 두가지는 제외)

 - 이모지 ❌

 - 여러 개의 변수를 1, 2, 3 숫자로 구분 ❌ -> 최대한 의미있게, 구체적인 이름으로 작성
 
 - 마찬가지로 new, old만 붙이는 것도 좋지 않음

```javascript
// 나쁜예제 💩
let audio1;
let audio2;

// 좋은예제 ✨
let backgroundAudio;
let windAudio;

// 꿀팁! 🍯
let audioBackground;
let audioWind;
// -> 이런식으로 뭔지를 먼저 나타내고 구체적인걸 뒤로 빼두면,
//    audio만 쳤을 때 관련된 것들이 한번에 나오기 때문에 찾기가 더 쉽다.
```

<br /><br />

# 3. number.js

- js에서는 숫자 관련된 타입이 세부적으로 나뉘어져있지 않음

- 특정한 숫자를 0으로 나눌 떄 Infinity가 나올 수 있음

    ```javascript
    console.log(0 / 123);       // 0
    console.log(123 / 0);       // Infinity
    console.log(123 / -0);      // -Infinity
    console.log(123 / 'text');  // NaN (Not a Number)
    ```

- bigint : 끝에 n을 붙여서 나타냄(큰 정수를 담고 있다는 의미)

    ```javascript
    let bigInt = 123123123123123123123123123123123123123123123123123123123123123n;
    ```

<br /><br />

# 4. string.js

- 문자열 타입

    ```javascript
    let string = '안녕하세요';
    string = `안녕?`;
    ```
- 특수 문자 출력하기

    ```javascript
    string = '"quote를 문자열로 출력하고 싶으면 외부 따옴표와 반대로"';
    ```

<br /><br />

# 5. boolean.js

- falshy 거짓인 값

    ```javascript
    console.log(!!0);
    console.log(!!-0);
    console.log(!!'');
    console.log(!!null);
    console.log(!!undefined);
    console.log(!!NaN);
    ```

- truthy 참인 값
    ```javascript
    console.log(!!1);
    console.log(!!-1);
    console.log(!!'text');
    console.log(!!{});
    console.log(!!Infinity);
    ```

<br /><br />

# 6. const.js

- let 재할당 가능

- const 재할당 불가능

- 상수는 대문자로 표현하고, 단어 사이는 _로 표현