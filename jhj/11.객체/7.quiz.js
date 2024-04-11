// 1. 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수
// 단, 주어지 배열을 수정하지 않도록
// input : ['🍌','🍑','🍇','🍑']
// output : ['🍌','🥝','🍇','🥝']
const changeFruit = (arr, from, to) => {
  return arr.map((item) => (item === from ? to : item));
};
console.log(changeFruit(['🍌', '🍑', '🍇', '🍑'], '🍑', '🥝'));

// 2. 배열과 특정한 요소를 전달받아, 배열 안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// 단, 주어지 배열을 수정하지 않도록
// input : ['🍌','🥝','🍇','🥝'],'🥝'
// output : 2
const countFruit = (arr, target) => {
  return arr.filter((item) => item === target).length;
  // return arr.reduce((sum, value) => {
  //   // 고차함수에서 if문 쓰는게 왜 찝찝하지?
  //   value === target && sum++;
  //   return sum;
  // }, 0);
};

console.log(countFruit(['🍌', '🥝', '🍇', '🥝'], '🥝'));

// 3. 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌','🥝','🍇'], ['🍌','🍑','🍇','🍑']
// output: ['🍌', '🍇']
const returnOverlap = (arr1, arr2) => {
  // let result = [];
  // arr1.forEach((item) => arr2.includes(item) && result.push(item));
  // result = new Set(result);
  // result = [...result];
  // return result;

  return arr1.filter((item) => arr2.includes(item));
};
console.log(returnOverlap(['🍌', '🥝', '🍇'], ['🍌', '🍑', '🍇', '🍑']));

// 4. 5이상(보다 큰)의 숫자들의 평균
const nums = [3, 16, 5, 25, 4, 34, 21];
const getArrayAvg = (arr, conditionNumber) => {
  // const filterd = arr.filter((item) => item > num);
  // return filterd.reduce((sum, num) => (sum += num), 0) / filterd.length;

  const result = arr
    .filter((item) => item > conditionNumber)
    .reduce((avg, num, _, arr) => avg + num / arr.length, 0);

  return result;
};
console.log(getArrayAvg(nums, 5));
