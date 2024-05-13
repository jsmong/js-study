# 0. 배열의 특징

- primitive type뿐만 아니라 object도 저장 가능

- 인덱스를 기반으로 해서 필요한 데이터를 저장할 수 있음

- 정해진 인덱스에 어떤 아이템을 담는지 연관이 없기 떄문에 중복 데이터를 담을 수 있음

- 따라서

    1. 인덱스를 기반으로 데이터를 저장해야 하거나

    2. 인덱스를 통해 순서가 중요한 데이터라면

  ⇒ 배열이 유용할 수 있음 (ex. queue)

<br /><br />

# 1. set

- '데이터의 집합체'

- 인덱스, 순서 X, 하나의 집합체이나 중복 데이터 X

```javascript
// * object set
const obj1 = { name: 'apple', price: 8 };
const obj2 = { name: 'banana', price: 5 };
const obj3 = { name: 'banana', price: 5 };
// ! 같은 값을 넣었지만 객체이기 때문에 중복으로 나옴
const objs = new Set([obj1, obj2, obj3]);
console.log(objs);

// ? quiz
obj1.price = 10;
objs.add(obj1);
console.log(objs); // -> shallow copy가 일어남
// [console] Set(3) {
//   { name: 'apple', price: 10 },
//   { name: 'banana', price: 5 },
//   { name: 'banana', price: 5 }
// }
obj2.price = 20;
console.log(objs); // ! 이 역시도 shallow copy여서 값이 같이 바뀜
```

<br /><br />

# 2. map

- 각각의 key, value가 있음

- key는 unique한 값이어야 함

- set과 동일하게 순서가 중요하지 않음

- key만 다르다면 value는 중복 가능

```javascript
// ! object와의 큰 차이점?
const key = { name: 'chocolate', price: 10 };
const chocolate = { name: 'chocolate', price: 10, description: '초콜렛' };
const obj = {
  [key]: chocolate,
}
console.log(obj);
// { '[object Object]': { name: 'chocolate', price: 10, description: '초콜렛' } }

const map2 = new Map([[key, chocolate]]);
console.log(map2);
// Map(1) { { name: 'chocolate', price: 10 } => { name: 'chocolate', price: 10, description: '초콜렛' } }

// * 사용할 수 있는 메서드가 다름
// * object는 key를 동적으로 접근할 수 있지만, map은 불가능 (undefined 반환)
// * -> map에서 특정한 key의 value를 찾으려면 .get을 사용해야 함
// * 둘은 사용할 수 있는 함수(interface)가 다르다! (ex. obj는 순회 불가능 등)
```