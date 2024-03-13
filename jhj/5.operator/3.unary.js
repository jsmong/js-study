// 단항연산자 Unary Operator
// + 양
// - 음
// ! 부정
let a = 5;
a = -a; // -1 * 5
console.log(a); // -5
a = -a;
console.log(a); // 5

a = +a;
console.log(a); // 5

a = -a; // -5
a = +a; // +(-5)
console.log(a);

let boolean = true;
console.log(boolean); // true
console.log(!boolean); // false
console.log(!!boolean); // true

// 숫자가 아닌 타입들을 숫자로 변환하면 어떤 값이 나오는지 확인 할 수 있음
console.clear();
console.log(+false); // 0
console.log(+null); // 0
console.log(+""); // 0
console.log(+true); // 1
console.log(+"text"); // NaN
console.log(+undefined); // NaN

console.log(!1); // 1 = true
// !! 값을 boolean 타입으로 변환함
