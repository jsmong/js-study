// 퀴즈!
// num의 숫자가 짝수이면 👍, 홀수라면 👎을 출력하도록
// if
// ternary

// 1️⃣ if
let num = 2;
console.log('1️⃣ if');

if (num % 2 == 0) {
  console.log('짝수입니당👍');
}
if (num % 2 == 1) {
  console.log('홀수입니당👎');
}

// 2️⃣ if & else
let num2 = 3;
console.log('2️⃣ if & else');

if (num2 % 2 == 0) {
  console.log('짝수입니당👍');
} else {
  console.log('홀수입니당👎');
}

// 3️⃣ ternary
let num3 = 4;
console.log('3️⃣ ternary');

num3 % 2 == 0
  ? console.log('짝수입니당👍')
  : console.log('홀수입니당👎');
