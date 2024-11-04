// Symbol 심벌
// 유일한 키를 생성할 수 있음
const map = new Map();
// const key1 = 'key';
// const key2 = 'key';

const key1 = Symbol('key'); // Hello
const key2 = Symbol('key'); // true

map.set(key1, 'Hello');
console.log(map.get(key2)); // undefined
console.log(key1 === key2); // false

// 이름은 같아도 서로 다른 key를 생성할 수 있음

// 동일한 이름으로 하나의 키를 사용하고 싶다면, Symbol.for
// 전역 심벌 레지스트리 (Global Symbol Registry)
const k1 = Symbol.for('key');
const k2 = Symbol.for('key');
console.log(k1 === k2); // true

// 전역심벌 레지스트리를 이용해 만든 키만 keyFor 키워드로 가져올수 있음
console.log(Symbol.keyFor(k1)); // key
console.log(Symbol.keyFor(key1)); // undefined

// 어떨때 유용하게 사용?
const obj = { [k1]: 'Hello', [Symbol('key')]: 1 };
console.log(obj); // { [Symbol(key)]: 'Hello', [Symbol(key)]: 1 }
console.log(obj[k1]); // Hello
console.log(obj[Symbol('key')]); //undefined
