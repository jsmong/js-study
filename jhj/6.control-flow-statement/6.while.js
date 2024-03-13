// while(조건) {}
// 조건이 false 가 될 때까지 {} 코드를 반복 실행
let num = 5;
while (num >= 0) {
  console.log(num);
  num--;
}

let isActive = true;
let i = 0;

while (isActive) {
  // 조건이 맞을떄만 실행
  console.log(i, '아직 살아 있음!');
  if (i == 10) {
    break;
  }
  i++;
}

isActive = false;
do {
  // 무조건 실행
  console.log('do-while 아직 살아 있음!');
} while (isActive);
