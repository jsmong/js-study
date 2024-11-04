// 1. 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수
// 단, 주어지 배열을 수정하지 않도록
// input : ['🍌','🍑','🍇','🍑']
// output : ['🍌','🥝','🍇','🥝']
const changeFruit = (arr) => {
  let newArr = [];
  arr.forEach((el) => {
    newArr.push(el === '🍑' ? '🥝' : el);
  });
  return newArr;
};
console.log(changeFruit(['🍌', '🍑', '🍇', '🍑']));

// 2. 배열과 특정한 요소를 전달받아, 배열 안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// 단, 주어지 배열을 수정하지 않도록
// input : ['🍌','🥝','🍇','🥝'],'🥝'
// output : 2
const countFruit = (arr, target) => {
  return arr.filter((el) => {
    return el === target;
  }).length;
};
console.log(countFruit(['🍌', '🥝', '🍇', '🥝'], '🥝'));

// 3. 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌','🥝','🍇'], ['🍌','🍑','🍇','🍑']
// output: ['🍌', '🍇']
const returnOverlap = (arr1, arr2) => {
  let newArr = [];
  arr1.forEach((el) => {
    arr2.includes(el) && newArr.push(el);
  });
  newArr = new Set(newArr);
  newArr = [...newArr];
  return newArr;
};
console.log(returnOverlap(['🍌', '🥝', '🍇'], ['🍌', '🍑', '🍇', '🍑']));
