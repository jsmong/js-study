// 정직원과 파트타임직원을 나타낼 수 있는 클래스를 만들어 보자
// 직원들의 정보 : 이름, 부서이름, 월 근무시간
// 매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다
// 정직원은 시간당 10000원
// 파트타임 직원은 시간당 8000원

class Employee {
  constructor(name, department, hoursPerMonth, payRate) {
    this.name = name;
    this.department = department;
    this.hoursPerMonth = hoursPerMonth;
    this.payRate = payRate;
  }
  calculatePay() {
    return this.hoursPerMonth * this.payRate;
  }
}

class FullTimeEmployee extends Employee {
  // PAY_RATE static 멤버 필드는 내부에서만 사용함
  // 외부에서 참조할 필요도, 다른 값으로 변경하면 안되니
  // static private로 설정해서 외부에서 보지도, 수정하지도 못하게 캡슐화!
  static #PAY_RATE = 10000;
  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth, FullTimeEmployee.#PAY_RATE);
  }
}

class PartTimeEmployee extends Employee {
  static #PAY_RATE = 8000;
  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth, PartTimeEmployee.#PAY_RATE);
  }
}
const olivia = new FullTimeEmployee('올리비아', 's/w', 30);
const bob = new PartTimeEmployee('밥', 's/w', 20);
console.log(olivia.calculatePay());
console.log(bob.calculatePay());