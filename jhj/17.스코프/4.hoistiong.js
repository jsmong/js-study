// 함수의 호이스팅은 함수의 선언문 전에 호출이 가능하게 해줌
// 함수의 선언문은 선언 이전에도 호출이 가능함
print();
function print() {
  console.log('Hello');
}

// 변수(let, const)와 클래스는 선언만 호이스팅 되고,
// 초기화는 안됨
// 초기화 전, 변수에 접근하면 컴파일(빌드) 에러 발생
// console.log(hi); // 에러 Cannot access 'hi' before initialization
let hi = 'hi';
console.log(hi);

// const cat = new Cat(); // 에러 annot access 'Cat' before initialization
class Cat {}

let x = 1;
{
  console.log(x); // 에러 :Cannot access 'x' before initialization
  let x = 2;
}
