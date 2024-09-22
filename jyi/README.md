# 프로토타입(Prototype)

## 소제목
// 내용

## Quiz
```javascript
// 클래스를 베이스로 한 객체지향 프로그래밍
class Animal {
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  printName() {
    console.log(`${this.name} ${this.emoji}`);
  }
}

class Dog extends Animal {
  play() {
    console.log("같이 놀자옹!");
  }
}

class Tiger extends Animal {
  hunt() {
    console.log("사냥하자!");
  }
}

const dog = new Dog("멍멍", "🐶");
console.log(dog);
dog.printName();
dog.play();

const tiger = new Tiger("어흥", "🐯");
console.log(tiger);
tiger.printName();
tiger.hunt();

```

## 회고
// 강의 듣고 느낀점
