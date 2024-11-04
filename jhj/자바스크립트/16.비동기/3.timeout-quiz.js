// 주어진 seconds(초)가 지나면 callback 함수를 호출함
// 단, secondes 가 0보다 작으면 에러를 던지자
// function runInDelay(callback, seconds) {
//   if (seconds > 0) {
//     setTimeout(() => {
//       callback();
//     }, seconds * 1000);
//   } else {
//     console.error('seconds 는 0 이상이어야합니다!!');
//   }
// }

// const callback = () => {
//   console.log('hi');
// };
// runInDelay(callback, 3);

// ====== 앨리 답 ===============
function runInDelay(callback, seconds) {
  if (!callback) {
    throw new Error('callback 함수를 전달해주세요');
  }
  if (!seconds || seconds < 0) {
    throw new Error('seconds는 0보다 커야함');
  }
  setTimeout(callback, seconds * 1000);
}

try {
  runInDelay(() => {
    console.log('타이머 완료');
  }, 0);
} catch (error) {
  console.error(error);
}
