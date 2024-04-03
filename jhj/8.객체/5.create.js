// 1. 이런 같은 형태의 함수를 간단히 -> 생성자함수
// const apple = {
//   name: 'apple',
//   display: function () {
//     console.log(`${this.name}: 🍎`);
//   },
// };

// const orange = {
//   name: 'orange',
//   display: function () {
//     console.log(`${this.name}: 🍊`);
//   },
// };

// console.log(apple);
// console.log(orange);

// 생성자 함수를 사용해서 과일 정의
function Fruit(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  this.display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
  // return this; // 생략가능
}

// apple, orange 를 쉽게 생성
const apple = new Fruit('apple', '🍎');
const orange = new Fruit('orange', '🍊');
console.log(apple.name);
console.log(apple.emoji);
apple.display();

console.log(orange.name);
console.log(orange.emoji);
orange.display();
