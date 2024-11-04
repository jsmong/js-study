function getBanana() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('🍌');
    }, 1000);
  });
}

function getApple() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('🍎');
    }, 3000);
  });
}

function getOrange() {
  return Promise.reject(new Error('오렌지 없음 ㅜ'));
}

// 바나나와 사과를 같이 가지고 오기
// 순차 - 4초 걸림 (바나나 1초, 사과 3촌)
// getBanana() //
//   .then((banana) =>
//     getApple() //
//       .then((apple) => [banana, apple])
//   )
//   .then(console.log);

// 병렬적으로 실행해보자 -> 3초 걸림
Promise.all([getBanana(), getApple()]) //
  .then((fruits) => console.log('all', fruits));

// Promise.reace 주어진 Promise 중에 제일 빨리 수행 된것이 이김
Promise.race([getBanana(), getApple()]) //
  .then((fruit) => console.log('race', fruit));

// 성공했을대만 가져옴
Promise.all([getBanana(), getApple(), getOrange()]) //
  .then((fruits) => console.log('all-error', fruits))
  .catch(console.log);

// 모든 경우의 수를 반환
Promise.allSettled([getBanana(), getApple(), getOrange()]) //
  .then((fruits) => console.log('all-settle', fruits))
  .catch(console.log);
