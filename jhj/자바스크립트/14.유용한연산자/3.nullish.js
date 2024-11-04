// Nullish coalescing Operator
// ES11 (ES 2020)
// ?? null, nudefined 인 경우만 체크하고싶을때!
// cf) || falshy 경우 설정(할당) 0, -0, ''

let num = 0; // false로 간주..!!
console.log(num || '-1'); // -1 --> 0으로 출력되어야해
console.log(num ?? '-1'); // 0
