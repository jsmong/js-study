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

getChicken()
  .catch((error) => {
    console.error(error);
    return '🐔';
  })
  .then(fetchEgg)
  .then(fryEgg)
  .then(console.log);
