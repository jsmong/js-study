const textObj = new String('Hello World');
const text = 'Hello World';
console.log(textObj); // [String: 'Hello World']
console.log(text); // Hello World

console.log(text.length); // 11
console.log(text[0]); // H
console.log(text.charAt(0)); // H

// 특정 문자열의 index
console.log(text.indexOf('l')); // 2 (처음 기준, 가장 처음 찾은 애만 출력)
console.log(text.lastIndexOf('l')); // 9 (마지막 기준, 가장 처음 찾은 애만 출력)

// 해당 문자열을 포함함는지
console.log(text.includes('tx')); // false
console.log(text.includes('h')); // false (대소문자 구분함)
console.log(text.includes('H')); // true

// 해당 문자열로 시작하는지
console.log(text.startsWith('He')); // true
console.log(text.endsWith('d')); // true

// 모두 대문자로
console.log(text.toUpperCase()); // HELLO WORLD
console.log(text.toLowerCase()); // hello world

// 특정 위치 문자열 삭제
console.log(text.substring(0, 2)); // He (0,1 출력)
console.log(text.slice(2)); // llo World (2번 인텍스부터 끝까지 잘라내기)
console.log(text.slice(-2)); // ld (뒤에서부터 2번째 부터 잘라내기)

// 공백 제거
const space = '     space      ';
console.log(space.trim()); // space

// 특정 문자 기준으로 문자열을 끊어주고 싶다면
const longText = 'Get to the point';
console.log(longText.split(' ')); // [ 'Get', 'to', 'the', 'point' ]
console.log(longText.split(' ', 2)); // [ 'Get', 'to' ] (끊어진것 중에 2덩어리만 반환)
