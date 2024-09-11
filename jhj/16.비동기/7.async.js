// 비동기 코드, 동기적인 형태로 변환하기 aysnc/await

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
// function fetchFruits() {
//   return getBanana() //
//     .then((banana) => getApple().then((apple) => [banana, apple]));
// }

// fetchFruits() //
//   .then((fruits) => console.log(fruits));

async function fetchFruits() {
  const banana = await getBanana(); // 함수 호출시, promise 가 리턴됨, promise 가 resolve 되면 값을 할당해줌
  const apple = await getApple();
  return [banana, apple];
}

fetchFruits() //
  .then((fruits) => console.log(fruits));
