// while(조건) {}
// 조건이 false가 될때까지 {} 코드를 반복 실행
let num = 5;
while (num >= 0) {
  console.log(num);
  num--;
}

let isActie = false;
let i = 0;
while (isActie) {
  console.log('아직살아있다!');
  if (i === 1000) {
    break;
  }
  i++;
}

// do > 먼저 실행
do {
  console.log('먼저 검사!');
} while (isActie);
