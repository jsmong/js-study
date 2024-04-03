// 1. 문자열의 모든 캐릭터를 한 줄에 하나씩 출력
const txt = 'Hello World!';

// todo
const txtArr = txt.split('');
txtArr.forEach((txt) => console.log(txt));

// ! answer
for (let i = 0; i < txt.length; i++) {
  console.log(txt[i]);
}

// 2. 사용자들의 id를 잘라내어 각각의 id를 배열로 보관
// todo
const ids = 'user1, user2, user3, user4';
console.log(ids.split(', '));

// ! answer
const array = ids.split(', ');
console.log(array);

// 3. 1초에 한 번씩 시계를 (날짜 포함) 출력
// todo
setInterval(() => {
  const time = new Date();
  console.log(time.toTimeString().slice(0, 8));
}, 1000);

// ! answer
setInterval(() => {
  const now = new Date();
  console.log(now.toLocaleString('ko-KR'));
}, 1000);
