// let 재할당이 가능
let a = 1;
a = 2;

// const 재할당이 불가능
// 1. 상수
// 2. 상수변수 또는 변수
const text = 'hello';
// text = 'hi'; 안된다

// 1. 상수
const MAX_FRUITS = 5;

// 2. 재할당 불가능한 상수변수 또는 변수
const apple = {
  name: 'apple',
  color: 'red',
  display: '🍎',
};
// apple = {}; 안된다
console.log(apple);
apple.name = 'orange'; // 이건 된다
console.log(apple);
// apple의 메모리 주소값은 변경하지 못하지만
// 해당 메모리 주소의 값들은 재할당이 가능하다

// let   재할당 O 변경 O
// const 재할당 X 변경 O
