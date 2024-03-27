// 카운터 만들기
// 0 이상의 값으로 초기화 한 뒤 하나씩 숫자를 증가할 수 있는 카운터 만들기
// Counter 클래스 만들기
class Counter {
  constructor(num) {
    this.num = num;
  }
  count() {
    return this.num++;
  }
}
const counterIns = new Counter(1);
counterIns.count();
counterIns.count();
counterIns.count();
console.log(counterIns.num);

// class Counter {
//   #value;
//   constructor(startValue) {
//     if (isNaN(startValue) || startValue < 0) {
//       this.#value = 0;
//     } else {
//       this.#value = startValue;
//     }
//   }

//   get value() {
//     return this.#value;
//   }
//   increment = () => {
//     return this.#value++;
//   };
// }
// const counter = new Counter(0);
// counter.increment();
// counter.increment();
// console.log(counter.value);
