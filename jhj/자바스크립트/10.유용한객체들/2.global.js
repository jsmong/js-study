console.log(globalThis);
console.log(Infinity);
console.log(NaN);
console.log(undefined);
console.log(this); // 노드의 this 는 현재 모듈
// 브라우저의 this 는 window 객체 - 브라우저에서 사용하는 api들
// this는 전역 객체

eval('const num = 2; console.log(num)');
console.log(isFinite(1));
console.log(isFinite(Infinity));

console.log(parseFloat('12.43')); // 문자열 -> 수
console.log(parseInt('12.43')); // 문자열 & 숫자 -> 정수

// URL (URI, Uniform Resource Identifier 하위 개념)
// 아스키 문자로만 구성되어야함
// 한글이나 특수문자는 이스케이프 처리 해야함
const URL = 'https://드림코딩.com';
const encoded = encodeURI(URL);
console.log(encoded);

const decoded = decodeURI(encoded);
console.log(decoded);

// 전체 URL 이 아니라 부분적인 것은 Component 이용
const part = '드림코딩.com';
console.log(encodeURIComponent(part));
