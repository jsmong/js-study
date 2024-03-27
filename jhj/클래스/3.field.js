// 접근제어자 - 캡슐화
// 클래스 내부에서만 사용할 프라이빗한 field 가 있다면 -> #
// private(#), public(기본), protected
class Fruit {
  #name;
  constructor(name, emoji) {
    this.#name = name;
    this.emoji = emoji;
  }
  #display = () => {
    console.log(`${this.#name}: ${this.emoji}`);
  };
}

const apple = new Fruit('apple', '🍎');
// apple.#name = '오렌지'; // #field 클래스 외부에서 접근 불가
console.log(apple);
