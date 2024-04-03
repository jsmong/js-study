// 대괄호 표기법 언제씀?
// -> 동적으로 속성에 접근해야할 때 사용

const obj = {
  name: '현정',
  age: 10,
};

// 코딩하는 시점에, 정적으로 접근이 확정됨
obj.name;
obj.age;

// 동적으로 속성에 접근하고 싶을때 대괄호 표기법 사용!
// value 만 가지고 동적으로 가지고 오는 함수!
function getValue(obj, key) {
  // return obj.key;  // obj 안에 key 라는 이름의 key 가 없어서 이건 안돼!
  return obj[key];
}
console.log('???', getValue(obj, 'name'));

// 속성 추가 함수
function addKey(obj, key, value) {
  return (obj[key] = value);
}
addKey(obj, 'job', 'actor');
console.log(obj);

// 속성 제거 함수
function deleteKey(obj, key) {
  return delete obj[key];
}
deleteKey(obj, 'job');
console.log(obj);

// mdn 객체로 작업하기
// 속성 접근자.. -> 보며 리뷰
