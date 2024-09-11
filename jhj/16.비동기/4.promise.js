function runInDelay(seconds) {
  // 성공적으로 끝났는지, 실패했는지 알려줌
  return new Promise((resolve, reject) => {
    // promise 를 만들수 있는 callback 함수 전달
    if (!seconds || seconds < 0) {
      // 실패
      reject(new Error('seconds는 0이상이어야 함'));
    }
    // 성공
    setTimeout(resolve, seconds * 1000);
  });
}

runInDelay(1)
  .then(
    () => console.log('타이머 완료') // 필요한 일 수행
  )
  .catch(
    console.error // 에러 처리
  )
  .finally(
    () => console.log('프로미스 끝!') // 성공여부와 상관없이 최종적으로 호출
  );
