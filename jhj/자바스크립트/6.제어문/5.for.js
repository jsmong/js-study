// 반목문 Loop Statement
// for(반복선언문; 조건식; 증감식) {}
// 실행순서:
// 1. 변수 선언문
// 2. 조건식의 값이 참이면 {}  코드블럭 수행
// 3. 증감식 수행
// 4. 조건식이 거짓이 될때 까지 2번 3번 반복함

// for (let i = 0; i < 5; i++) {
for (let i = 0; i < 5; i = i + 2) {
  console.log(i);
}

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    console.log(i, j);
  }
}

// 무한루프
// for (;;) {
//   console.log('ㅜㅜ');
// }

// 반복문 제어 : continue, break
for (let i = 0; i < 20; i++) {
  if (i === 10) {
    // continue; // 이후 코드 무시, 바로 다음 반복으로 이동
    console.log('드디어 10 !!');
    // break; // 반복문 중지
  }
  console.log(i);
}
