// typeof: 데이터 타입 확인
// 값을 타입 문자열로 반환
let variable;
console.log(typeof variable);

variable = '';
console.log(typeof variable);

variable = 123; // 할당된 값에 따라 타입이 결정된다 (런타임언어 (컴파일언어가 아니다))
console.log(typeof variable);

variable = {};
console.log(typeof variable);

variable = () => {};
console.log(typeof variable);

variable = Symbol();
console.log(typeof variable);

// 자바스크립트에도 타입이 있긴함
// 다만, 동적으로 결정 + 할당된 값에 따라 타입이 결정된다
