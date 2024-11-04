// const multiple = {
//   [Symbol.iterator]() {
//     const max = 10;
//     let num = 0;
//     return {
//       next() {
//         return { value: num++ * 2, done: num > max };
//       },
//     };
//   },
// };

// for (const num of multiple) {
//   console.log(num);
// }

// generator
// 값을 생성할 수 있는..
function* multipleGenerator() {
  try {
    for (let i = 0; i < 10; i++) {
      console.log(i);
      yield i ** 2; // 사용자가 원할때까지 기다렸다 리턴
    }
  } catch (error) {
    console.log(error);
  }
}
const multiple = multipleGenerator();
let next = multiple.next();
console.log(next.value, next.done);
next = multiple.next();
console.log(next.value, next.done);
// multiple.return(); //  끝내
// multiple.throw('Error!'); //  에러던져
next = multiple.next();
console.log(next.value, next.done);
