// 구조 분해 할당 Desturcturing Assignment
// 데이터 뭉치(그룹화)를 쉽게 만들수 있다
const fruits = ['🍑', '🍇', '🍎', '🥝'];
console.log(fruits[0]); // index가 아닌, 의미있는 변수 값을 통해 배열 값에 접근하고 싶다면.. 구조분해 할당으로 한번에 변수 명 할당 가능!
const [first, second, ...others] = fruits;
console.log(first); //🍑
console.log(second); // 🍇
console.log(...others); // 🍎 🥝

const point = [1, 2];
const [x, y, z = 0] = point;
console.log(x); // 1
console.log(y); // 2
console.log(z); // 0 (기본값)

// ** 함수로 생각해보기
function createEmoji() {
  return ['apple', '🍎'];
}
// const array = createEmoji();
// console.log(array);
const [titie, emoji] = createEmoji();
console.log(titie); // apple
console.log(emoji); // 🍎

// ** Object
const ellie = { name: 'Ellie', age: 20, job: 'FE' };
// function display(person) {
//   console.log('이름', person.name);
//   console.log('나이', person.age);
//   console.log('직업', person.job);
// }
// display(ellie);

// -> 리액트에서 이렇게 사용하쥬
function display({ name, age, job }) {
  console.log('이름', name); // 이름 Ellie
  console.log('나이', age); // 나이 20
  console.log('직업', job); // 직업 FE
}
display(ellie);

// ** obj 를 함수 안이 아니라, 변수에서도 이용 가능
const { name, age, job: occupation, pet = '강아지' } = ellie;
console.log(name); // Ellie
console.log(age); // 20
// console.log(job); // 에러남 , 이름 바꿔서
console.log(occupation); // FE
console.log(pet); // 강아지

// Quiz
const prop = {
  name: 'Button',
  styles: {
    size: 20,
    color: 'balck',
  },
};
function changeColor({ name, styles: { color } }) {
  console.log(color);
}
changeColor(prop);
