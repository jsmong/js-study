// static 정적 프로퍼티, 메서드
// static 으로 만들어진 클래스 레벨 메서드는 인스턴스 레벨에선 보이지 않고, 클래스 이름을 통해서만 접근 가능
// 클래스 레벨에서 공통적으로 사용할 녀석들에 정의해주기

class Fruit {
  // 인스턴스 레벨에서 접근 불가, 클래스 레벨에서만 접근 가능
  // static 키워드 붙이면 생성가능
  static MAX_FRUIT = 4;

  // 생성자: new 키워드로 객체를 생성할때 호출되는 함수
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  // 클래스 레벨의 메서드 : static 키워드 붙이면 생성가능
  static makeRandomFruit() {
    // 클래스 레벨의 메서드에서는 this를 참조할수 없음
    return new Fruit('banana', '🍌');
  }

  // 인스턴스 레벨의 메서드
  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

// 클래스 레벨의 함수 : 클래스 이름으로 접근 가능
const banana = Fruit.makeRandomFruit();
console.log(Fruit.MAX_FRUIT);
console.log(banana);

// 인스턴스 레벨의 함수와 프로퍼티 : 인스턴스를 생성 후 접근 가능
const apple = new Fruit('apple', '🍎');
const orange = new Fruit('orange', '🍊');

console.log(apple.name);
console.log(apple.emoji);
apple.display();

console.log(orange.name);
console.log(orange.emoji);
orange.display();

// 인스턴스 레벨에서 생성된 함수
// 이 자체만으로는 접근이 불가능하다 -> 인스턴스로 만든 뒤, 접근가능
// console.log(Fruit.name);
// console.log(Fruit.display());

// class - static 예시
Math.pow(); // Math 인스턴스를 사용하지 않아도, 바로 메서드 실행가능
Number.isFinite(1);
