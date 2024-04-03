function add(a, b) {
  return a + b;
}
// add 라는 변수에는 메모리 주소가 저장되어있음

const sum = add;
// sum 에는 add의 메모리 주소가 저장되어있음

console.log(sum(1, 2));
console.log(add(1, 2));
console.log(sum()); // undefined + undefined = NaN ;
