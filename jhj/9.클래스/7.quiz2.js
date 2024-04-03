// 정직원과 파트타임 직원을 나타낼수 있는 클래스 만들기
// 직원들 정보 : 이름, 부서이름, 한달 근무 시간
// 매달 직원들의 정보를 이용하여 한달 월급 계산할 수 있다.
// 정직원은 시간당 10000원
// 파트타임 직원은 시간당 8000원

// class Staff {
//   #wage;
//   constructor(name, part, workTime, staffType) {
//     this.name = name;
//     this.part = part;
//     this.workTime = workTime;
//     if (staffType === '정직원') {
//       this.#wage = 10000;
//     } else {
//       this.#wage = 8000;
//     }
//   }
//   get salary() {
//     return (this.#wage * this.workTime).toLocaleString();
//   }
// }

// // 테스트 코드
// const staff1 = new Staff('장현정', '개발부', 40, '정직원');
// console.log(staff1.salary);
// console.log(staff1.wage);

// 풀이 2.
class Staff {
  constructor(name, part, workTime) {
    this.name = name;
    this.part = part;
    this.workTime = workTime;
  }
  get salary() {
    return (this.wage * this.workTime).toLocaleString();
  }
}

class FulltimeStaff extends Staff {
  constructor(name, part, workTime) {
    super(name, part, workTime);
    this.wage = 10000;
  }
}

class PartTimeStaff extends Staff {
  constructor(name, part, workTime) {
    super(name, part, workTime);
    this.wage = 8000;
  }
}
// 테스트 코드
const 현정 = new FulltimeStaff('장현정', '개발부', 40);
console.log(현정.salary);
console.log(현정.wage);

const 은우 = new PartTimeStaff('차은우', '개발부', '40');
console.log(은우.salary);
console.log(은우.wage);

// 풀이 3. (앨리 풀이 참고함)
// class Staff {
//   constructor(name, part, workTime, wage) {
//     this.name = name;
//     this.part = part;
//     this.workTime = workTime;
//     this.wage = wage;
//   }
//   get salary() {
//     return (this.wage * this.workTime).toLocaleString();
//   }
// }

// class FulltimeStaff extends Staff {
//   static WAGE = 10000;
//   constructor(name, part, workTime) {
//     super(name, part, workTime, FulltimeStaff.WAGE);
//   }
// }

// class PartTimeStaff extends Staff {
//   static WAGE = 8000;
//   constructor(name, part, workTime) {
//     super(name, part, workTime, PartTimeStaff.WAGE);
//   }
// }
// // 테스트 코드
// const 현정 = new FulltimeStaff('장현정', '개발부', 40);
// console.log(현정.salary);
// console.log(현정.wage);

// const 은우 = new PartTimeStaff('차은우', '개발부', '40');
// console.log(은우.salary);
// console.log(은우.wage);
