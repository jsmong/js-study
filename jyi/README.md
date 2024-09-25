# 프로토타입(Prototype)

## 프로토타입이란
- 자바스크립트가 함수에 자동으로 생성하는 객체
- **생성자 함수**를 통해 생성된 인스턴스는 생성자 함수의 프로토타입을 참조하여 프로토타입에 정의된 속성과 메서드를 자신의 것처럼 접근할 수 있다.
- ex) new Array로 배열 인스턴스를 만드는 경우 Array.prototype에 있는 메서드들(filter, map, includes 등)에 접근하고 사용할 수 있다.

<br />

## 프로토타입의 활용
- 메모리 절약 : 객체의 모든 인스턴스에 동일한 메서드가 필요할 때, 프로토타입을 사용해 메서드를 한번만 정의하여 메모리를 절약
- 상속(프로토타입 체인) : 객체간 상속(inheritance)을 통해 코드를 재사용
- 런타임에 객체 구조 변경 or 기능 확장이 필요한 경우
```javascript
Array.prototype.last = function() {
  return this[this.length - 1];
};

const arr = [1, 2, 3];
console.log(arr.last()); // 3
```

<br />

## Property descriptor 
- 오브젝트의 상태를 간직하는 것.
- 오브젝트의 각각의 프로퍼티는 property descriptor라고 하는 객체로 저장됨.
- (포인트) 각 객체의 속성들의 값 수정 여부(writable), 열거 여부(enumerable), 업뎃 여부(configurable)를 직접 설정하고 관리할 수 있다.
  
<br />

- 객체의 각 속성(또는 프로토타입을 통해 상속된 속성이나 메서드)이 어떻게 동작하는지 디스크립터 설정을 통해 정확히 이해할 수 있다. 
- 프로토타입을 통해 상속된 메서드를 변경하거나 보호하고 싶을 때 디스크립터를 사용하여 속성의 변경 가능 여부나 열거 가능 여부를 조정할 수 있다.
  
<br />

## 객체 불변성을 위한 유용한 함수
- 객체의 불변성을 유지하고 싶을때 property descriptor로 일일이 설정하지않고 아래 세가지 함수 사용
- Object.freeze() : 완전 동결! 값 수정과 키 수정 모두 불가능
- Object.seal() : 밀봉! 값 수정만 가능, 키 수정 불가능 (객체 모양 유지)
- Object.preventExtensions() : 확장 금지! 속성 추가만 안됨. 값 수정, 속성 삭제 가능
  
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
