// 퀴즈 !
let num = 2;
// num의 숫자가 짝수이면 👍 / 홀수이면 👎

// 1. if문
if (num % 2 === 0) {
  console.log('👍');
} else {
  console.log('👎');
}

// 2. 삼항연산자
let emoji = num % 2 === 0 ? '👍' : '👎';
console.log(emoji);
