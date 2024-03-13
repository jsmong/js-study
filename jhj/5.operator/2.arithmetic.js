// 산술 연산자 Arthmetic operator
// +
// -
// -
// *
// /
// % 나머지
// ** 지수연산자 (거듭제곰)

console.log(5 + 2);
console.log(5 - 2);
console.log(5 * 2);
console.log(5 / 2);
console.log(5 % 2);
console.log(5 ** 2); // es7
console.log(Math.pow(5, 2)); // es7 이전 거듭제곱

// + 연산자 주의점!
let text = '1' + 1; // 숫자와 문자열을 더하면 문자열로 변환됨
console.log(text); // 11
console.log(typeof text); // string
