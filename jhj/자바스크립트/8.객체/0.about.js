// 객체 Object - 복합데이터 {key:value (원시타입, 복합데이터)}
// 1. Object
// 2. function

// 객체란 서로 연관있는 1.속성(데이터(프로퍼티))과 2.행동(함수(메소드))을 묶어주기 위해 사용
// 1. 속성(순수 데이터 객체)
let apple = {
  // apple -> 0x000za(실제 객체가 만들어진 메모리 주소만 저장)
  name: 'apple', // 객체는 heap 이라는 메모리 공간에 저장
  color: 'red',
  display: '사과',
};
console.log(apple.name); // 메모리주소.name

// 2. 행동(상태와 행동 객체) ->
let apple2 = {
  name: 'apple', // 속성 Property
  display: function () {
    // 행동 Method
    console.log('사과');
  },
};

// ** 포인트 **
// 밀접하게 관련있는 상태와 행동을 객체로 묶자
