// Math
// static properies, method
console.log(Math.E); // 오일러의 상수, 자연로그의 밑
console.log(Math.PI);

// static method
console.log(Math.abs(-10)); // 10 (절대값 반환, -떼줌)
// 소수점 이하 올림
console.log(Math.ceil(1.4)); // 2
// 소수점 이하 내림
console.log(Math.floor(1.4)); // 1
// 소수점 이하 반올림
console.log(Math.round(1.4)); // 1
// 정수만 반환
console.log(Math.trunc(1.123412)); // 1

// 최대, 최솟값 찾기
console.log(Math.max(1, 3, 4)); // 4
console.log(Math.min(1, 3, 4)); // 1

// 거듭제곱
console.log(3 ** 2); // 9
console.log(Math.pow(3, 2)); // 9

// 제곱근 - 어떤걸 두번 곱해야 9됨?
console.log(Math.sqrt(9)); // 3

// 랜덤한 값을 반환(0~1 사이 랜덤값 반환)
console.log(Math.random());
console.log(Math.floor(Math.random() * 10 + 1)); // 0 ~ 10 까지 랜덤한 숫자
