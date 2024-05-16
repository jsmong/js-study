// Map
// key, value로 이루어진 자료구조
// 순서X, 유일한 키, 키만 다르다면 중복 가능
// obj와 비슷해보이는데?
const map = new Map([
  ['key1', '🍎'],
  ['key2', '🍌'],
]);
console.log(map);

// 사이즈 확인
console.log(map.size);
// 존재하는지 확인
console.log(map.has('key2'));
// 순회
map.forEach((value, key) => {
  console.log(value, key);
});
console.log(map.keys());
console.log(map.values());
console.log(map.entries());
for (value of map) {
  console.log(value);
}
// 찾기
console.log(map.get('key1'));
console.log(map.get('key2'));
console.log(map.get('key3')); // undefined

// 추가
map.set('key3', '🥝');
console.log(map);

// 삭제
map.delete('key3');
console.log(map);

// 전부 삭제
map.clear();
console.log(map);

// 오브젝트와의 큰 차이점
const key = { name: 'milk', price: 10 };
const milk = { name: 'milk', price: 10, description: '맛있는 우유' };
const obj = {
  [key]: milk,
};
console.log(obj);

const map2 = new Map([[key, milk]]);
console.log(map2);

console.log(obj[key]); // { name: 'milk', price: 10, description: '맛있는 우유' }

console.log(map2[key]); // undefined
console.log(map2.get(key)); // { name: 'milk', price: 10, description: '맛있는 우유' }

// map일때는 이터러블!
// obj일때는 그렇지 않지
