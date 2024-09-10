# 1. 정의

- JavaScript에서 비동기 작업을 다루는데 사용되는 중요한 기능 중 하나

- Promise는 `비동기 작업의 결과를 나타내는 객체`

- 아래의 세가지 상태를 제공함

  - `pending`: 이제 막 생성되어 아직 결과가 나오지 않은 상태

  - `fulfilled`: 비동기 코드가 성공적으로 수행된 상태

  - `rejected`: 비동기 코드가 실패하거나 에러가 발생한 상태

- 또한 작업이 성공적으로 `완료`되었을 때 또는 `실패`했을 때의 `상태와 결과를 처리하는 방법`을 제공

- 비동기 코드를 더 간결하고 가독성있게 만들어줌

- 콜백 지옥(callback hell)을 피할 수 있는 중요한 개선 사항 중 하나

<br/><br/>

# 2. 특징 및 작동 방식

### 상태(State)

- Promise는 세 가지 상태를 가질 수 있음

  1.  `대기(Pending)` : 초기 상태로 작업이 아직 완료되지 않음

  2.  `이행(Fulfilled)` : 작업이 성공적으로 완료됨

  3.  `거부(Rejected)` : 작업이 실패함

- 상태는 Promise 객체의 `then` 또는 `catch` 메서드를 사용해 처리됨

<br/>

### 값 반환

- Promise는 작업이 완료되면 `값`을 반환

- `성공 시 이행 상태(Fulfilled)에서 값을 반환`하며, `실패 시 거부 상태(Rejected)에서 에러 반환`

<br/>

### 체이닝(Chaining)

- `then` 메서드를 사용해 Promise를 연결할 수 있음

- 이로 인해 여러 비동기 작업을 `순차적`으로 실행하거나 `결과를 처리`할 수 있음

<br/>

### 오류 처리(Error Handling)

- `catch` 메서드를 사용해 Promise에서 발생한 `오류를 처리`할 수 있음

- 오류 처리를 위해 `try...catch` 블록을 사용하는 것보다 효율적

<br/>

<details>
  <summary><b>[참고] Promise에서 try...catch보다 then...catch를 사용하는게 더 효율적인 이유</b></summary><br/>

**📌 then...catch가 더 효율적인 이유** <br/>

1.  `비동기 처리` <br/>

    - `Promise는 비동기 작업`을 다루기 위한 것이며, `try...catch는 동기 코드`에서 발생하는 예외를 처리하는데 사용됨 <br/>
    - 비동기 작업은 예외가 발생할 때 try...catch 블록에서 즉시 처리되지 않고, 비동기 작업이 완료될 때 까지 대기함 <br/>
    - 이로 인해 예외가 무시될 수 있고, 오류 식별 및 처리가 어려워짐 <br/>

2.  `가독성` <br/>

    - catch 메서드를 사용하면 비동기 작업의 오류 처리 코드를 더 명확하게 분리할 수 있음 <br/>
    - 비동기 작업의 실패를 처리하는 부분은 then 메서드와 catch 메서드를 연결하여 작성하므로 코드의 흐름이 더 명확하게 보이며 가독성이 향상됨 <br/>

3.  `중첩 방지` <br/>

    - Promise 체이닝을 통해 여러 개의 비동기 작업 연결 시 catch 메서드를 사용하면 중첩된 try...catch 블록을 작성하지 않아도 됨 <br/>

4.  `단일 오류 처리 지점` <br/>

    - catch 메서드 사용 시 Promise 체인에서 하나의 공통된 오류 처리 지점을 두고 모든 오류를 처리할 수 있음 <br/>
    - 이로써 코드 중복을 줄이고 일관된 오류 처리를 유지할 수 있음 <br/>

5.  `Promise 체이닝` <br/>
    - catch 메서드 사용 시 Promise 체이닝을 이어나가기 쉬움 <br/>
    - 새로운 Promise를 반환하는 작업을 수행하거나 다른 비동기 작업을 연결하기 쉬움 <br/>
    - 또한 catch 메서드를 통해 각 단계에서 오류를 처리할 수 있음 <br/><br/>

**📌 비교 예제** <br/>

`try...catch를 사용한 오류 처리 예제`

```javascript
function asyncTask() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() < 0.5; // 50% 확률로 실패

      if (success) {
        resolve("작업 완료");
      } else {
        throw new Error("작업 실패");
      }
    }, 1000);
  });
}

try {
  asyncTask()
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error("내부 오류:", error.message);
    });
} catch (error) {
  console.error("외부 오류:", error.message);
}
```

 <br/>

`then...catch를 사용한 오류 처리 예제`

```javascript
function asyncTask() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() < 0.5; // 50% 확률로 실패

      if (success) {
        resolve("작업 완료");
      } else {
        reject(new Error("작업 실패"));
      }
    }, 1000);
  });
}

asyncTask()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error("내부 오류:", error.message);
  });
```

 <br/>

- try...catch를 사용한 예제에서는 asyncTask 함수 내부에서 발생한 오류를 외부에서 캐치하려고 시도했지만, `비동기 작업의 오류는 try...catch 블록에서 즉시 처리되지 않음`

- 이로 인해 외부 오류 처리가 동작하지 않고, 오류가 무시될 수 있음

- 반면 then...catch를 사용한 예제에서는 비동기 작업의 오류를 catch 메서드로 쉽게 처리할 수 있음

- catch 메서드는 Promise 체인에서 오류 처리 지점을 명확하게 제공하고, 오류 발생 시 해당 처리 부분으로 이동해 오류를 처리함

- 두 번째 예제에서는 then...catch를 사용해 비동기 작업의 실패를 적절하게 처리하고 오류 메세지를 출력함

- 코드가 더 간결하고 가독성이 높아지며, 비동기 작업의 실패를 쉽게 식별하고 처리할 수 있음

- 따라서 Promise에서는 then...catch 를 사용해 비동기 작업의 오류를 효과적으로 처리하는 것이 좋음

</details>

<br/><br/>

# 3. 예제

```javascript
function asyncTask() {
  return new Promise((resolve, reject) => {
    // 비동기 작업 수행
    const success = true; // 작업이 성공인지 실패인지를 표시

    if (success) {
      resolve("작업 완료"); // 작업이 성공적으로 완료됨
    } else {
      reject("작업 실패"); // 작업이 실패함
    }
  });
}

// Promise를 사용한 비동기 작업 실행
asyncTask()
  .then((result) => {
    console.log(result); // 출력: "작업 완료"
  })
  .catch((error) => {
    console.error(error); // 출력: "작업 실패"
  });
```

- 위의 예제에서 asyncTask 함수가 Promise 함수를 반환하고, 작업의 성공 또는 실패에 따라 상태가 변경됨
