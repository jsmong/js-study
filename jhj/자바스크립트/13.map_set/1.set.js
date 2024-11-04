// Set
// 데이터의 집합체, index없음 ,  중복 불가
// 생성법
const set = new Set([1, 2, 3]);
console.log(set);
// 갯수
console.log(set.size);
// 존재하는지 확인
console.log(set.has(1));
// 순회 가능
set.forEach((item) => {
  console.log(item);
});
for (const value of set.values()) {
  console.log(value);
}

// 추가
set.add(6);
console.log(set);
set.add(6);
console.log(set); // { 1, 2, 3, 6 } 중복안됨

// 삭제
set.delete(6);
console.log(set);

// 전부 삭제
set.clear();
console.log(set);

// 오브젝트 셋트
const obj1 = { name: '🍎', price: 8 };
const obj2 = { name: '🍌', price: 5 };
const objs = new Set([obj1, obj2]); // { { name: '🍎', price: 8 }, { name: '🍌', price: 5 } }
console.log(objs);

// 포함된 객체의 속성을 바꿔서 다시 추가한다면??
// obj는 shallow copy
obj1.price = 10;
objs.add(obj1);
console.log(objs); // { { name: '🍎', price: 10 }, { name: '🍌', price: 5 }

// 퀴즈
const obj3 = { name: '🍌', price: 5 };
objs.add(obj3);
console.log(objs);
//Set(3) {
//   { name: '🍎', price: 10 },
//   { name: '🍌', price: 5 },
//   { name: '🍌', price: 5 }
// }
