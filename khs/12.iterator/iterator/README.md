# 0. 이터러블 관련 개념의 포함관계

- 자바스크립트에서 `반복(iteration)`은 이터러블(iterable)과 이터레이터(iterator)를 기반으로 한다.

<br />

![이터러블 개념 정리](https://github.com/jsmong/js-study/assets/84097192/8c0c3582-9f69-48e9-b8bf-fd8a4678db76)

<br />

# 1. 이터러블 (Iterable)

- 다른 개념들의 `기반`을 이룬다. 모든 이터레이션 프로토콜의 시작점이며, 이터러블은 이터레이터를 생성할 수 있는 반복 가능한 객체이다.

- **[Symbol.iterator]** 라는 메서드를 가지고 있으며, 이 메서드는 이터레이터를 반환하는 역할을 한다.

- 배열이나 문자열과 같은 내장 자료구조뿐만 아니라 직접 만든 객체에도 이터러블을 구현할 수 있음

- ex.

    - 배열은 Symbol.iterator 메서드를 소유하므로, 배열은 이터러블 프로토콜을 준수한 이터러블이다.

    - 일반 객체는 Symbol.iterator 메서드를 소유하지 않으므로, 이터러블 프로토콜을 준수한 이터러블이 아니다.

<br /><br />

# 2. 이터레이터 (Iterator)

- 이 개념은 이터러블의 일부로, 이터러블 객체를 반복할 수 있는 `방법`을 제공한다.

- 이터레이터는 이터러블 객체의 요소에 접근하고, 값을 반환하며, 반복을 관리한다.

- **next()** 메서드를 가지고 있으며, 이 메서드를 호출할 때마다 이터러블 객체 내의 다음값을 반환한다. 더이상 반환할 값이 없으면 **{ value: undefined, done: true }** 를 반환한다.

- ex. Array, String, Map, Set

<br /><br />

# 3. 이터레이션 프로토콜 (Iteration Protocol)

- 이 개념은 이터러블과 이터레이터 간의 `상호 작용 규약`을 나타낸다. (데이터 컬렉션을 순회하기 위한 프로토콜)

- 즉 이터러블이 **Symbol.iterator** 속성을 통해 이터레이터를 반환하고, 이터레이터는 **next()** 메서드를 통해 값들을 순차적으로 반환하는데 사용되는 규약이다.

- 이터레이션 프로토콜을 준수한 객체는 for...of 문으로 순회할 수 있고 spread 문법의 피연산자가 될 수 있다.

<br /><br />

# 4. 이터레이터 프로토콜 (Iterator Protocol)

- 이터레이터가 가져야 하는 동작 규약을 정의한다.

- 이터레이터 프로토콜을 따르는 이터레이터는 **next()** 메서드를 가지고 있어야 하며, **{ value, done }** 형태의 객체를 반환해야 한다.

- value는 현재 값을 나타내고, done은 이터레이터가 끝났는지를 나타낸다.

<br /><br />

# 5. 요약

```javascript
  {
    [Symbol.iterator](): {
      next(): 다음값
    }
  }
```

- 이터러블은 반복 가능한 객체를 정의하고, 이를 통해 이터레이터를 생성한다.

- 이터레이터는 반복을 수행하면서 각 요소에 접근하고 값을 반환한다.

- 이러한 이터러블과 이터레이터의 개념을 통해 자바스크립트에서 배열, 문자열, 집합(set), 맵(map) 등과 같은 다양한 자료구조를 반복하고 조작할 수 있다.

<br /><br />

# 6. 추가로 찾아본 내용 정리

## 1) 객체를 순회하는 Object.entries()

- 객체는 이터러블이 아니므로 for...of 루프를 통해 순회할 수 없다. _(for...of는 이터러블 객체를 순회하는 반복문이다.)_

- 그래서 객체를 이터러블로 만들기 위해서는 아래와 같이 해당 객체에 **[Symbol.iterator]** 메서드를 구현해야 한다.

    ```javascript
    const obj = {
        hansol: '한솔',
        kim: '김',
        [Symbol.iterator]: () => {
            const keys = Object.keys(this); // 객체의 모든 속성 키를 가져옴
            let index = 0; // 현재 인덱스

            // 이터레이터 객체 반환
            return {
                next: () => {
                    // 인덱스가 키의 길이를 초과하면 끝
                    if (index < keys.length) {
                        // 키와 값을 가진 객체 반환
                        return { value: [keys[index], this[keys[index++]]], done: false };
                    } else {
                        // 순회가 끝난 경우
                        return { done: true };
                    }
                }
            };
        }
    };

    // 이제 obj 객체를 for...of 루프로 순회할 수 있음
    for (const [key, value] of obj) {
        console.log(key, value);
    }
    ```

- 그리고 위의 과정을 대신 해주는게 `Object.entires()` 메서드이다.

    - Object.entries() 메서드는 객체의 속성들을 **[key, value]** 의 형태로 반환하므로 위의 코드와 Object.entries() 메서드는 기본적으로 같은 결과를 가져온다.

    - 즉, Object.entries() 메서드 사용 시 객체를 순회 가능한 이터러블로 만들어주는 과정을 간단히 할 수 있는 것이다!

    <br /><br />

## 2) 객체를 for...of와 for...in으로 순회하기

```javascript
const obj = {
    hansol: '한솔',
    kim: '김'
};

for (i of obj) {
    console.log(i);
    // Uncaught TypeError: obj is not iterable 에러 발생
}

for (i in obj) {
    console.log(i);
    // hansol / kim 출력 (객체의 key)
}
```

- `for...of` 루프는 `이터러블 객체를 순회`하는 반복문이다.

- `for...in` 루프는 객체의 `열거 가능한 속성들을 반복`해서 가져온다.

- [참고] 객체의 열거 가능한 속성과 이터러블 속성

    |                    | 열거 가능한 속성 (Enumerable Properties) | 이터러블 속성 (Iterable Properties) |
    |:-------------------:|:-------------------------------------------:|:--------------------------------------:|
    | **정의**           | 객체의 반복 가능한 속성                    | 객체의 순회 가능한 속성               |
    | **접근 방법**      | `for...in` 루프와 같은 반복 구문 사용      | `for...of` 루프와 같은 반복 구문 사용 |
    | **구현 방법**      | 속성의 `enumerable` 속성 설정             | `[Symbol.iterator]` 메서드 구현      |
    | **예시**           | 객체의 직접적인 속성들                    | 이터레이터 객체를 반환하는 함수       |
    | **특징**           | 모든 객체의 속성은 기본적으로 열거 가능   | 모든 이터러블은 열거 가능한 속성이기도 함 |
    | **사용 예시**      | ```for (const key in obj) { ... }```      | ```for (const item of iterable) { ... }``` |


    - **모든 이터러블은 열거 가능한 속성이지만, 모든 열거 가능한 속성이 이터러블은 아니다.**

    - 따라서 객체를 for...in으로 key값을 순회하는 것은 가능하지만, for...of는 불가능한 것!