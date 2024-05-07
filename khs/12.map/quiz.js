// ? 주어진 배열에서 중복 제거
const fruits = ['🍌', '🍎', '🍇', '🍌', '🍎', '🍑'];

// todo
const set = new Set(fruits);
console.log([...set]);

// ! answer
console.log([...new Set(fruits)])

// ----------------------------------

// ? 주어진 두 세트의 공통된 아이템만 담고 있는 세트 만들기
const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([1, 2, 3]);

// todo
const newSet = new Set();
set1.forEach((num) => set2.has(num) && newSet.add(num));
console.log(newSet);

// ! answer
const findIntersection = (set1, set2) => {
  return new Set([...set1].filter((item) => set2.has(item)));
}
console.log(findIntersection(set1, set2))