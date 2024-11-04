const fruits = ['🍎', '🍊', '🍌', '🍇'];

// 배열 아이템을 참조하는 방법
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits.length);

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[[i]]);
// }

// 나쁜예
// 추가하기
fruits[4] = '🍉';
console.log(fruits);

// 삭제하기
delete fruits[1];
console.log(fruits); //  <1 empty item> 으로 남아있음!!
