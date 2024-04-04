// 교훈 : 인자값 재할당 하지말자

// 함수 내부에서 외부로부터 주어진 인자의 값을 변경하는 것은 절대 안됌!!!!!!
// 상태 변경이 필요한 경우에는, 새로운 상태를(오브젝트, 값)을 만들어서 반환해야함
// 원시값 - 값에 의한 복사
// 객체값 - 참조에 의한 복사 (메모리 주소)
function display(num) {
  // num = 5; // 절대 안돼!!
  console.log(num);
}
const value = 4;
display(value);
console.log(value);

// Bad!!
function displayObj(obj) {
  obj.name = 'Anna'; // 외부로부터 주어진 인자(오브젝트)를 내부에서 변경 절대 안돼!!
  console.log(obj);
}
const obj = { name: 'Jang' };
// displayObj(obj);

// Better
function changeName(obj) {
  // 이름부터 변경하는 느낌을 주도록!
  return { ...obj, name: 'Anna' };
  // 반환할때는 새로운 오브젝트 만들기!
}
