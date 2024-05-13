// ? 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// ? 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]

// todo
const arr1 = ['🍌', '🍓', '🍇', '🍓'];

const answer1 = (arr) => arr.map((value) => (value === '🍓' ? '🥝' : value));
// console.log(answer1(arr1));

// ! answer(1)
const replace1 = () => {
  const replaced = Array.from(arr1);
  for (let i = 0; i < replaced.length; i++) {
    if (replaced[i] === '🍓') {
      replaced[i] = '🥝';
    }
  }
  return replaced;
};
// console.log(replace1());

// ! answer(2)
const replace2 = (array, from, to) => {
  const replaced = Array.from(array);
  for (let i = 0; i < replaced.length; i++) {
    if (replaced[i] === from) {
      replaced[i] = to;
    }
  }
  return replaced;
};
// console.log(replace2(arr1, '🍓', '🥝'));

// * Refactoring
const refactoring1 = (arr, from, to) => arr.map((value) => (value === from ? to : value));
// console.log(refactoring1(arr1, '🍓', '🥝'));

// --------------------------------------------------------------

// ? 퀴즈2:
// ? 배열과 특정한 요소를 전달받아, 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2

// todo
const arr2 = ['🍌', '🥝', '🍇', '🥝'];
const answer2 = (arr, value) =>
  arr.reduce((acc, cur) => {
    return (acc += cur === value ? 1 : 0);
  }, 0);
// console.log(answer2(arr2, '🥝'));

// ! answer
const count = (array, item) => {
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      counter++;
    }
  }
  return counter;
};
// console.log(count(arr2, '🥝'));

// --------------------------------------------------------------

// ? 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// ? 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]

// todo
const arr3_1 = ['🍌', '🥝', '🍇'];
const arr3_2 = ['🍌', '🍓', '🍇', '🍓'];
const answer3 = (arr1, arr2) => arr2.filter((value) => arr1.includes(value));
// console.log(answer3(arr3_1,  arr3_2));

// ! answer
const match = (input, search) => {
  const result = [];
  for (let i = 0; i < input.length; i++) {
    if (search.includes(input[i])) {
      result.push(input[i]);
    }
  }
  return result;
};
// console.log(match(arr3_1,  arr3_2));

// --------------------------------------------------------------

// ? 5이상(보다 큰)의 숫자들의 평균
const nums = [3, 16, 5, 25, 4, 34, 21];

// todo
const arrs = nums.filter((v) => v >= 5);
const avg = arrs.reduce((acc, cur) => (acc += cur), 0) / arrs.length;
console.log(avg);

// answer
const result = nums.filter((num) => num >= 5).reduce((avg, num, idx, arr) => avg + num / arr.length, 0);
console.log(result);
