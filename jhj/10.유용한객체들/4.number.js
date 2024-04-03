const num1 = 123;
const num2 = new Number(123); // 필요한 경우가 아니라면 굳이? 메모리 낭비임
console.log(num1);
console.log(num2);

console.log(typeof num1);
console.log(typeof num2);

//1.7976931348623157e+308
// e+308 10의 308승 (0이 308개)
console.log(Number.MAX_VALUE); // 최대값
console.log(Number.MIN_VALUE); // 최소값
console.log(Number.MAX_SAFE_INTEGER); // 안전하게 사용할 수 있는 최대값
console.log(Number.MIN_SAFE_INTEGER); // 안전하게 사용할수 있는 최소값
console.log(Number.NaN);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);

// 예제 - num 1이 숫자값인지 판별
console.log(num1 === Number.NaN);
console.log(Number.isNaN(num1));

// 지수표기법 (매우 크거나 작은 숫자를 표기할 때 사용, 10의 n승)
const num3 = 102;
console.log(num3.toExponential()); // 1.02e+2
// 1.02 * (10**2)

// 반올림하여 문자열로 변환
const num4 = 1234.12;
console.log(num4.toFixed()); // 1234
console.log(num4.toString); // '1234'
console.log(num4.toLocaleString('ar-EG')); // 숫자를 그나라 지역에 맞춰 표시

// 원하는 자릿수까지 유효하도록 반올림
console.log(num4.toPrecision(5)); // 1234.1 (5개만 표시)
console.log(num4.toPrecision(4)); // 1234
console.log(num4.toPrecision(2)); // 1.2e+3 (전체 자릿수 표기가 안될때는 지수 표기법)
console.log(Number.EPSILON); // 0과 1 사이에서 나타낼 수 있는 가장 작은 숫자

if (Number.EPSILON > 0 || Number.EPSILON < 1) {
  console.log(Number.EPSILON);
}
const num5 = 0.1 + 0.2 - 0.2;
console.log(num5); // 0.1이 아님 (0.10000000000000003)
// js 는 10진수를 2진수로 변환하여 계산 후, 10진수로 치환해줌 -> 정확하게 부동소수점까지 계산 못함

function isEqual(original, expected) {
  // return original === expected;
  return original - expected < Number.EPSILON;
}
console.log(isEqual(1, 1)); // true
console.log(isEqual(0.1, 0.1)); // true
console.log(isEqual(num5, 0.1)); // Number.EPSILON사용시 true
