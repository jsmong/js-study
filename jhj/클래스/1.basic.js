// 객체를 손쉽게 만들수 있는 템플릿
// 1. 생성자 함수 (오뢔된, 고전적 방법)
// 2. 클래스 (대세임 이거쓰셈)

// 클래스 class
class Fruit {
  // 생성자: new 키워드로 객체를 생성할때 호출되는 함수
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  // 함수는 {} 바깥에, this 없이 정의
  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

// apple은 Fruit 클래스의 인스턴스이다.
const apple = new Fruit('apple', '🍎');
// orange는 Fruit 클래스의 인스턴스이다.
const orange = new Fruit('orange', '🍊');

console.log(apple.name);
console.log(apple.emoji);
apple.display();

console.log(orange.name);
console.log(orange.emoji);
orange.display();

// 인스턴스 레벨에서 생성된 함수
// 이 자체만으로는 접근이 불가능하다 -> 인스턴스로 만든 뒤, 접근가능
console.log(Fruit.name);
console.log(Fruit.display());
