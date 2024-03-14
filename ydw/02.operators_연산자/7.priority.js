let a = 2;
let b = 3;
let result = a + b * 4; // 우선순위 하고 싶으면 (a + b) * 4
console.log(result);
result = a++ + b * 4; // a++ 나중에 계산함!
console.log(result);

