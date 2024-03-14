// 논리연산자 Logical operator
// && 그리고
// || 또는
// ! 부정(단항연산자에서 온것)
// !! 불리언값으로 변환 (단항연산자 응용버전)
let num = 7;

// &&
if (num >= 0 && num < 9) {
  console.log('＆&');
}

// ||
if (num >= 0 || num < 9) {
  console.log('||');
}

// !
if (num != 9) {
  console.log('!');
}

console.log(true && true); // ture
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

console.log(true || true); // ture
console.log(true || false); // ture
console.log(false || true); // ture
console.log(false || false); // false

console.log(!'text');
console.log(!!'text');
