// #1. 객체 생성법
// 1. Obeject literal { key: value }
// 2. new Object()
// 3. Object.create()

// #2. 객체 구성요소
// key - 문자, 숫자, 문자열, 심볼
// value - 원시값, 객체 (함수)

let apple = {
  name: 'apple', // 대부분 이렇게 씀!
  'hello-bye': '👋',
  0: 1,
  ['hello-bye1']: '👋',
};

// 속성, 데이터에 접근
console.log(apple.name); // 마침표 표기법 dot notatioen
console.log(apple['hello-bye']); // 대괄호 표기법  bracket notation
console.log(apple['name']);

// 속성 추가
apple.emoji = '🍎';
console.log(apple.emoji);
console.log(apple['emoji']);
console.log(apple);

// 속성 삭제
delete apple.emoji;
console.log(apple);
