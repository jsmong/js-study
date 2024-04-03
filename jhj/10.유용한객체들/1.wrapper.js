// 래퍼 객체 (Wrapper Object)
// 원시값은 필요에 따라서 관련된 빌트인 객체로 변환한다.
// 각각의 원시타입은 그에 해당하는 wrapper 오브젝트가 있다.
// .을찍는 순간 원시타입 wrapper 객체로 감싸짐
const number = 123; // number 원시 타입
// number값은 원시값인데(객체 아닌데) number. 찍으면 사용할수 있는 함수들이 뜬다.
// => .찍는 순간, number 원시타입을 감싸고 있는 Number라는 객체로 감싸짐

console.log(number); // number 원시 타입
console.log(number.toString());

const text = 'text'; // string 문자열 원시값
console.log(text);
console.log(text.length); // String 객체
console.log(text.trim());
