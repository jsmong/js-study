const text = 'hello';
function func() {
  console.log(text);
}
func();
// 내부에서 외부로의 접근 가능
// 내부에서 선언된 변수는 외부에서 접근 불가

function outer() {
  const x = 0;
  function inner() {
    console.log(`inside inner: ${x}`);
  }
  inner();
}
outer(); // inside inner: 0

function outer() {
  const x = 0;
  function inner() {
    console.log(`inside inner: ${x}`);
  }
  return inner;
}
const func1 = outer();
func1(); // inside inner: 0

// 함수가 중첩되어있을때, 내부 함수가 외부 함수의 렉시컬 환경에 접근 가능한것!
