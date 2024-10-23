// 자바스크립트의 함수는 만능 슈퍼맨
// 함수처럼 사용, 생성자 함수로 사용(클래스 대체)
// 하지만, 이걸 위해서 불필요한 무거운 prototype(많은 데이터를 담고 있는 객체) 생성됨
//
const dog = {
  name: '멍멍이',
  // play: function () {
  //   console.log('논다 멍멍'); // X !! 이렇게 쓰지 마셈 !!
  // },
  play: () => console.log('논다 멍멍'), // 화살표 함수로 사용하면 생성자 함수로 사용되는 걸 방지할 수 있음.
};
dog.play(); // 논다 멍멍
// const obj = new dog.play();
// 화살표함수로 미작성시: 이렇게 이상하게 생성자 함수로 만들수도있음
// 화살표 함수로 작성시:  에러남 dog.play is not a constructor
// console.log(obj); // 화살표함수로 미작성시 : play {}

// ES6
const cat = {
  name: 'cat',
  play() {
    // 객체의 메서드(오브젝트에 속한 함수)
    console.log('냐옹');
  },
};
cat.play(); // 냐옹
// const obj2 = new cat.play(); // 에러남 cat.play is not a constructor

console.clear();

/**
 * 화살표 함수의 특징
 * 1. 문법이 깔끔함
 * 2. 생성자 함수로 사용이 불가능(무거운 프로토타입을 만들지 X)
 * 3. 함수 자체 arguments 가지고 있지 않음
 * 4. this에 대한 바인딩이 정적으로 결정됨
 *    - 함수에서 제일 근접한 상위 스코프의 this에 정적으로 바인딩됨
 */

function sum(a, b) {
  console.log(arguments);
}
sum(1, 2); // { '0': 1, '1': 2 }

const add = (a, b) => console.log(arguments); // arrow함수 외부의 arguments를 참조만함
add(1, 2); // 전역객체의 arguments 출력

console.clear();

const printArrow = () => {
  console.log(this); // globalThis
};
printArrow();

cat.printArrow = printArrow;
cat.printArrow(); // printArrow의 this인 globalThis 출력
