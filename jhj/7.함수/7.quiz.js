// 주어진 숫자만큼 0부터 순회하는 함수
// 순회하면서 주어진 특정한 일을 수행해야함
// 5, 순회하는 숫자를 다 출력하고 싶음
// 5, 순회하는 숫자의 두개값을 다 출력하고 싶음

const print = (i) => {
  console.log(i);
};
const printDouble = (i) => {
  console.log(i * 2);
};

function iterate(max, action) {
  for (i = 0; i < max; i++) {
    action(i);
  }
}

iterate(5, print); // iterate(5, (num) => console.log(num))
iterate(5, printDouble);

// 활용예
// 함수 자체를 매개변수로 보낼수 있다!
setTimeout(() => {
  console.log('3초뒤 실행');
}, 3000);
