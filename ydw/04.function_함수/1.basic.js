// 사용예제 1
function sum(num1, num2, num3) {
  console.log('function');
  return num1 + num2 + num3;
}
const result = sum(1, 2, 3);
console.log(result);

// 사용예제 2 - ❌ 안좋은 예시
// let lastName = '양';
// let firstName = '다윗';
// let fullName = `${lastName} ${firstName}`;
// console.log(fullName);

// let lastName2 = '김';
// let firstName2 = '데빗';
// let fullName2 = `${lastName2} ${firstName2}`;
// console.log(fullName2);

// 사용예제 2 - ✅ 좋은 예시
function fullName(lastName, firstName) {
  return `${lastName} ${firstName} 🙎🏻‍♂️`;
}

let lastName = '양';
let firstName = '다윗';
console.log(fullName(lastName, firstName));

let lastName2 = '김';
let firstName2 = '데빗';
console.log(fullName(lastName2, firstName2));
