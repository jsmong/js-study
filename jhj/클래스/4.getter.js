// 접근자 프로퍼티 (Accessor Property)
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  // fullName() {
  //   return `${this.lastName} ${this.firstName}`;
  // }

  // 함수지만, 속성이라 간주되는 유형의 함수를 속성처럼 접근 -> get
  get fullName() {
    return `${this.lastName} ${this.firstName}`;
  }

  set fullName(value) {
    console.log('set', value);
  }
}

const student = new Student('수지', '김');
console.log(student.firstName);
// console.log(student.fullName()); // 이렇게 접근하기가 싫다 -> getter!
console.log(student.fullName);
student.fullName = '김철수';
