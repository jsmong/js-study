# Operator

## 1. Operator

### 1. logical.js (논리연산자(&&, ||) 사용한 단축평가)

1. && 이용한 단축평가

- 흐름을 잘 기억하자

```js
let result = obj1 && obj2;
// 1. obj1 은 true로 평가
// 2. obj2 은 true로 평가
// 3. result = obj2로 할당 --> 평가되지 않고 할당된다!!
console.log(result); // obj2 출력
```

2. || 이용한 단축 평가

- 흐름을 잘 기억하자

```js
let result2 = obj1 || obj2;
// 1. obj1 은 true로 평가 --> 뒤에까지 볼 필요 없음
// 2. result2 = obj1 할당
console.log(result2); // obj1 출력
```

3. 활용예 1

- && : 조건이 truthy 일때 && 무언가를 해야 할 경우
- || : 조건이 falshy 일때 || 무언가를 해야할 경우

```js
// 1) 주인이 있는 경우, 주인을 바꿈
function changeOwner(animal) {
  if (!animal.owner) {
    throw new Error('주인이 없음');
  }
  animal.owner = '바뀐주인';
}
// 2) 주인이 없는 경우, 새로운 주인 배정
function makeNewOwner(animal) {
  if (animal.owner) {
    throw new Error('주인이 있음');
  }
  animal.owner = '새로운주인';
}

// obj1.owner true 일때 함수 실행 -> and인데 앞의 조건이 true면 뒤에까지 봐야하니까
obj1.owner && changeOwner(obj1); // { name: '🐶' }
obj2.owner && changeOwner(obj2); // { name: '😺', owner: '바뀐주인' }
console.log(obj1);
console.log(obj2);

// obj1.owner false 일때 함수 실행 -> or 인데 앞의 조건이 false면 뒤에까지 봐야하니까
obj1.owner || makeNewOwner(obj1); // { name: '🐶', owner: '새로운주인' }
obj2.owner || makeNewOwner(obj2); // { name: '😺', owner: '바뀐주인' }
console.log(obj1);
console.log(obj2);
```

4. 활용예 2

- null 또는 undefined 인 경우를 확인할 때

```js
let item;
const price = item && item.price; // item이 있고, true 라면 할당해줘
console.log(price); // undefined

let item2 = { price: 1 };
const price2 = item2 && item2.price; // item이 있고, true 라면 할당해줘
console.log('???', price2); // 1
```

5. 활용예 3

- 기본값 설정
- || 값이 falshy한 경우 설정(할당): 0, -0, null, undefined, ''

```js
function print(message) {
  const text = message || 'Hello'; // message 가 falshy값일때 'Hello'를 할당해줘
  console.log(text);
}
print(); // Hello
print(undefined); // Hello
print(0); // Hello
print(''); // Hello
```

6. 비교 ) default parameter

- 전달하지 않거나, undefined 인 경우만 먹힘 --> null, 0 은 그대로 출력

```js
function print2(message = 'Hi') {
  console.log(message);
}
print2(); // Hi
print2(undefined); // Hi
print2(0); // 0
print2(''); //
```

### 2. optional.js (옵셔널 체이닝 연산자 .?)

1.  null 과 undefined를 확인할 때 사용

```js
let item; // = { price: 1 };
// item이 있고, true 라면 할당해줘
const price = item?.price; // = item && item.price;
console.log(price);
```

```js
let obj = { name: '😺', owner: { name: '현정' } };
function printName(obj) {
  // const ownerName = obj.owner.name; // 이렇게만 대입하면 obj, obj.owner, obj.owner.name 셋중 하나만 없어도 충돌!!

  // && 쓰면..
  // const ownerName = obj && obj.owner && obj.owner.name;

  // 위의 문장을 더욱 간편하게!
  const ownerName = obj?.owner?.name;

  console.log(ownerName);
}
printName(obj);
```

### 3. nullish.js (??)

1. null, nudefined 인 경우만 체크하고싶을때

- cf) || falshy 경우 설정(할당) 0, -0, ''

```js
let num = 0; // false로 간주..!!
console.log(num || '-1'); // -1 --> 0으로 출력되어야해
console.log(num ?? '-1'); // 0 (중요)
```

## 회고

- **단축평가** 간단하고 알고있음 좋은데 **가독성 좋은지 궁금**하다.<br/>
  -> 가끔 가독성 별론가 싶어서 if로 수정할때도 있음
- **옵셔널 체이닝은 실무에서도 많이 사용 가능하겠다** 싶었음. 작업시, 데이터를 object 형태로 가져오는 경우가 많다. 실 코드에서도 미체크로 인해 **데이터 하나 못받아 오면 페이지 전체를 사용 불가능한 경우가 많은데, .? 하나로 멋지게 대처 가능하겠다** <br/>
  -> 그런데 **오브젝트 뎁스가 깊어지면** 잘쓰고 있는건가 싶긴함 .. **this.data?.obj?.list?.subList?.name** .. 이런식으로 다 옵셔널 체이닝 걸어서 쓰는거 맞나요!?
- **nullish ??** 처음 알았다.. 디폴트 숫자를 정의할때 완전 유용할거 같다 <br/>
  ->이렇게 나는 몰랐던 새로운 문법들, 가독성에 대해 고민이있다. 간단하고 완전 좋아보이는데, 모르는 사람이 보면 짐작하기 어려운 코드같아서
