function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => 🥚`);
}
function fryEgg(egg) {
  return Promise.resolve(`${egg} => 🍳`);
}
function getChicken() {
  return Promise.reject(new Error('치킨을 가지고 올 수 없음'));
  // return Promise.resolve(`🌾 => 🐔`);
}

// fetchEgg('🐔') //
//  .then((egg) => console.log(egg));

// getChicken()
//   .catch((error) => {
//     console.error(error);
//     return '🐔';
//   })
//   .then(fetchEgg)
//   .then(fryEgg)
//   .then(console.log);

// (async () => {
//   const chicken = await getChicken();
//   const egg = await fetchEgg(chicken);
//   const friedEgg = await fryEgg(egg);
//   console.log(friedEgg);
// })();

// ==== 앨리답
async function makeFriedEgg() {
  let chicken;
  try {
    chicken = await getChicken();
  } catch (error) {
    console.error(error);
    chicken = '🐔';
  }
  const egg = await fetchEgg(chicken);
  return fryEgg(egg);
}

makeFriedEgg().then(console.log);
