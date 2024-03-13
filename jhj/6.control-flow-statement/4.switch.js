// 조건문 Conditional Statement
// switch
// 정해진 범위 안의 값에 대해 특정한 일을 수행해야 하는 경우
let day = 10; // 0: 월요일, 1: 화요일 ... 6: 일요일
switch (day) {
  case 0:
    dayname = '월요일';
    break; // 걸어줘야 뒤에꺼 실행하지 않아줘~
  case 1:
    dayname = '화요일';
    break;
  case 2:
    dayname = '수요일';
    break;
  case 3:
    dayname = '목요일';
    break;
  case 4:
    dayname = '금요일';
    break;
  case 5:
    dayname = '토요일';
    break;
  case 6:
    dayname = '일요일';
    break;
  default: // else와 같이 default 지정 가능
    dayname = '해당하는 요일이 없음!';
}
console.log(dayname);

let condition = 'okay'; // okay, good -> 좋음, bad -> 나쁨
switch (condition) {
  case 'okay': // or은 이런식으로 표현
  case 'good':
    console.log('좋음');
    break;

  case 'bad':
    console.log('나쁨');
    break;
}
