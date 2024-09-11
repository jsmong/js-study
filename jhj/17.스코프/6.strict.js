'use strict';
// 엄격 모드 strict mode
// 리액트와 같은 프레임워크 사용시 기본적으로 엄격 모드임

// 1. delete 안됨
var x = 1;
// delete x; // 엄격모드에선 안됨

// 2. 키워드 생략하고 var 변수 생략 불가
function add(x) {
  var a = 2;
  // b = a + x; // 에러: b is not defined
}
add(1);

// 3. 반목문 안의 변수도 변수 키워드 필요
const arr = [1, 2, 3];
for (num of arr) {
  // (const num of arr) 로 변경해야 동작
  console.log(num); // 에러 : num is not defined
}
