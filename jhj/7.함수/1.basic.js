function add(a, b) {
  return a + b;
}
const result = add(1, 9);
console.log(result);

// 사용예제2
let lastName = '김';
let firstName = '지수';
let fullName = `${lastName} ${firstName}`;
console.log(fullName);

function getFullName(lastName, firstName) {
  return `${lastName} ${firstName}`;
}
const fullName2 = getFullName('차', '은우');
console.log(fullName2);
