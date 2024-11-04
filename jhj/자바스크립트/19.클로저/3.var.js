// let
// function loop() {
//   const array = [];
//   for (let i = 0; i < 5; i++) {
//     array.push(function () {
//       console.log(i);
//     });
//   }
//   return array;
// }

// const array = loop(); // [func * 5] (0 ~ 4까지 콘솔 뱉는)
// array.forEach((func) => func()); // console.log( 0 ~ 4 ) 출력

// 블록레벨 스코프 X
// 함수레벨 스코프 O
function loop() {
  const array = [];
  for (var i = 0; i < 5; i++) {
    // ** 반복문 안에서는 아래와 같이 돌지만
    // 1. var = 0
    // 2. var = 1
    // 3. var = 2
    // 4. var = 4
    // 5. var = 5 / 아래 console 까진 접근 못함
    array.push(function () {
      console.log('1. ', i);
    });
  }
  console.log('2. ', i);
  return array;
}

const array = loop();
array.forEach((func) => func());
