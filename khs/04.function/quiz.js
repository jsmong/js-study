// ? quiz
// 주어진 숫자만큼 0부터 순회하는 함수
// 순회하면서 주어진 특정한 일을 수행해야 함
// 구현 1. 5, 순회하는 숫자를 다 출력
// 구현 2. 5, 순회하는 숫자의 두배값을 모두 출력

// ------------------------------------------------

// todo 

const print = (num) => {
  let result = [];
  for (let i = 0; i <= num; i++) {
    result.push(i);
  }
  return result.join(', ');
}

const double = (num) => {
  let result = [];
  for (let i = 0; i <= num; i++) {
    result.push(i * 2);
  }
  return result.join(', ');
}

const iterate = (max, action) => {
  console.log(action(max));
}

// iterate(5, print)
// iterate(5, double);

// ------------------------------------------------

// ! answer
function iterateAnswer(max, action) {
  for (let i = 0; i <= max; i++) {
    action(i)
  }
}

function log(num) {
  console.log(num)
}

function doubleAndLog(num) {
  console.log(num * 2)
}

// iterateAnswer(5, log);
// iterateAnswer(5, doubleAndLog);