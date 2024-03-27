// extends - class Dog extends Animal
// super - super(부모프로퍼티), super.부모메서드

// class Tiger {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('먹자');
//   }
//   sleep() {
//     console.log('자자');
//   }
// }

// class Dog {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('먹자');
//   }
//   sleep() {
//     console.log('자자');
//   }
//   play() {
//     console.log('놀자');
//   }
// }

// 1. 공통의 양식 생성
class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log('먹자');
  }
  sleep() {
    console.log('자자');
  }
}

class Tiger extends Animal {}
const tiger = new Tiger('노랑');
console.log(tiger);
tiger.eat();
tiger.sleep();

class Dog extends Animal {
  // Animal 에서 받아오는거 먼저 받아와야해! 리셋되니까
  constructor(color, ownerName) {
    super(color); // 부모 class 들렸다옴
    this.ownerName = ownerName;
  }
  play() {
    console.log('놀자');
  }
  // 부모내용 덮어씌움 -> 오버라이딩
  eat() {
    // super - 부모를 가리킴
    super.eat(); // 부모의 eat()을 호출함
    console.log('강아지가 먹자');
  }
}
const dog = new Dog('파랑', '현정');
console.log(dog);
dog.eat();
dog.sleep();
dog.play();
