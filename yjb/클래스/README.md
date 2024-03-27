## 클래스와 생성자 함수의 인스턴스 생성 과정

### 클래스

```javascript
class Apple {
  constructor(name) {
    // 1. {} 암묵적으로 빈 객체 생성후 this에 바인딩
    this.name = name; // 2. this에 바인딩되어 있는 인스턴스 초기화
    // 3. 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환
    // return this;
  }
}
const apple = new Apple('🍎');
console.log(apple);
```

### 생성자 함수

```javascript
function Apple(name) {
  // 1. {} 암묵적으로 빈 객체 생성후 this에 바인딩
  this.name = name; // 2. this에 바인딩되어 있는 인스턴스 초기화

  // 3. 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환
  // return this; // 생략 가능
}
const apple = new Apple('🍎');
console.log(apple);
```

<br/>

## static

정적 메서드는 인스턴스를 생성하지 않아도 접근 가능

```javascript
class Apple {
  static color = 'blue';

  constructor(name) {
    this.name = name;
  }

  static getStaticColor() {
    console.log(`Static: My color is ${this.color}`);
  }

  getColor() {
    console.log(`Public: My color is ${this.color}`);
  }
}
const apple = new Apple('🍎');
```

```javascript
// static 프로퍼티 접근
console.log('Instance level - Color: ', apple.color); // undefined
console.log('Class level - Color: ', Apple.color); // blue

// static 메서드 접근
Apple.getStaticColor(); // My color is blue

// public 메서드 접근
Apple.getColor(); // Uncaught TypeError: Apple.getColor is not a function
```

활용 예)  
Math.round(), Math.pow()..

## Quiz

1. 클래스의 constructor 내부에서 리턴값을 명시적으로 변경하면 어떤 값이 출력될까?

   > constructor는 별도의 반환문을 갖지 않아야 한다. 반드시 생략해야 한다.  
   > constructor 내부에서 명시적으로 this가 아닌 다른 값을 반환하는 것은 클래스의 기본 동작을 훼손한다.

   ```javascript
   class Apple {
     constructor(name) {
       this.name = name;
       return {}; // 1. 객체 반환
       return false; // 2. 원시값 반환
     }
   }
   const apple = new Apple('🍎');
   console.log(apple); // ?
   ```

2. 클래스와 클래스 인스턴스의 타입은?

   ```javascript
   class Apple {
     constructor(name) {
       this.name = name;
     }
   }
   const apple = new Apple('🍎');
   ```

   ```javascript
   typeof Apple; // ?
   typeof apple; // ?
   ```

3. 함수는 new 연산자 사용 여부에 따라 `일반 함수` or 인스턴스 생성을 위한 `생성자 함수`로 호출된다.  
   그럼 클래스에서는?

   예시

   ```javascript
   function Color(color) {
     this.color = color;
     return this.color;
   }
   ```

   ```javascript
   const color = new Color('Red'); // 1. 생성자 함수로 호출
   console.log(color);

   Color('Red'); // 2. 일반 함수로 호출
   ```

   클래스

   ```javascript
   class Color {
     constructor(color) {
       this.color = color;
     }
   }
   ```

   ```javascript
   const color = new Color('Red'); // 1. 생성자 함수로 호출
   console.log(color);

   Color('Red'); // 2. 일반 함수로 호출
   ```

   위 코드의 출력값은??
