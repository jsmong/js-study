// 퀴즈
// 1. 문자열의 모든 캐릭터를 하나씩 출력하라
const text = 'Hello world!';
// forEach 는 배열만 돈다 -> ... spread operator 사용-> [] 배열로 감싸주기
// [...text].forEach((e) => {
//   console.log(e);
// });

for (i = 0; i < text.length; i++) {
  console.log(i);
}
// H
// e
// l
// l
// ...
// !

// 2. 사용자의 id를 잘라내어 각각의 id를 배열로 보관
const ids = 'user1, user2, user3, user4';
// ['user1', 'user2', 'user3', 'user4']
console.log(ids.split(', '));

// 3. 1초에 한번씩 시계를 (날짜포함)출력해보자
const clock = () => {
  const now = new Date();
  console.log(now.toLocaleString('ko-KR'));
};
const convertNumber = (number) => {
  return number.toString().padStart(2, '0');
};

const clock2 = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = convertNumber(now.getMonth());
  const day = convertNumber(now.getDay());
  const hours = convertNumber(now.getHours());
  const minutes = convertNumber(now.getMinutes());
  const seconds = convertNumber(now.getSeconds());
  console.log(`${year}년 ${month}월 ${day}일 ${hours}:${minutes}:${seconds}`);
};

setInterval(() => {
  clock2();
}, 1000);
