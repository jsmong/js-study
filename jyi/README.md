# 프로토타입(Prototype)

## Property descriptor 
- 오브젝트의 상태를 간직하는 것.
- 오브젝트의 각각의 프로퍼티는 property descriptor라고 하는 객체로 저장됨.
- (포인트) 각 객체의 속성들의 수정 여부(writable), 열거 여부(enumerable), 업뎃 여부(configurable)를 직접 설정하고 관리할 수 있다.
  
<br />

## 객체 불변성을 위한 유용한 함수
- Object.freeze() : 완전 동결! 추가,삭제,쓰기,속성 재정의 모두 X
- Object.seal() : 밀봉! 값 수정만 가능, 추가,삭제,속성 재정의 X (객체 모양 유지)
- Object.preventExtensions() : 확장 금지! 속성 추가만 안됨. 값 수정, 속성 삭제 가능
  
<br />

## 프로토타입의 장점
- 메모리 절약
- 객체간 상속(inheritance)을 통한 코드의 재사용
  
<br />

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
