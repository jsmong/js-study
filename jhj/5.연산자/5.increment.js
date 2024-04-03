// 증가 & 감소 연산자 Increment & Decrement Operators
let a = 0;
console.log(a); // 0
a++; // a = a + 1
console.log(a); // 1
a--; // a = a - 1
console.log(a); // 0

console.clear();

// 주의!
// a++  필요한 연산을 하고, 그 뒤 값을 증가 시킴
// ++a  값을 먼저 증가하고 필요한 연산을 함

a = 0;
let b = a++; // 1. b = a (0) 먼저 할당  ->  2. a + 1;
console.log(b); // 0
console.log(a); // 1

c = 0;
let d = ++c; // 1. c++ 먼저 진행; 2. d = c (1)할당
console.log(d); // 1
console.log(c); // 1
